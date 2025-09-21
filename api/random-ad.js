export default function handler(req, res) {
  try {
    const randomNum = Math.floor(Math.random() * 3) + 1;
    const imageUrl = `/images/ads/ad${randomNum}.jpg`;
    
    res.status(200).json({ 
      success: true,
      imageUrl 
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      error: 'Server error' 
    });
  }
}