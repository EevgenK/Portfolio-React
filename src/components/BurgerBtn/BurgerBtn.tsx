import { useState } from 'react';
import s from './BurgerBtn.module.css';
import { RxHamburgerMenu, RxBorderSolid } from 'react-icons/rx';
type BurgerBtnProps = {
  modal: () => void;
};
const BurgerBtn = ({ modal }: BurgerBtnProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleClick = () => {
    modal();
    setIsHovered(false);
  };
  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={s.burgerBtn}
    >
      {isHovered ? (
        <RxBorderSolid className={s.svg} />
      ) : (
        <RxHamburgerMenu className={s.svg} />
      )}
    </button>
  );
};

export default BurgerBtn;
