import React from 'react';
import { useNavigate } from 'react-router-dom';
import AuthValidator from './components/AuthValidator/AuthValidator';
import VisualMenu from './components/VisualMenu/VisualMenu';
import styles from './Lab5.module.scss';

const Lab5: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.lab5}>
      <button className={styles.backButton} onClick={() => navigate('/')}>
        ← Назад к списку лабораторных
      </button>

      <h1 className={styles.title}>Лабораторная работа №5</h1>
      <p className={styles.subtitle}>Использование разветвляющихся алгоритмов</p>

      <AuthValidator />
      <VisualMenu />
    </div>
  );
};

export default Lab5;