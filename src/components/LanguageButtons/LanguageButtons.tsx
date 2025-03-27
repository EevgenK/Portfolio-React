import { useState, useEffect } from 'react';
import i18next from 'i18next';
import s from './LanguageButtons.module.css';
import { LOCALS, LocalValueType } from '../../i18n/constants';
import clsx from 'clsx';
import LighterButton from '../../blocks/LighterButton/LighterButton';

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
      <LighterButton
        text="UA"
        active={currentLang === LOCALS.UK}
        click={() => onHandleChange(LOCALS.UK)}
      />
      <LighterButton
        text="EN"
        active={currentLang === LOCALS.EN}
        click={() => onHandleChange(LOCALS.EN)}
      />
    </div>
  );
};

export default LanguageButtons;
