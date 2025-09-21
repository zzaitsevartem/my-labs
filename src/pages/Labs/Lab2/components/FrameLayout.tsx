import React from 'react';
import styles from './FrameLayout.module.scss';

interface FrameLayoutProps {
  navigation: React.ReactNode;
  content: React.ReactNode;
}

const FrameLayout: React.FC<FrameLayoutProps> = ({ navigation, content }) => {
  return (
    <div className={styles.frameLayout}>
      <div className={styles.headerFrame}>
        <div className={styles.logo}>
          <img src="/images/logo.png" alt="Логотип" className={styles.logoImage} />
          <h2>Сайт</h2>
        </div>
      </div>
      
      <div className={styles.mainContainer}>
        <div className={styles.navigationFrame}>
          {navigation}
        </div>
        
        <div className={styles.contentFrame}>
          {content}
        </div>
      </div>
    </div>
  );
};

export default FrameLayout;