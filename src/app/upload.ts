import { v2 as cloudinary } from 'cloudinary';
import { promises as fs } from 'fs';
import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const folderPath = './assets';
    const files = await fs.readdir(folderPath);
    const allowedExtensions = ['.jpg', '.jpeg', '.png', '.webp'];
    const imageFiles = files.filter(file => 
      allowedExtensions.includes(path.extname(file).toLowerCase())
    );

    const responses = await Promise.all(
      imageFiles.map(async (file) => {
        const filePath = path.join(folderPath, file);
        const result = await cloudinary.uploader.upload(filePath, {
          folder: 'website-photos',
        });
        return result;
      })
    ); 

    const responseFilePath = './data.json';
    await fs.writeFile(responseFilePath, JSON.stringify(responses, null, 2));

    res.status(200).json({ message: 'Photos uploaded successfully' });
  } catch (error) {
    console.error('Error uploading photos:', error);
    res.status(500).json({ error: 'Failed to upload photos' });
  }
};

export default handler;