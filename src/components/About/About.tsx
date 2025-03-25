import SectionTitle from '../SectionTitle/SectionTitle';
import s from './About.module.css';
import photo from '../../assets/about.png';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  return (
    <>
      <SectionTitle text={t('about.second_title')} />

      <p className={s.description}>
        <img
          className={s.photo}
          src={photo}
          alt="developer photo"
          width={120}
        />
        {t('about.first_p')}
      </p>
      <p className={s.description}>{t('about.second_p')}</p>
      <p className={s.description}>{t('about.third_p')}</p>
    </>
  );
};

export default About;
