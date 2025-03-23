import { FC } from 'react';
import s from './NavBar.module.css';
interface NavBarProps {
  modal?: boolean | string;
  close?: () => void;
}
const NavBar: FC<NavBarProps> = ({ modal, close }) => {
  return (
    <ul className={modal ? s.modal_menu : s.list}>
      <li className={s.card}>
        <a onClick={() => modal && close?.()} href="#about">
          About
        </a>
      </li>
      <li className={s.card}>
        <a onClick={() => modal && close?.()} href="#soft skills">
          Skills
        </a>
      </li>
      <li className={s.card}>
        <a onClick={() => modal && close?.()} href="#projects">
          Projects
        </a>
      </li>
      <li className={s.card}>
        <a onClick={() => modal && close?.()} href="#contacts">
          Contacts
        </a>
      </li>
    </ul>
  );
};

export default NavBar;
