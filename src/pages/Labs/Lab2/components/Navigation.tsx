import React from 'react';
import styles from './Navigation.module.scss';

interface NavigationProps {
  activeComponent: 'auth' | 'user' | 'main';
  onComponentChange: (component: 'auth' | 'user' | 'main') => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeComponent, onComponentChange }) => {
  return (
    <nav className={styles.navigation}>
      <h3 className={styles.navTitle}>Навигация</h3>
      
      <ul className={styles.navList}>
        <li>
          <button 
            className={`${styles.navButton} ${activeComponent === 'main' ? styles.active : ''}`}
            onClick={() => onComponentChange('main')}
          >
            🏠 Главная
          </button>
        </li>
        
        <li>
          <button 
            className={`${styles.navButton} ${activeComponent === 'auth' ? styles.active : ''}`}
            onClick={() => onComponentChange('auth')}
          >
            🔐 Авторизация
          </button>
        </li>
        
        <li>
          <button 
            className={`${styles.navButton} ${activeComponent === 'user' ? styles.active : ''}`}
            onClick={() => onComponentChange('user')}
          >
            📝 Анкета
          </button>
        </li>
        
        <li className={styles.divider}></li>
        
        <li>
          <button className={styles.navButton}>
            📁 Лабораторная 1
          </button>
        </li>
        
        <li>
          <button className={styles.navButton}>
            📁 Лабораторная 3
          </button>
        </li>
        
        <li>
          <button className={styles.navButton}>
            📁 Лабораторная 5
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;