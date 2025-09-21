import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Home.module.scss';

const Home: React.FC = () => {
  const labs = [
    { id: 1, title: 'Создание и оформление документа HTML' },
    { id: 2, title: 'Создание формы в кадрах документа HTML' },
    { id: 3, title: 'Использование кода сценария Java Script в оформлении HTML – документа' },
    { id: 4, title: ' Использование функций в сценариях Java Script'},
    { id: 5, title: 'Использование разветвляющихся алгоритмов в сценариях Java Script' },
    { id: 6, title: 'Использование циклических алгоритмов в сценариях Java Script' },
    { id: 7, title: 'Управление окнами фрейма и графическими объектами при помощи Java Script' },
    { id: 8, title: 'Создание серверного сценария' },
    { id: 9, title: 'Определение возможностей и типа браузера через серверный сценарий' }
  ];

  return (
    <div className={styles.home}>
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <img 
            src="/images/me.png" 
            alt="Зайцев Артем" 
            className={styles.profileImage}
          />
          <div className={styles.textContent}>
            <h1 className={styles.title}>Лабораторные работы</h1>
            <p className={styles.subtitle}>по дисциплине "Распределенные системы"</p>
          </div>
        </div>
        
        <div className={styles.author}>
          <div className={styles.authorInfo}>
            <p className={styles.authorText}>Работу подготовил</p>
            <p className={styles.authorName}>Зайцев Артем Сергеевич</p>
            <p className={styles.authorDetails}>Студент 3 курса СТГАУ</p>
            <p className={styles.authorDetails}>Факультет "Информационные системы и технологии в бизнесе"</p>
          </div>
        </div>
      </div>

      <div className={styles.labsContainer}>
        <h2 className={styles.labsTitle}>Список лабораторных работ</h2>
        <div className={styles.labsGrid}>
          {labs.map((lab) => (
            <NavLink
              key={lab.id}
              to={`/lab${lab.id}`}
              className={({ isActive }) => 
                `${styles.labCard} ${isActive ? styles.active : ''}`
              }
            >
              <span className={styles.labNumber}>Лабораторная работа №{lab.id}</span>
              <p className={styles.labDescription}>{lab.title}</p>
              <div className={styles.labHoverEffect}></div>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;