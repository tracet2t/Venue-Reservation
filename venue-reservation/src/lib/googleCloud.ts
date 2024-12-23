import { Storage } from '@google-cloud/storage';

const storage = new Storage({
  projectId: process.env.GOOGLE_CLOUD_PROJECT_ID,
  credentials: JSON.parse(process.env.GOOGLE_CLOUD_CREDENTIALS || '{}')
});

const bucketName = process.env.GOOGLE_CLOUD_BUCKET_NAME!;
const bucket = storage.bucket(bucketName);

interface UploadedFile {
  originalname: string;
  buffer: Buffer;
  mimetype: string;
}

export const uploadToGoogleCloud = async (file: UploadedFile) => {
  try {
    const uniqueFileName = `${Date.now()}-${file.originalname}`;
    const blob = bucket.file(uniqueFileName);
    const blobStream = blob.createWriteStream({
      resumable: false,
      metadata: {
        contentType: file.mimetype,
      },
    });

    return new Promise((resolve, reject) => {
      blobStream.on('error', (err) => reject(err));
      blobStream.on('finish', () => {
        const publicUrl = `https://storage.googleapis.com/${bucketName}/${uniqueFileName}`;
        resolve(publicUrl);
      });
      blobStream.end(file.buffer);
    });
  } catch (error) {
    throw new Error(`Failed to upload file: ${error}`);
  }
};