import { Contact } from '../../assets/contacts';
import s from './ContactsLinksList.module.css';
interface ContactsLinksListProps {
  links: Contact[];
}

const ContactsLinksList = ({ links }: ContactsLinksListProps) => {
  const renderLinksGroup = (startIdx: number, className: string) => (
    <li className={className}>
      {links.slice(startIdx, startIdx + 2).map((contact, idx) => (
        <a
          target="_blank"
          key={contact.link}
          href={contact.link}
          className={s[`card${idx + 1 + startIdx}`]}
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
