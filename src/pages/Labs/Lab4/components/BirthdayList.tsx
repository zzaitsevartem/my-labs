import React, { useState } from 'react';
import styles from '../Lab4.module.scss';

const BirthdayList: React.FC = () => {
  const [currentBirthday, setCurrentBirthday] = useState('');

  const students = [
    { name: 'Зайцев Артём', birthday: '31 октября 2005' },
    { name: 'Тулузакова Глория', birthday: '2 июля 2005' },
    { name: 'Шпилевой Александр', birthday: '1 января 2006' },
    { name: 'Руднев Алексей', birthday: '10 марта 2006' },
    { name: 'Петинов Данила', birthday: '5 сентября 2005' }
  ];

  return (
    <div className={styles.section}>
      <h2 className={styles.sectionTitle}>🎂 Дни рождения одногруппников</h2>
      
      <div className={styles.birthdayContainer}>
        <ul className={styles.studentList}>
          {students.map((student, index) => (
            <li
              key={index}
              className={styles.studentItem}
              onClick={() => setCurrentBirthday(student.birthday)}
              onMouseLeave={() => setCurrentBirthday('')}
            >
              {student.name}
            </li>
          ))}
        </ul>

        <div className={styles.birthdayDisplay}>
          {currentBirthday ? (
            <p>🎉 День рождения: {currentBirthday}</p>
          ) : (
            <p>Нажмите на имя для просмотра даты рождения</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BirthdayList;