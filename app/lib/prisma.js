import prisma from '../../lib/prisma';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, surname, cellphone, rooms, items } = req.body;

    // Save user data to the database
    const user = await prisma.user.create({
      data: {
        name,
        surname,
        cellphone,
      },
    });

    // Save images to cloud storage and get URLs
    const imageUrls = await uploadFilesToCloudStorage(Object.values(rooms).flat());

    // Save image URLs to the database
    await prisma.image.createMany({
      data: imageUrls.map((url) => ({
        url,
        userId: user.id,
      })),
    });

    // Save items to the database
    await prisma.item.createMany({
      data: items.map((item) => ({
        ...item,
        userId: user.id,
      })),
    });

    // Generate quotation (this is a placeholder, replace with actual OpenAI call)
    const quotation = await generateQuotation(imageUrls);

    res.status(200).json({ quotation });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}

// Helper function to handle file uploads to cloud storage
async function uploadFilesToCloudStorage(files) {
  // Implement your cloud storage logic here
  // Return an array of image URLs
  return files.map((file, index) => `https://cloudstorage.example.com/image${index}.jpg`);
}

// Placeholder function to simulate quotation generation
async function generateQuotation(imageUrls) {
  return `Generated quotation based on ${imageUrls.length} images.`;
}
