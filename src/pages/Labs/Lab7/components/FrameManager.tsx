import React, { useState } from 'react';
import styles from '../Lab7.module.scss';

const FrameManager: React.FC = () => {
  const [frame1Url, setFrame1Url] = useState<string>('');
  const [frame2Url, setFrame2Url] = useState<string>('');

  const frameThemes = [
    {
      id: 1,
      name: 'Авторизация и Галерея',
      frame1Url: '/lab5',
      frame2Url: '/lab6'
    },
    {
      id: 2,
      name: 'Личная информация и Формы',
      frame1Url: '/lab1', 
      frame2Url: '/lab2'
    },
    {
      id: 3,
      name: 'Сценарии и Алгоритмы',
      frame1Url: '/lab3',
      frame2Url: '/lab4'
    }
  ];

  const changeFrames = (frame1: string, frame2: string) => {
    setFrame1Url(frame1);
    setFrame2Url(frame2);
  };

  return (
    <div className={styles.frameSection}>
      <h2>Управление окнами фрейма</h2>
      <p>Одним кликом изменяем содержимое двух фреймов</p>
      
      <div className={styles.frameMenu}>
        {frameThemes.map((theme) => (
          <button
            key={theme.id}
            className={styles.frameMenuButton}
            onClick={() => changeFrames(theme.frame1Url, theme.frame2Url)}
          >
            {theme.name}
          </button>
        ))}
      </div>

      <div className={styles.framesContainer}>
        <div className={styles.frame}>
          <h4>Фрейм 1</h4>
          <div className={styles.frameContent}>
            {frame1Url ? (
              <iframe 
                src={frame1Url}
                className={styles.iframe}
                title="Фрейм 1"
              />
            ) : (
              <div className={styles.placeholder}>
                Выберите тему для отображения
              </div>
            )}
          </div>
        </div>
        
        <div className={styles.frame}>
          <h4>Фрейм 2</h4>
          <div className={styles.frameContent}>
            {frame2Url ? (
              <iframe 
                src={frame2Url}
                className={styles.iframe}
                title="Фрейм 2"
              />
            ) : (
              <div className={styles.placeholder}>
                Выберите тему для отображения
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameManager;