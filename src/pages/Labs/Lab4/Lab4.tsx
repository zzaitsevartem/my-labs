import React from 'react';
import { useNavigate } from 'react-router-dom';
import GradeCalculator from './components/GradeCalculator';
import BirthdayList from './components/BirthdayList';
import PhotoSwapper from './components/PhotoSwapper';
import styles from './Lab4.module.scss';

const Lab4: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.lab4}>
      <button className={styles.backButton} onClick={() => navigate('/')}>
        ← Назад к списку лабораторных
      </button>

      <h1 className={styles.title}>Лабораторная работа №4</h1>
      <p className={styles.subtitle}>Использование функций в сценариях JavaScript</p>
      
      <div className={styles.sections}>
        <GradeCalculator />
        <BirthdayList />
        <PhotoSwapper />
      </div>
    </div>
  );
};

export default Lab4;