export default function handler(req, res) {
  try {
    const userAgent = req.headers['user-agent'] || '';
    
    // Определение браузера
    let browser = 'UNKNOWN';
    if (userAgent.includes('MSIE') || userAgent.includes('Trident')) {
      browser = 'Internet Explorer';
    } else if (userAgent.includes('Edg')) {
      browser = 'Microsoft Edge';
    } else if (userAgent.includes('Chrome')) {
      browser = 'Google Chrome';
    } else if (userAgent.includes('Firefox')) {
      browser = 'Mozilla Firefox';
    } else if (userAgent.includes('Safari')) {
      browser = 'Apple Safari';
    } else if (userAgent.includes('Opera')) {
      browser = 'Opera';
    }

    // Определение ОС
    let os = 'UNKNOWN';
    if (userAgent.includes('Windows NT 10.0')) {
      os = 'Windows 10/11';
    } else if (userAgent.includes('Windows NT 6.3')) {
      os = 'Windows 8.1';
    } else if (userAgent.includes('Windows NT 6.2')) {
      os = 'Windows 8';
    } else if (userAgent.includes('Windows NT 6.1')) {
      os = 'Windows 7';
    } else if (userAgent.includes('Macintosh')) {
      os = 'macOS';
    } else if (userAgent.includes('Linux')) {
      os = 'Linux';
    } else if (userAgent.includes('Android')) {
      os = 'Android';
    } else if (userAgent.includes('iOS')) {
      os = 'iOS';
    }

    // Определение версии
    let version = 'UNKNOWN';
    const chromeMatch = userAgent.match(/Chrome\/(\d+\.\d+)/);
    const firefoxMatch = userAgent.match(/Firefox\/(\d+\.\d+)/);
    const safariMatch = userAgent.match(/Version\/(\d+\.\d+)/);
    const edgeMatch = userAgent.match(/Edg\/(\d+\.\d+)/);
    
    if (chromeMatch) version = chromeMatch[1];
    else if (firefoxMatch) version = firefoxMatch[1];
    else if (safariMatch) version = safariMatch[1];
    else if (edgeMatch) version = edgeMatch[1];

    res.json({
      success: true,
      userAgent,
      browser,
      os,
      version,
      ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress,
      language: req.headers['accept-language']
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server error'
    });
  }
}