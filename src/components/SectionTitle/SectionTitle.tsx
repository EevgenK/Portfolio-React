import { FC } from 'react';
import s from './SectionTitle.module.css';
interface SectionTitleProps {
  text: string;
  id: string;
}

const SectionTitle: FC<SectionTitleProps> = ({ text, id }) => {
  return (
    <h2 id={id} className={s.title}>
      {text}
    </h2>
  );
};

export default SectionTitle;
