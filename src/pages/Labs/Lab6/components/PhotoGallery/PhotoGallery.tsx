import React, { useState } from 'react';
import styles from './PhotoGallery.module.scss';

const PhotoGallery: React.FC = () => {
  const [currentSet, setCurrentSet] = useState(1);

  const changeImages = (startIndex: number) => {
    setCurrentSet(startIndex);
  };

  return (
    <div className={styles.section}>
      <h2>📷 Фото-галерея "Мои каникулы"</h2>
      
      <div className={styles.gallery}>
        <div className={styles.imagesRow}>
          {[0, 1, 2, 3, 4].map((index) => (
            <img
              key={index}
              src={`/images/photo-galerry${currentSet + index}.jpg`}
              alt={`Фото ${currentSet + index}`}
              className={styles.galleryImage}
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/images/placeholder.jpg';
                (e.target as HTMLImageElement).alt = 'Изображение не найдено';
              }}
            />
          ))}
        </div>
      </div>

      <div className={styles.controls}>
        <button 
          className={styles.controlButton}
          onClick={() => changeImages(1)}
        >
          1-5
        </button>
        <button 
          className={styles.controlButton}
          onClick={() => changeImages(6)}
        >
          6-10
        </button>
      </div>
    </div>
  );
};

export default PhotoGallery;