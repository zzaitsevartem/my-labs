import { Request, Response } from 'express';

const getRandomAd = (req: Request, res: Response) => {
  try {
    // Генерируем случайное число от 1 до 3
    const randomNum = Math.floor(Math.random() * 3) + 1;
    const imageUrl = `/images/ads/ad${randomNum}.jpg`;
    
    res.json({ 
      success: true,
      imageUrl 
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      error: 'Server error' 
    });
  }
};

export default getRandomAd;