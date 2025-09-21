import React from 'react';
import { useNavigate } from 'react-router-dom';
import PhotoGallery from './components/PhotoGallery/PhotoGallery';
import ExamSummary from './components/ExamSummary/ExamSummary';
import styles from './Lab6.module.scss';

const Lab6: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.lab6}>
      <button className={styles.backButton} onClick={() => navigate('/')}>
        ← Назад к списку лабораторных
      </button>

      <h1 className={styles.title}>Лабораторная работа №6</h1>
      <p className={styles.subtitle}>Использование циклических алгоритмов в сценариях JavaScript</p>

      <PhotoGallery />
      <ExamSummary />
    </div>
  );
};

export default Lab6;