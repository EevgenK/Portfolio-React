import { softSkills } from '../../assets/softSkils';
import StarBorder from '../../blocks/Animations/StarBorder/StarBorder';
import s from './SoftSkillsList.module.css';

const SoftSkillsList = () => {
  return (
    <StarBorder as="ul" className={s.skills} color="cyan" speed="6s">
      {softSkills.map((skill, idx) => (
        <li key={idx} className={s.skill}>
          <p>{skill}</p>
        </li>
      ))}
    </StarBorder>
  );
};

export default SoftSkillsList;
