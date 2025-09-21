import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './AuthValidator.module.scss';

const AuthValidator: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    role: 'guest'
  });
  const [errors, setErrors] = useState<string[]>([]);

  const validateForm = (): boolean => {
    const newErrors: string[] = [];

    if (!formData.username.trim()) {
      newErrors.push('Введите имя пользователя');
    }

    if (formData.role === 'friend' && formData.password !== 'lheu') {
      newErrors.push('Неверный пароль для друга');
    }

    if (formData.role === 'acquaintance' && formData.password !== 'pyfrjvsq') {
      newErrors.push('Неверный пароль для знакомого');
    }

    if (formData.role === 'guest' && !formData.password) {
      newErrors.push('Гостям тоже нужен пароль');
    }

    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      switch (formData.role) {
        case 'friend':
          navigate('/friends');
          break;
        case 'acquaintance':
          navigate('/acquaintances');
          break;
        case 'guest':
          navigate('/guests');
          break;
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className={styles.section}>
      <h2>🔐 Валидация авторизации</h2>
      
      {errors.length > 0 && (
        <div className={styles.errors}>
          {errors.map((error, index) => (
            <p key={index}>❌ {error}</p>
          ))}
        </div>
      )}

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label>Имя пользователя:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Введите ваше имя"
          />
        </div>

        <div className={styles.formGroup}>
          <label>Пароль:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Введите пароль"
          />
          <div className={styles.passwordHints}>
            <small>Для друзей: lheu</small>
            <small>Для знакомых: pyfrjvsq</small>
            <small>Для гостей: любой пароль</small>
          </div>
        </div>

        <div className={styles.formGroup}>
          <label>Роль:</label>
          <div className={styles.radioGroup}>
            <label className={styles.radioLabel}>
              <input
                type="radio"
                name="role"
                value="friend"
                checked={formData.role === 'friend'}
                onChange={handleChange}
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

export default AuthValidator;