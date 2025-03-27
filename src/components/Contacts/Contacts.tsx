import s from './Contacts.module.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import Container from '../../layout/Container/Container';
import { useTranslation } from 'react-i18next';
const Contacts = () => {
  const svgIcon = '/icons/sprite.svg';
  const { t } = useTranslation();
  return (
    <section>
      <Container additionalClass={s.contacts}>
        <SectionTitle id="contacts" text={t('contacts.title')} />

        <ul className={s.main}>
          <li className={s.up}>
            <a href="tel:+380936205130" className={s.card1}>
              <svg className={s.phone}>
                <use href={`${svgIcon}#icon-mobile`} />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/evgen-kulbachenko-developer/"
              target="blank"
              className={s.card2}
            >
              <svg className={s.linkedin}>
                <use xlinkHref={`${svgIcon}#icon-linkedin`}></use>
              </svg>
            </a>
          </li>
          <li className={s.down}>
            <a
              href="https://github.com/EevgenK"
              target="blank"
              className={s.card3}
            >
              <svg className={s.github}>
                <use href={`${svgIcon}#icon-github`} />
              </svg>
            </a>
            <a
              href="https://t.me/Eevgen_Kul"
              target="blank"
              className={s.card4}
            >
              <svg className={s.discord}>
                <use href={`${svgIcon}#icon-telegram`} />
              </svg>
            </a>
          </li>
        </ul>
      </Container>
    </section>
  );
};

export default Contacts;
