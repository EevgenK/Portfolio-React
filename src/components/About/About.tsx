import SectionTitle from '../SectionTitle/SectionTitle';
import s from './About.module.css';
import photo from '../../assets/about.png';
import photoW from '../../assets/about_w.webp';

import { useTranslation } from 'react-i18next';
import Education from '../Education/Education';

const About = () => {
  const { t } = useTranslation();
  return (
    <>
      <SectionTitle text={t('about.second_title')} />

      <p className={s.description}>
        <picture>
          <source srcSet={photoW} type="image/webp" />
          <img
            className={s.photo}
            src={photo}
            alt="developer photo"
            width={120}
          />
        </picture>
        {t('about.first_p')}
      </p>
      <p className={s.description}>{t('about.second_p')}</p>
      <p className={s.description}>{t('about.third_p')}</p>
      <Education />
      <div className={s.git_wrap}>
        <h4>{t('about.git_activity')}:</h4>
        <img
          className={s.git}
          src="https://ghchart.rshah.org/EevgenK"
          alt="GitHub activity"
        />
      </div>
    </>
  );
};

export default About;
