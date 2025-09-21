import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Lab1.module.scss';

const Lab1: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.lab1}>
      {/* Кнопка назад */}
      <button className={styles.backButton} onClick={() => navigate('/')}>
        ← Назад к списку лабораторных
      </button>

      {/* 1. Личная информация */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Личная информация</h2>
        <div className={styles.personalInfo}>
          <div className={styles.photoContainer}>
            <img src="/images/me.png" alt="Зайцев Артем" className={styles.photo} />
          </div>
          <div className={styles.info}>
            <p><strong>ФИО:</strong> Зайцев Артем Сергеевич</p>
            <p><strong>Возраст:</strong> 19 лет</p>
            <p><strong>Образование:</strong> СТГАУ, факультет "Информационные системы и технологии в бизнесе", 3 курс</p>
            <p><strong>Увлечения:</strong> программирование, веб-разработка, видеоигры</p>
            <p><strong>Интересная история:</strong> На втором курсе углубился в профессиональную веб-разработку</p>
          </div>
        </div>
      </section>

      {/* 2. Списки */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Списки</h2>
        
        <div className={styles.lists}>
          {/* Нумерованный список группы */}
          <div className={styles.listContainer}>
            <h3>Список группы (нумерованный):</h3>
            <ol className={styles.numberedList}>
              <li>Тулузакова Глория</li>
              <li>Комаревцев Максим</li>
              <li>Руднев Алексей</li>
              <li>Зайцев Артем</li>
              <li>Шатилов иван</li>
              <li>Шпилевой Александр</li>
            </ol>
          </div>

          {/* Маркированный список родственников */}
          <div className={styles.listContainer}>
            <h3>Близкие родственники (маркер-кружок):</h3>
            <ul className={styles.circleList}>
              <li>Зайцев Сергей (отец)</li>
              <li>Зайцева Алла (мать)</li>
              <li>Зайцева Александра (сестра)</li>
              <li>Зайцева Варвара (сестра)</li>
            </ul>
          </div>

          {/* Маркированный список преподавателей */}
          <div className={styles.listContainer}>
            <h3>Любимые профессора<br /> (маркер-диск):</h3>
            <ul className={styles.discList}>
              <li>Рачков Валерий Евгеньевич</li>
              <li>Ермакова Анна Николаевна</li>
              <li>Горяйнов Михаил Федорович</li>
              <li>Богданова Светлана Викторовна</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Табель успеваемости */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Табель успеваемости</h2>
        <div className={styles.tableContainer}>
          <table className={styles.gradesTable}>
            <thead>
              <tr>
                <th>Дисциплина</th>
                <th>1 семестр</th>
                <th>2 семестр</th>
                <th>Годовая</th>
                <th>Экзамен</th>
                <th>Итог</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Веб-программирование</td>
                <td>5</td>
                <td>5</td>
                <td>5</td>
                <td>5</td>
                <td>5</td>
              </tr>
              <tr>
                <td>Базы данных</td>
                <td>4</td>
                <td>5</td>
                <td>5</td>
                <td>5</td>
                <td>5</td>
              </tr>
              <tr>
                <td>Распределенные системы</td>
                <td>5</td>
                <td>4</td>
                <td>5</td>
                <td>5</td>
                <td>5</td>
              </tr>
              <tr>
                <td>Алгоритмы</td>
                <td>5</td>
                <td>5</td>
                <td>5</td>
                <td>5</td>
                <td>5</td>
              </tr>
              <tr>
                <td>Математика</td>
                <td>4</td>
                <td>4</td>
                <td>4</td>
                <td>5</td>
                <td>5</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Lab1;