import { useState, useEffect } from 'react';
import i18next from 'i18next';
import s from './LanguageButtons.module.css';
import { LOCALS, LocalValueType } from '../../i18n/constants';
import clsx from 'clsx';

const LanguageButtons = () => {
  const [currentLang, setCurrentLang] = useState(i18next.language);

  useEffect(() => {
    const handleLangChange = (lng: string) => {
      setCurrentLang(lng);
    };

    i18next.on('languageChanged', handleLangChange);

    return () => {
      i18next.off('languageChanged', handleLangChange);
    };
  }, []);

  const onHandleChange = async (lng: LocalValueType) => {
    await i18next.changeLanguage(lng);
  };

  return (
    <div className={s.language_buttons_wrapper}>
      <button
        className={clsx(currentLang === LOCALS.UK ? [s.btn, s.active] : s.btn)}
        onClick={() => onHandleChange(LOCALS.UK)}
      >
        UA
      </button>
      <button
        className={clsx(currentLang === LOCALS.EN ? [s.btn, s.active] : s.btn)}
        onClick={() => onHandleChange(LOCALS.EN)}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageButtons;
