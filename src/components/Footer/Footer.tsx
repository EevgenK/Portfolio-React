import Container from '../../layout/Container/Container';
import SectionTitle from '../SectionTitle/SectionTitle';
import s from './Footer.module.css';

const Footer = () => {
  return (
    <section>
      <Container>
        <SectionTitle id="contacts" text="Contacts" />
      </Container>
    </section>
  );
};

export default Footer;
