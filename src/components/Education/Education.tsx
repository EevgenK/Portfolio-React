import React from 'react';
import s from './Education.module.css';
import { useTranslation } from 'react-i18next';

const Education = () => {
  const { t } = useTranslation();
  return (
    <button className={s.tooltipContainer}>
      {t('education.button')}
      <div className={s.iconWrapper}>
        <svg className={s.icon}>
          <use href="/public/icons/sprite.svg#icon-education" />
        </svg>
      </div>
      <div className={s.tooltip}>
        <ul className={s.tooltipText}>
          <li key="ISG">
            <h4 className={s.edu}>{t('education.it')} </h4>{' '}
            <p>{t('education.years')} 2024 - 2025</p>
            <p>{t('education.occupation_it')}</p>
          </li>
          <li key="ITFPU">
            <h4 className={s.edu}>{t('education.inst')}</h4>
            <p>{t('education.years')} 2004 - 2009</p>{' '}
            <p> {t('education.occupation_inst')}</p>
          </li>
        </ul>
      </div>
    </button>
  );
};

export default Education;
