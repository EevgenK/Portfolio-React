import Container from '../../layout/Container/Container';
import s from './Hero.module.css';

const Hero = () => {
  return (
    <section>
      <Container additionalClass={s.hero}>
        <h1 className={s.title}>I can make your ideas become real!</h1>
      </Container>
    </section>
  );
};

export default Hero;
