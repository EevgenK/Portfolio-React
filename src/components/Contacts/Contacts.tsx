import s from './Contacts.module.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import Container from '../../layout/Container/Container';
import { useTranslation } from 'react-i18next';
const Contacts = () => {
  const { t } = useTranslation();
  return (
    <section>
      <Container>
        <SectionTitle id="contacts" text={t('contacts.title')} />
      </Container>
    </section>
  );
};

export default Contacts;
