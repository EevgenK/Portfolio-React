import GradientText from '../../blocks/TextAnimations/GradientText/GradientText';
import s from './Logo.module.css';

const Logo = () => {
  return (
    <a href="/">
      <GradientText
        colors={[
          'var(--grey)',
          'var(--second-hover)',
          'var(--grey)',
          'var(--second-hover)',
          'var(--grey)',
        ]}
        animationSpeed={5}
        showBorder={false}
        className={s.logo}
      >
        <p className={s.name}>
          {' '}
          Kulbachenko <span>Evgen</span>
        </p>
        <p className={s.position}>full-stack developer</p>
      </GradientText>
    </a>
  );
};

export default Logo;
