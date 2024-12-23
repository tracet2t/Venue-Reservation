import { NextApiRequest, NextApiResponse } from 'next';
import { Storage } from '@google-cloud/storage';
import formidable from 'formidable';
import fs from 'fs';

export const config = {
  api: {
    bodyParser: false,
  },
};

const storage = new Storage({
  projectId: process.env.GOOGLE_CLOUD_PROJECT_ID,
  credentials: JSON.parse(process.env.GOOGLE_CLOUD_CREDENTIALS || '{}')
});

const bucketName = process.env.GOOGLE_CLOUD_BUCKET_NAME!;
const bucket = storage.bucket(bucketName);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST' && req.method !== 'DELETE') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (req.method === 'DELETE') {
    const body = await new Promise((resolve) => {
      let data = '';
      req.on('data', chunk => {
        data += chunk;
      });
      req.on('end', () => {
        resolve(JSON.parse(data));
      });
    });

    try {
      const { imageUrl } = body as { imageUrl: string };
      if (!imageUrl) {
        return res.status(400).json({ error: 'Image URL is required' });
      }

      const fileName = imageUrl.split(`${bucketName}/`)[1];
      await bucket.file(fileName).delete();
      return res.status(200).json({ message: 'Image deleted successfully' });
    } catch (error) {
      console.error('Delete error:', error);
      return res.status(500).json({ error: 'Failed to delete image' });
    }
  }
/* eslint-disable @typescript-eslint/no-unused-vars */
  try {
    const form = formidable({});
    const [_, files] = await form.parse(req);
    const file = files.file?.[0];
/* eslint-disable @typescript-eslint/no-unused-vars */
    if (!file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const uniqueFilename = `venues/${Date.now()}-${file.originalFilename}`;
    const blob = bucket.file(uniqueFilename);
    const blobStream = blob.createWriteStream({
      resumable: false,
      metadata: {
        contentType: file.mimetype || 'application/octet-stream',
      },
    });

    // Improved stream handling with cleanup
    const fileStream = fs.createReadStream(file.filepath);
    
    await new Promise((resolve, reject) => {
      fileStream
        .pipe(blobStream)
        .on('error', (error) => {
          fileStream.destroy();
          reject(error);
        })
        .on('finish', () => {
          fileStream.destroy();
          resolve(true);
        });
    });

    const publicUrl = `https://storage.googleapis.com/${bucketName}/${uniqueFilename}`;
    fs.unlinkSync(file.filepath);

    return res.status(200).json({ imageUrl: publicUrl });
    
  } catch (error) {
    console.error('Upload error:', error);
    return res.status(500).json({ 
      error: 'Failed to upload image',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}