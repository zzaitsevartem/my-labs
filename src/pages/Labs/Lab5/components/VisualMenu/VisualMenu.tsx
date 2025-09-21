import React, { useState } from 'react';
import styles from './VisualMenu.module.scss';

const VisualMenu: React.FC = () => {
  const [activeButton, setActiveButton] = useState<number | null>(null);

  const menuItems = ['Главная', 'О нас', 'Контакты', 'Портфолио'];

  return (
    <div className={styles.section}>
      <h2>🎨 Визуальное меню</h2>
      <p>Наведите на кнопки для эффекта</p>
      
      <div className={styles.graphicMenu}>
        {menuItems.map((item, index) => (
          <button
            key={index}
            className={`${styles.menuButton} ${activeButton === index ? styles.active : ''}`}
            onMouseEnter={() => setActiveButton(index)}
            onMouseLeave={() => setActiveButton(null)}
          >
            {item}
          </button>
        ))}
      </div>

      {activeButton !== null && (
        <div className={styles.menuInfo}>
          Выбрано: {menuItems[activeButton]}
        </div>
      )}
    </div>
  );
};

export default VisualMenu;