import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Lab8.module.scss';

const Lab8: React.FC = () => {
  const navigate = useNavigate();
  const [adImage, setAdImage] = useState('');
  const [greeting, setGreeting] = useState('');

  const showRandomAd = async () => {
    try {
      const response = await fetch('/api/random-ad');
      const data = await response.json();
      if (data.success) {
        setAdImage(data.imageUrl);
      }
    } catch (error) {
      console.error('Error fetching ad:', error);
    }
  };

  const showGreeting = async () => {
  try {
    const response = await fetch('/api/time-greeting');
    const data = await response.json();
    if (data.success) {
      setGreeting(`${data.message} Сейчас ${data.time}`); 
    }
  } catch (error) {
    console.error('Error fetching greeting:', error);
  }
};

  return (
    <div className={styles.lab8}>
      <button className={styles.backButton} onClick={() => navigate('/')}>
        ← Назад к списку лабораторных
      </button>
      <h1>Лабораторная работа №8</h1>
      <p>Серверные сценарии на Node.js</p>
      
      <div className={styles.section}>
        <h2>Случайная реклама</h2>
        <button className={styles.button} onClick={showRandomAd}>
          Показать случайную рекламу
        </button>
        {adImage && (
          <div className={styles.imageContainer}>
            <img src={adImage} alt="Реклама" className={styles.adImage} />
          </div>
        )}
      </div>

      <div className={styles.section}>
        <h2>Приветствие по времени</h2>
        <button className={styles.button} onClick={showGreeting}>
          Узнать текущее приветствие
        </button>
        {greeting && <p className={styles.greeting}>{greeting}</p>}
      </div>
    </div>
  );
};

export default Lab8;