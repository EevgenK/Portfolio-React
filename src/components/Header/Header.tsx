import Container from '../../layout/Container/Container';
import BurgerBtn from '../BurgerBtn/BurgerBtn';
import Logo from '../Logo/Logo';
import NavBar from '../NavBar/NavBar';
import s from './Header.module.css';
type HeaderProps = {
  modalOpen: () => void;
};
const Header = ({ modalOpen }: HeaderProps) => {
  return (
    <header>
      <Container additionalClass={s.header}>
        <Logo />
        <BurgerBtn modal={modalOpen} />
        <NavBar />
      </Container>
    </header>
  );
};

export default Header;
