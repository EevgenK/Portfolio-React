import { softSkills } from '../../assets/softSkils';
import StarBorder from '../../blocks/Animations/StarBorder/StarBorder';
import { formatKey } from '../../i18n/utils/formatKey';
import s from './SoftSkillsList.module.css';
import { useTranslation } from 'react-i18next';
const SoftSkillsList = () => {
  const { t } = useTranslation();
  return (
    <StarBorder as="div" className={s.skills} color="cyan" speed="6s">
      {softSkills.map((skill, idx) => (
        <li key={idx} className={s.skill}>
          <p>{t(`skills.${formatKey(skill)}`)}</p>
        </li>
      ))}
    </StarBorder>
  );
};

export default SoftSkillsList;
