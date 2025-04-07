import clsx from 'clsx';

import s from './LighterButton.module.css';
interface LighterButtonProps {
  text: string;
  active?: boolean;
  click: () => void;
}
const LighterButton = ({ text, active, click }: LighterButtonProps) => {
  const svgIcon = '/icons/sprite.svg';
  return (
    <div className={s.light_button}>
      <button
        className={clsx(active ? [s.bt, s.active] : s.bt)}
        onClick={click}
        aria-label="Switch language"
      >
        <div className={s.light_holder}>
          <div className={s.dot}></div>
          <div className={s.light}></div>
        </div>
        <div className={s.button_holder}>
          {text === 'UA' ? (
            <svg className={s.icon}>
              <use href={`${svgIcon}#flag-ua`} />
            </svg>
          ) : (
            <svg className={s.icon}>
              <use href={`${svgIcon}#flag-en`} />
            </svg>
          )}
          <p>{text}</p>
        </div>
      </button>
    </div>
  );
};

export default LighterButton;
