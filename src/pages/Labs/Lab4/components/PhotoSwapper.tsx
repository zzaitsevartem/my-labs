import React, { useState } from 'react';
import styles from '../Lab4.module.scss';

const PhotoSwapper: React.FC = () => {
  const [photos, setPhotos] = useState(['/images/swipper0.jpg', '/images/swipper1.jpg']);

  const swapPhotos = () => {
    setPhotos([photos[1], photos[0]]);
  };

  return (
    <div className={styles.section}>
      <h2 className={styles.sectionTitle}>🔄 Обмен фотографий</h2>
      
      <div className={styles.photosContainer}>
        <div className={styles.photoWrapper}>
          <img src={photos[0]} alt="Фото 1" className={styles.photo} />
          <p>Фото 1</p>
        </div>
        
        <div className={styles.photoWrapper}>
          <img src={photos[1]} alt="Фото 2" className={styles.photo} />
          <p>Фото 2</p>
        </div>
      </div>

      <button className={styles.swapButton} onClick={swapPhotos}>
        🔄 Поменять местами
      </button>
    </div>
  );
};

export default PhotoSwapper;