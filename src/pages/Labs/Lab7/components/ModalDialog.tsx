import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../Lab7.module.scss';

const ModalDialog: React.FC = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChoice = (choice: 'gallery' | 'slideshow') => {
    setIsModalOpen(false);
    if (choice === 'gallery') {
      navigate('/lab6');
    } else {
      const slideShowSection = document.querySelector(`.${styles.slideshowSection}`);
      if (slideShowSection) {
        slideShowSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className={styles.modalSection}>
      <h2>Диалоговое окно выбора</h2>
      <p>Выберите тип показа: фото-галерея или слайд-шоу</p>
      
      <button 
        className={styles.openModalButton}
        onClick={() => setIsModalOpen(true)}
      >
        Открыть выбор показа
      </button>

      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h3>Выберите тип показа</h3>
            <div className={styles.modalContent}>
              <p>Для показа <strong>фото-галереи</strong> нажмите ОК</p>
              <p>Для показа <strong>слайд-шоу</strong> нажмите Отмена</p>
            </div>
            
            <div className={styles.modalButtons}>
              <button 
                className={styles.okButton}
                onClick={() => handleChoice('gallery')}
              >
                OK
              </button>
              <button 
                className={styles.cancelButton}
                onClick={() => handleChoice('slideshow')}
              >
                Отмена
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalDialog;