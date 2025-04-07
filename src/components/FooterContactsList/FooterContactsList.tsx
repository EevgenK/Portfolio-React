import { useTranslation } from 'react-i18next';
import { Contact, contacts } from '../../assets/contacts';
import s from './FooterContactsList.module.css';

const FooterContactsList = () => {
  const { t } = useTranslation();
  const footerContacts = contacts.filter(
    ({ title }) => title === 'phone' || title === 'email',
  );
  const local = contacts.find(({ title }) => title === 'location');

  const renderContact = ({ title, link, icon }: Contact) => (
    <li key={title}>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Link which allows to contact by ${title}`}
      >
        <svg className={s[title]}>
          <use href={icon} />
        </svg>
        <p>{link.replace(/^(mailto:|tel:)/, '')}</p>
      </a>
    </li>
  );

  return (
    <ul className={s.contacts}>
      {footerContacts.map(renderContact)}
      {local && (
        <li key={local.title}>
          <a
            href={local.link}
            target="_blank"
            rel="nofollow noopener noreferrer"
            aria-label="Location"
          >
            <svg>
              <use href={local.icon} />
            </svg>
            <p>{t('contacts.location')}</p>
          </a>
        </li>
      )}
    </ul>
  );
};

export default FooterContactsList;
