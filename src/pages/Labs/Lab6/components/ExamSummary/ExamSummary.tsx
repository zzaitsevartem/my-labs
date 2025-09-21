import React, { useState } from 'react';
import styles from './ExamSummary.module.scss';

const ExamSummary: React.FC = () => {
  const [grades, setGrades] = useState('');
  const [results, setResults] = useState({
    res2: '',
    res3: '',
    res4: '',
    res5: '',
    num: '',
    sr: ''
  });

  const calculateSummary = () => {
    let t2 = 0, t3 = 0, t4 = 0, t5 = 0;
    let s = 0, n = 0;

    for (let i = 0; i < grades.length; i++) {
      const r = grades.charAt(i);
      if (r >= '2' && r <= '5') {
        n++;
        s += Number(r);
        
        switch (r) {
          case '2': t2++; break;
          case '3': t3++; break;
          case '4': t4++; break;
          case '5': t5++; break;
        }
      }
    }

    setResults({
      res2: t2.toString(),
      res3: t3.toString(),
      res4: t4.toString(),
      res5: t5.toString(),
      num: n.toString(),
      sr: n > 0 ? (s / n).toFixed(2) : '0'
    });
  };

  const resetForm = () => {
    setGrades('');
    setResults({
      res2: '',
      res3: '',
      res4: '',
      res5: '',
      num: '',
      sr: ''
    });
  };

  return (
    <div className={styles.section}>
      <h2>📊 Формирование сводки по экзамену</h2>
      
      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label>Введите последовательно все оценки, полученные на экзамене:</label>
          <input
            type="text"
            value={grades}
            onChange={(e) => setGrades(e.target.value)}
            placeholder="Например: 545343245"
            className={styles.input}
          />
          <small>Вводите оценки подряд без пробелов (только цифры 2-5)</small>
        </div>

        <div className={styles.buttonGroup}>
          <button 
            type="button" 
            onClick={calculateSummary}
            className={styles.submitButton}
          >
            Сформировать сводку
          </button>
          <button 
            type="button" 
            onClick={resetForm}
            className={styles.resetButton}
          >
            Очистить
          </button>
        </div>

        <div className={styles.results}>
          <h3>Сводка по экзамену</h3>
          <table className={styles.resultsTable}>
            <thead>
              <tr>
                <th>Оценка</th>
                <th>Число сдавших на оценку</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Отлично (5)</td>
                <td className={styles.resultCell}>{results.res5}</td>
              </tr>
              <tr>
                <td>Хорошо (4)</td>
                <td className={styles.resultCell}>{results.res4}</td>
              </tr>
              <tr>
                <td>Удовлетворительно (3)</td>
                <td className={styles.resultCell}>{results.res3}</td>
              </tr>
              <tr>
                <td>Неудовлетворительно (2)</td>
                <td className={styles.resultCell}>{results.res2}</td>
              </tr>
            </tbody>
          </table>

          <table className={styles.additionalTable}>
            <thead>
              <tr>
                <th colSpan={2}>Дополнительные сведения</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Количество сдававших:</td>
                <td className={styles.resultCell}>{results.num}</td>
              </tr>
              <tr>
                <td>Средний балл:</td>
                <td className={styles.resultCell}>{results.sr}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </form>
    </div>
  );
};

export default ExamSummary;