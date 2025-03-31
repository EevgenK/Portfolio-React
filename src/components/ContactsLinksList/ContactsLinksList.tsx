import { useTranslation } from 'react-i18next';
import { Contact } from '../../assets/contacts';
import s from './ContactsLinksList.module.css';
import clsx from 'clsx';
interface ContactsLinksListProps {
  links: Contact[];
}

const ContactsLinksList = ({ links }: ContactsLinksListProps) => {
  const { t } = useTranslation();
  const renderLinksGroup = (startIdx: number, className: string) => (
    <li className={className}>
      {links.slice(startIdx, startIdx + 2).map((contact, idx) => (
        <a
          data-tooltip={`${t('contacts.contact_by')} ${contact.title}`}
          target="_blank"
          key={contact.link}
          href={contact.link}
          className={clsx(s.link, s[`card${idx + 1 + startIdx}`])}
        >
          <svg className={s[contact.title]}>
            <use href={contact.icon} />
          </svg>
        </a>
      ))}
    </li>
  );

  return (
    <ul className={s.main}>
      {renderLinksGroup(0, s.up)}
      {renderLinksGroup(2, s.down)}
    </ul>
  );
};

export default ContactsLinksList;
