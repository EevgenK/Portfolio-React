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
    link: `https://join.slack.com/t/contact-jfx5995/shared_invite/zt-32v3jq5fl-${
      import.meta.env.S_ID
    }`,

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
    link: 'viber://chat?number=%2B380936205130',
    icon: `${svgIcon}#icon-viber`,
  },
  {
    title: 'whatsapp',
    link: 'https://wa.me/qr/YSGRK2FDNQ52P1',
    icon: `${svgIcon}#icon-whatsapp`,
  },
  {
    title: 'location',
    link: 'https://maps.app.goo.gl/2m9RdqtC8gDbimpK6',
    icon: `${svgIcon}#icon-location`,
  },
];
