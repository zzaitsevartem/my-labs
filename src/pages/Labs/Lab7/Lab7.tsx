import React from 'react';
import { useNavigate } from 'react-router-dom';
import FrameManager from './components/FrameManager';
import ModalDialog from './components/ModalDialog';
import SlideShow from './components/SlideShow';
import styles from './Lab7.module.scss';

const Lab7: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.lab7}>
      <button className={styles.backButton} onClick={() => navigate('/')}>
        ← Назад к списку лабораторных
      </button>

      <h1 className={styles.title}>Лабораторная работа №7</h1>
      <p className={styles.subtitle}>Управление окнами фрейма и графическими объектами</p>

      <FrameManager />
      <ModalDialog />
      <SlideShow />
    </div>
  );
};

export default Lab7;