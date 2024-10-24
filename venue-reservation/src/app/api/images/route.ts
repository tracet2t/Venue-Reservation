import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';

export const GET = async () => {
  // Define the path to the images.json file
  const filePath = path.join(process.cwd(), 'src', 'data', 'images.json');

  // Read the file
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const imagesData = JSON.parse(fileContents);

    // Return JSON response with image data
    return NextResponse.json(imagesData);
  } catch (error) {
    console.error('Error reading image data:', error);
    return NextResponse.json({ error: 'Failed to read image data' }, { status: 500 });
  }
};
