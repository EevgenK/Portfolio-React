import { useTranslation } from 'react-i18next';
import Container from '../../layout/Container/Container';
import FooterContactsList from '../FooterContactsList/FooterContactsList';
import Logo from '../Logo/Logo';
import s from './Footer.module.css';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer>
      <Container additionalClass={s.footer}>
        <Logo />
        <FooterContactsList />
        <p className={s.rights}>
          {t('contacts.rights')}
          <br />
          &copy; 2025
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
