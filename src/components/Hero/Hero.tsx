import Container from '../../layout/Container/Container';
import About from '../About/About';

import s from './Hero.module.css';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section>
      <Container additionalClass={s.hero}>
        <h1 id="about" className={s.title}>
          {t('about.main_title')}
        </h1>
        <About />
      </Container>
    </section>
  );
};

export default Hero;
