import s from './TechSkillsList.module.css';
import { techSkill } from '../../assets/techSkils';

interface TechSkillsListProps {
  items: techSkill[];
}

const TechSkillsList = ({ items }: TechSkillsListProps) => {
  return (
    <ul className={s.skills}>
      {items.map((item, idx) => (
        <li className={s.item} key={idx}>
          <img className={s.img} src={item.img} alt={item.title} width={40} />
          <h4 className={s.title}>{item.title}</h4>
        </li>
      ))}
    </ul>
  );
};

export default TechSkillsList;
