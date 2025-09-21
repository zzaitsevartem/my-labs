import React, { useState } from 'react';
import styles from './AuthForm.module.scss';

const AuthForm: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    role: 'guest'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Данные авторизации:', formData);
    alert('Форма отправлена! Проверьте консоль для просмотра данных.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'radio' ? value : value
    }));
  };

  return (
    <div className={styles.authForm}>
      <h2 className={styles.formTitle}>🔐 Авторизация пользователя</h2>
      
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="username" className={styles.label}>
            Имя пользователя:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="password" className={styles.label}>
            Пароль:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Зарегистрироваться как:</label>
          <div className={styles.radioGroup}>
            <label className={styles.radioLabel}>
              <input
                type="radio"
                name="role"
                value="friend"
                checked={formData.role === 'friend'}
                onChange={handleChange}
                className={styles.radio}
              />
              Друг
            </label>
            
            <label className={styles.radioLabel}>
              <input
                type="radio"
                name="role"
                value="acquaintance"
                checked={formData.role === 'acquaintance'}
                onChange={handleChange}
                className={styles.radio}
              />
              Знакомый
            </label>
            
            <label className={styles.radioLabel}>
              <input
                type="radio"
                name="role"
                value="guest"
                checked={formData.role === 'guest'}
                onChange={handleChange}
                className={styles.radio}
              />
              Гость
            </label>
          </div>
        </div>

        <button type="submit" className={styles.submitButton}>
          Войти
        </button>
      </form>
    </div>
  );
};

export default AuthForm;