import { Configuration, OpenAIApi } from 'openai';

const openai = new OpenAIApi(new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
}));

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { imageUrls } = req.body;

    // Call OpenAI API to generate quotation based on images
    const response = await openai.createImageAnalysis({
      images: imageUrls,
    });

    const quotation = response.data.choices[0].text;

    res.status(200).json({ quotation });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
