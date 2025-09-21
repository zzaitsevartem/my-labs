import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Lab3.module.scss';

const Lab3: React.FC = () => {
  const navigate = useNavigate();

  const phrases = [
    "Программирование — это не о том, чтобы знать всё, а о том, чтобы знать, где найти ответ",
    "Сначала решите проблему. Затем пишите код",
    "Лучший код — это тот, который не нужно писать",
    "Работающий код сегодня лучше, чем идеальный код завтра",
    "Ошибки — это не неудачи, это ступени к мастерству", 
    "Чистый код — это код, который понятен без комментариев",
    "Настоящий программист всегда смотрит в обе стороны, переходя дорогу с односторонним движением"
  ];

  const photos = [
    "/images/photo0.jpg",
    "/images/photo1.jpg",
    "/images/photo2.jpg",
    "/images/photo3.jpg",
    "/images/photo4.jpg",
    "/images/photo5.jpg",
    "/images/photo6.jpg"
  ];

  const randomIndex = Math.floor(Math.random() * 7);

  return (
    <div className={styles.lab3}>
      <button className={styles.backButton} onClick={() => navigate('/')}>
        ← Назад к списку лабораторных
      </button>

      <div className={styles.header}>
        <h1 className={styles.title}>Лабораторная работа №3</h1>
        <p className={styles.subtitle}>Использование кода сценария JavaScript в оформлении HTML-документа</p>
      </div>

      <div className={styles.quoteSection}>
        <h2 className={styles.sectionTitle}>🗨️ Фраза дня:</h2>
        <div className={styles.quoteBox}>
          <p className={styles.quote}>{phrases[randomIndex]}</p>
        </div>
      </div>

      <div className={styles.photoSection}>
        <h2 className={styles.sectionTitle}>📸 Фото дня:</h2>
        <div className={styles.photoContainer}>
          <img 
            src={photos[randomIndex]} 
            alt="Фото дня" 
            className={styles.photo}
          />
        </div>
      </div>

      <div className={styles.personalInfo}>
        <h2 className={styles.sectionTitle}>👨‍💻 Обо мне</h2>
        <div className={styles.infoContent}>
          <div className={styles.photoContainer}>
            <img 
              src="/images/me.png" 
              alt="Зайцев Артем" 
              className={styles.profilePhoto}
            />
          </div>
          <div className={styles.infoText}>
            <p><strong>ФИО:</strong> Зайцев Артем Сергеевич</p>
            <p><strong>Возраст:</strong> 19 лет</p>
            <p><strong>Образование:</strong> СТГАУ, факультет "Информационные системы и технологии в бизнесе", 3 курс</p>
            <p><strong>Увлечения:</strong> программирование, веб-разработка, видеоигры, путешествия</p>
          </div>
        </div>
      </div>

      <div className={styles.refreshSection}>
        <button 
          className={styles.refreshButton}
          onClick={() => window.location.reload()}
        >
          🔄 Обновить страницу
        </button>
      </div>
    </div>
  );
};

export default Lab3;