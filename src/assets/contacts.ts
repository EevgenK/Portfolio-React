export interface Contact {
  title: string;
  link: string;
  icon: string;
}
const svgIcon = '/icons/sprite.svg';
export const contacts: Contact[] = [
  { title: 'phone', link: 'tel:+380936205130', icon: `${svgIcon}#icon-mobile` },
  {
    title: 'slack',
    link: 'mailto:kulbachenko.evgen@gmail.com',
    icon: `${svgIcon}#icon-slack`,
  },

  {
    title: 'github',
    link: 'https://github.com/EevgenK',
    icon: `${svgIcon}#icon-github`,
  },
  {
    title: 'telegram',
    link: 'https://t.me/Eevgen_Kul',
    icon: `${svgIcon}#icon-telegram`,
  },
  {
    title: 'email',
    link: 'mailto:kulbachenko.evgen@gmail.com',
    icon: `${svgIcon}#icon-mail`,
  },
  {
    title: 'linkedin',
    link: 'https://www.linkedin.com/in/evgen-kulbachenko-developer/',
    icon: `${svgIcon}#icon-linkedin`,
  },

  {
    title: 'viber',
    link: '/',
    icon: `${svgIcon}#icon-viber`,
  },
  {
    title: 'whatsapp',
    link: 'https://wa.me/qr/YSGRK2FDNQ52P1',
    icon: `${svgIcon}#icon-whatsapp`,
  },
];
