import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FrameLayout from './components/FrameLayout';
import AuthForm from './components/AuthForm';
import UserForm from './components/UserForm';
import Navigation from './components/Navigation';
import styles from './Lab2.module.scss';

type ActiveComponent = 'auth' | 'user' | 'main';

const Lab2: React.FC = () => {
  const navigate = useNavigate();
  const [activeComponent, setActiveComponent] = useState<ActiveComponent>('main');

  const renderContent = () => {
    switch (activeComponent) {
      case 'auth':
        return <AuthForm />;
      case 'user':
        return <UserForm />;
      case 'main':
      default:
        return (
          <div className={styles.mainContent}>
            <h2>Добро пожаловать на мой сайт!</h2>
            <p>Это главная страница моего личного сайта, созданного в рамках лабораторной работы №2.</p>
            <p>Используйте навигационное меню слева для перехода между разделами.</p>
          </div>
        );
    }
  };

  return (
    <div className={styles.lab2}>
      <button className={styles.backButton} onClick={() => navigate('/')}>
        ← Назад к списку лабораторных
      </button>

      <div className={styles.header}>
        <h1 className={styles.title}>Лабораторная работа №2</h1>
        <p className={styles.subtitle}>Создание формы в кадрах документа HTML</p>
      </div>

      <FrameLayout
        navigation={
          <Navigation 
            activeComponent={activeComponent}
            onComponentChange={setActiveComponent}
          />
        }
        content={renderContent()}
      />
    </div>
  );
};

export default Lab2;