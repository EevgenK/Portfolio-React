import s from './Contacts.module.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import Container from '../../layout/Container/Container';
import { useTranslation } from 'react-i18next';
import ContactsLinksList from '../ContactsLinksList/ContactsLinksList';
import { contacts } from '../../assets/contacts';
const Contacts = () => {
  const { t } = useTranslation();
  const firstList = contacts.slice(0, 4);
  const secondList = contacts.slice(4);

  return (
    <section>
      <Container additionalClass={s.contacts}>
        <SectionTitle id="contacts" text={t('contacts.title')} />
        <div className={s.wrap}>
          <ContactsLinksList links={firstList} />
          <button className={s.cv}>DOWNLOAD CV</button>
          <ContactsLinksList links={secondList} />
        </div>
      </Container>
    </section>
  );
};

export default Contacts;
