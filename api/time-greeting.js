export default function handler(req, res) {
  try {
    const now = new Date();
    const hour = now.getHours();
    let message = '';

    if (hour < 6) message = 'Доброй ночи!';
    else if (hour < 12) message = 'Доброе утро!';
    else if (hour < 18) message = 'Добрый день!';
    else message = 'Добрый вечер!';

    res.status(200).json({ 
      success: true,
      message,
      hour
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      error: 'Server error' 
    });
  }
}