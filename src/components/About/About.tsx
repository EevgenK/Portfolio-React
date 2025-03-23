import SectionTitle from '../SectionTitle/SectionTitle';
import s from './About.module.css';
import photo from '../../assets/some_img.webp';

const About = () => {
  return (
    <>
      <SectionTitle text="about me" />
      <p className={s.description}>
        <img
          className={s.photo}
          src={photo}
          alt="developer photo"
          width={120}
        />
        I am an ambitious and passionate fullstack developer from Ukraine, who
        wants to make the world more comfortable and much better!
      </p>
      <p className={s.description}>
        My goal is to help businesses and to make customers feel safe and
        satisfied while using the product.
      </p>
      <p className={s.description}>
        {' '}
        More about me: responsible, attentive, result-oriented team player with
        a sense of humour.
      </p>
    </>
  );
};

export default About;
