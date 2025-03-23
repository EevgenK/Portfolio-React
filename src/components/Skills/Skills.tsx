import { backSkills, frontSkills } from '../../assets/techSkils';
import Container from '../../layout/Container/Container';
import SectionTitle from '../SectionTitle/SectionTitle';
import SoftSkillsList from '../SoftSkillsList/SoftSkillsList';
import TechSkillsList from '../TechSkillsList/TechSkillsList';
import s from './Skills.module.css';
import Marquee from 'react-fast-marquee';
const Skills = () => {
  return (
    <section>
      <Container additionalClass={s.skills}>
        <SectionTitle text="Soft Skills" id="soft skills" />
        <SoftSkillsList />
        <SectionTitle text="Tech Skills" id="tech skills" />
        <Marquee speed={50} pauseOnHover direction="right">
          <TechSkillsList items={frontSkills} />
        </Marquee>
        <Marquee speed={40} pauseOnHover direction="left">
          <TechSkillsList items={backSkills} />
        </Marquee>
      </Container>
    </section>
  );
};

export default Skills;
