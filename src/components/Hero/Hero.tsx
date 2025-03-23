import Container from '../../layout/Container/Container';
import About from '../About/About';

import s from './Hero.module.css';

const Hero = () => {
  return (
    <section>
      <Container additionalClass={s.hero}>
        <h1 id="about" className={s.title}>
          I can make your ideas become real!
        </h1>
        <About />
      </Container>
    </section>
  );
};

export default Hero;
