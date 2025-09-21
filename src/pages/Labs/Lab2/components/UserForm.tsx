import React, { useState } from 'react';
import styles from './UserForm.module.scss';

const UserForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    gender: '',
    age: '',
    interests: [] as string[],
    agreeToTerms: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Данные анкеты:', formData);
    alert('Анкета отправлена! Проверьте консоль для просмотра данных.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement;
      const checked = checkbox.checked;
      const checkboxValue = checkbox.value;
      
      if (name === 'interests') {
        setFormData(prev => ({
          ...prev,
          interests: checked
            ? [...prev.interests, checkboxValue]
            : prev.interests.filter(item => item !== checkboxValue)
        }));
      } else {
        setFormData(prev => ({
          ...prev,
          [name]: checked
        }));
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  return (
    <div className={styles.userForm}>
      <h2 className={styles.formTitle}>📝 Анкета пользователя</h2>
      
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="firstName" className={styles.label}>
              Имя: *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="lastName" className={styles.label}>
              Фамилия: *
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="phone" className={styles.label}>
              Телефон: *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={styles.input}
              required
              pattern="[+]{0,1}[0-9\s\-\(\)]{10,}"
              placeholder="+7 (999) 999-99-99"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              Email: *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="gender" className={styles.label}>
              Пол: *
            </label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className={styles.select}
              required
            >
              <option value="">Выберите пол</option>
              <option value="male">Мужской</option>
              <option value="female">Женский</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="age" className={styles.label}>
              Возраст: *
            </label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className={styles.input}
              min="1"
              max="120"
              required
            />
          </div>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Интересы:</label>
          <div className={styles.checkboxGroup}>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                name="interests"
                value="programming"
                checked={formData.interests.includes('programming')}
                onChange={handleChange}
                className={styles.checkbox}
              />
              Программирование
            </label>
            
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                name="interests"
                value="design"
                checked={formData.interests.includes('design')}
                onChange={handleChange}
                className={styles.checkbox}
              />
              Дизайн
            </label>
            
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                name="interests"
                value="sports"
                checked={formData.interests.includes('sports')}
                onChange={handleChange}
                className={styles.checkbox}
              />
              Спорт
            </label>
            
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                name="interests"
                value="music"
                checked={formData.interests.includes('music')}
                onChange={handleChange}
                className={styles.checkbox}
              />
              Музыка
            </label>
          </div>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              name="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
              className={styles.checkbox}
              required
            />
            Я согласен на обработку персональных данных *
          </label>
        </div>

        <div className={styles.buttonGroup}>
          <button type="submit" className={styles.submitButton}>
            📨 Отправить анкету
          </button>
          
          <button type="reset" className={styles.resetButton}>
            🗑️ Очистить
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;