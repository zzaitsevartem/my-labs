import React, { useState } from 'react';
import styles from '../Lab4.module.scss';

const GradeCalculator: React.FC = () => {
  const [grades, setGrades] = useState({
    day1: '', day2: '', day3: '', day4: '', day5: '', day6: ''
  });
  const [average, setAverage] = useState<number | null>(null);

  const calculateAverage = () => {
    const values = Object.values(grades).map(Number);
    const validValues = values.filter(grade => grade > 0);
    
    if (validValues.length === 0) {
      setAverage(null);
      return;
    }

    const sum = validValues.reduce((acc, grade) => acc + grade, 0);
    setAverage(sum / validValues.length);
  };

  const handleGradeChange = (day: string, value: string) => {
    setGrades(prev => ({ ...prev, [day]: value }));
  };

  return (
    <div className={styles.section}>
      <h2 className={styles.sectionTitle}>📊 Калькулятор среднего балла</h2>
      
      <div className={styles.gradeForm}>
        <div className={styles.inputGroup}>
          <label>Понедельник:</label>
          <input
            type="number"
            min="1"
            max="5"
            value={grades.day1}
            onChange={(e) => handleGradeChange('day1', e.target.value)}
          />
        </div>

        <div className={styles.inputGroup}>
          <label>Вторник:</label>
          <input
            type="number"
            min="1"
            max="5"
            value={grades.day2}
            onChange={(e) => handleGradeChange('day2', e.target.value)}
          />
        </div>

        <div className={styles.inputGroup}>
          <label>Среда:</label>
          <input
            type="number"
            min="1"
            max="5"
            value={grades.day3}
            onChange={(e) => handleGradeChange('day3', e.target.value)}
          />
        </div>

        <div className={styles.inputGroup}>
          <label>Четверг:</label>
          <input
            type="number"
            min="1"
            max="5"
            value={grades.day4}
            onChange={(e) => handleGradeChange('day4', e.target.value)}
          />
        </div>

        <div className={styles.inputGroup}>
          <label>Пятница:</label>
          <input
            type="number"
            min="1"
            max="5"
            value={grades.day5}
            onChange={(e) => handleGradeChange('day5', e.target.value)}
          />
        </div>

        <div className={styles.inputGroup}>
          <label>Суббота:</label>
          <input
            type="number"
            min="1"
            max="5"
            value={grades.day6}
            onChange={(e) => handleGradeChange('day6', e.target.value)}
          />
        </div>

        <button className={styles.calculateButton} onClick={calculateAverage}>
          🧮 Вычислить средний балл
        </button>

        {average !== null && (
          <div className={styles.result}>
            <h3>Средний балл: {average.toFixed(2)}</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default GradeCalculator;