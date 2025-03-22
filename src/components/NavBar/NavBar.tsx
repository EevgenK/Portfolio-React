import { FC } from 'react';
import s from './NavBar.module.css';
interface NavBarProps {
  modal?: boolean | string;
}
const NavBar: FC<NavBarProps> = ({ modal }) => {
  return (
    <ul className={modal ? s.modal_menu : s.list}>
      <li className={s.card}>
        <a href="/">About</a>
      </li>
      <li className={s.card}>
        <a href="/">Skills</a>
      </li>
      <li className={s.card}>
        <a href="#projects">Projects</a>
      </li>
      <li className={s.card}>
        <a href="#contacts">Contacts</a>
      </li>
    </ul>
  );
};

export default NavBar;
