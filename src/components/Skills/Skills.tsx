import { backSkills, frontSkills } from '../../assets/techSkils';
import Container from '../../layout/Container/Container';
import SectionTitle from '../SectionTitle/SectionTitle';
import SoftSkillsList from '../SoftSkillsList/SoftSkillsList';
import TechSkillsList from '../TechSkillsList/TechSkillsList';
import s from './Skills.module.css';
import { useTranslation } from 'react-i18next';
import Marquee from 'react-fast-marquee';
const Skills = () => {
  const { t } = useTranslation();
  return (
    <section>
      <Container additionalClass={s.skills}>
        <SectionTitle text={t('skills.soft_title')} id="soft skills" />
        <SoftSkillsList />
        <SectionTitle text={t('skills.tech_title')} id="tech skills" />
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
