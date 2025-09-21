import React, { useState, useEffect } from 'react';
import styles from '../Lab7.module.scss';

const SlideShow: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const slides = [
    '/images/christmas1.jpg',
    '/images/christmas2.jpg', 
    '/images/christmas3.jpg',
    '/images/christmas4.jpg',
    '/images/christmas5.jpg',
    '/images/christmas6.jpg',
    '/images/christmas7.jpg'
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 3000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className={styles.slideshowSection}>
      <h2>Слайд-шоу "Новогодние праздники"</h2>
      
      <div className={styles.slideshow}>
        <img
          src={slides[currentSlide]}
          alt={`Слайд ${currentSlide + 1}`}
          className={styles.slideImage}
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/images/placeholder.jpg';
          }}
        />
        
        <div className={styles.slideControls}>
          <button onClick={prevSlide} className={styles.slideControlButton}>←</button>
          <button 
            onClick={() => setIsPlaying(!isPlaying)} 
            className={styles.playButton}
          >
            {isPlaying ? '⏸️' : '▶️'}
          </button>
          <button onClick={nextSlide} className={styles.slideControlButton}>→</button>
        </div>

        <div className={styles.slideInfo}>
          Слайд {currentSlide + 1} из {slides.length}
        </div>

        <div className={styles.thumbnails}>
          {slides.map((slide, index) => (
            <img
              key={index}
              src={slide}
              alt={`Миниатюра ${index + 1}`}
              className={`${styles.thumbnail} ${index === currentSlide ? styles.activeThumbnail : ''}`}
              onClick={() => setCurrentSlide(index)}
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/images/placeholder.jpg';
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SlideShow;