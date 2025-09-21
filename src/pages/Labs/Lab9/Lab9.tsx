import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Lab9.module.scss';

const Lab9: React.FC = () => {
  const navigate = useNavigate();
  const [browserInfo, setBrowserInfo] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const detectBrowser = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/browser-info');
      const data = await response.json();
      if (data.success) {
        setBrowserInfo(data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
    setLoading(false);
  };

  return (
    <div className={styles.lab9}>
      <button className={styles.backButton} onClick={() => navigate('/')}>
        ← Назад к списку лабораторных
      </button>

      <h1>Лабораторная работа №9</h1>
      <p>Определение информации о браузере и системе</p>

      <div className={styles.section}>
        <button 
          className={styles.detectButton} 
          onClick={detectBrowser}
          disabled={loading}
        >
          {loading ? 'Определение...' : 'Определить браузер и систему'}
        </button>

        {browserInfo && (
          <div className={styles.infoContainer}>
            <h2>Информация о вашей системе:</h2>
            
            <div className={styles.infoGrid}>
              <div className={styles.infoItem}>
                <span className={styles.label}>Браузер:</span>
                <span className={styles.value}>{browserInfo.browser}</span>
              </div>
              
              <div className={styles.infoItem}>
                <span className={styles.label}>Версия:</span>
                <span className={styles.value}>{browserInfo.version}</span>
              </div>
              
              <div className={styles.infoItem}>
                <span className={styles.label}>Операционная система:</span>
                <span className={styles.value}>{browserInfo.os}</span>
              </div>
              
              <div className={styles.infoItem}>
                <span className={styles.label}>IP-адрес:</span>
                <span className={styles.value}>{browserInfo.ip || 'Не определен'}</span>
              </div>
              
              <div className={styles.infoItem}>
                <span className={styles.label}>Язык:</span>
                <span className={styles.value}>{browserInfo.language}</span>
              </div>
            </div>

            <div className={styles.rawInfo}>
              <h3>User-Agent:</h3>
              <code>{browserInfo.userAgent}</code>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Lab9;