import { useInView } from 'react-intersection-observer';
import Container from '../../layout/Container/Container';
import BurgerBtn from '../BurgerBtn/BurgerBtn';
import Logo from '../Logo/Logo';
import NavBar from '../NavBar/NavBar';
import s from './Header.module.css';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import LanguageButtons from '../LanguageButtons/LanguageButtons';
type HeaderProps = {
  modalOpen: () => void;
};
const Header = ({ modalOpen }: HeaderProps) => {
  const { ref, inView } = useInView({ threshold: 0.5 });
  const [isFixedVisible, setIsFixedVisible] = useState(false);
  useEffect(() => {
    if (!inView) {
      setIsFixedVisible(true);
    } else {
      setIsFixedVisible(false);
    }
  }, [inView]);
  return (
    <header ref={ref}>
      <Container
        additionalClass={clsx(
          inView ? s.header : s.header_fixed,
          s.header,
          isFixedVisible && s.header_fixed_visible,
        )}
      >
        <Logo />
        <LanguageButtons />
        <BurgerBtn modal={modalOpen} />
        <NavBar />
      </Container>
    </header>
  );
};

export default Header;
