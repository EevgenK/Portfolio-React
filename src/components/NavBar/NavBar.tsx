import { FC } from 'react';
import s from './NavBar.module.css';
import { useTranslation } from 'react-i18next';
interface NavBarProps {
  modal?: boolean | string;
  close?: () => void;
}
const NavBar: FC<NavBarProps> = ({ modal, close }) => {
  const { t } = useTranslation();
  return (
    <ul className={modal ? s.modal_menu : s.list}>
      <li className={s.card}>
        <a
          onClick={() => modal && close?.()}
          href="#about"
          aria-label="Link which moves to about section"
        >
          {t('navigation.about')}
        </a>
      </li>
      <li className={s.card}>
        <a
          onClick={() => modal && close?.()}
          href="#soft skills"
          aria-label="Link which moves to skills section"
        >
          {t('navigation.skills')}
        </a>
      </li>
      <li className={s.card}>
        <a
          onClick={() => modal && close?.()}
          href="#projects"
          aria-label="Link which moves to projects section"
        >
          {t('navigation.projects')}
        </a>
      </li>
      <li className={s.card}>
        <a
          onClick={() => modal && close?.()}
          href="#contacts"
          aria-label="Link which moves to contacts section"
        >
          {t('navigation.contacts')}
        </a>
      </li>
    </ul>
  );
};

export default NavBar;
