import s from './UploadLink.module.css';

interface UploadLinkProps {
  text: string;
  link: string;
}

const UploadLink = ({ text, link }: UploadLinkProps) => {
  return (
    <a
      className={s.cv}
      target="_blank"
      rel="noopener noreferrer nofollow"
      aria-label="Resume"
      href={link}
    >
      {text}
    </a>
  );
};

export default UploadLink;
