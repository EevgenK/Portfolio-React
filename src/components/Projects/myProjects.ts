import src9 from '../../../public/img/projects/pj-9-min.jpg';
import srcset9 from '../../../public/img/projects/pj-9@2x-min.jpg';
import src8 from '../../../public/img/projects/pj-8-min.jpg';
import srcset8 from '../../../public/img/projects/pj-8@2x-min.jpg';
import src7 from '../../../public/img/projects/pj-7-min.jpg';
import srcset7 from '../../../public/img/projects/pj-7@2x-min.jpg';
import src6 from '../../../public/img/projects/pj-6-min.jpg';
import srcset6 from '../../../public/img/projects/pj-6@2x-min.jpg';
import src5 from '../../../public/img/projects/pj-5-min.jpg';
import srcset5 from '../../../public/img/projects/pj-5@2x-min.jpg';
import src4 from '../../../public/img/projects/pj-4-min.jpg';
import srcset4 from '../../../public/img/projects/pj-4@2x-min.jpg';
import src3 from '../../../public/img/projects/pj-3-min.jpg';
import srcset3 from '../../../public/img/projects/pj-3@2x-min.jpg';
import src2 from '../../../public/img/projects/pj-2-min.jpg';
import srcset2 from '../../../public/img/projects/pj-2@2x-min.jpg';
import src1 from '../../../public/img/projects/pj-1-min.jpg';
import srcset1 from '../../../public/img/projects/pj-1@2x-min.jpg';

export interface myProject {
  id: number;
  title: string;
  stacks: string;
  deploy_link: string;
  git_link: string;

  image_src: string;
  image_srcset: string;
}
export const myProjects: myProject[] = [
  {
    id: 9,
    title: 'aquatrack',
    stacks:
      'Html, СSS, JavaScript, Redux, JSON Web Token (JWT), i18next, React Tour, Axios, Rest Api.',
    deploy_link: 'https://final-project-frontend-taupe.vercel.app/',
    git_link: 'https://github.com/anastasiiayerashova/final-project-frontend',
    image_src: 'img/pj-9-min.jpg',
    image_srcset: 'img/pj-9@2x-min.jpg',
  },
  {
    id: 8,
    title: 'aquatrackDataBase',
    stacks:
      'Node.js, Express, Mongo DB, Mongoose, By Crypt, JWT, Cloudinary, Multer, Joi, Google Auth, Swagger.',
    deploy_link: 'https://aquatrack-bd.onrender.com/api-docs/',
    git_link: 'https://github.com/EevgenK/AquaTrack--bd',

    image_src: src8,
    image_srcset: srcset8,
  },
  {
    id: 7,
    title: 'trailBossBMX',
    stacks: 'Html, JavaScript, SASS, Git, Swiper, Vite.',
    deploy_link: 'https://eevgenk.github.io/STP-7982/',
    git_link: 'https://github.com/EevgenK/STP-7982',

    image_src: src7,
    image_srcset: srcset7,
  },
  {
    id: 6,
    title: 'phoneBookDataBase',
    stacks:
      'Node.js, Express, Mongo DB, Mongoose, By Crypt, JWT, Cloudinary, Multer, Joi, Google Auth, Swagger.',
    deploy_link: 'https://contacts-app-51y8.onrender.com/api-docs/',
    git_link: 'https://github.com/EevgenK/nodejs-hw-mongodb/tree/main',
    image_src: src6,
    image_srcset: srcset6,
  },
  {
    id: 5,
    title: 'phoneBookOrganizer',
    stacks:
      'Html, СSS, JavaScript, React, Redux, JSON Web Token (JWT), Material UI, Formik, Yup.',
    deploy_link: 'https://organizer-black.vercel.app/',
    git_link: 'https://github.com/EevgenK/Organizer',
    image_src: src5,
    image_srcset: srcset5,
  },
  {
    id: 4,
    title: 'moviesOverviews',
    stacks:
      'React, JavaScript, CSS, Git/Vercel, Vite, React Router Dom, Axios, Rest API.',
    deploy_link: 'https://movies-overview-woad.vercel.app/',
    git_link: 'https://github.com/EevgenK/Movies-overview',
    image_src: src4,
    image_srcset: srcset4,
  },
  {
    id: 10,
    title: 'portfolioLoyd',
    stacks: 'Html, СSS, JavaScript, Vite, Axios, Accordion, Rest Api, Swiper.',
    deploy_link: 'https://evhenii18.github.io/Our-group-js-project/',
    git_link: 'https://github.com/Evhenii18/Our-group-js-project',

    image_src: '/img/pj-10-min.webp',
    image_srcset: '/img/pj-10@2x-min.webp',
  },
  {
    id: 3,
    title: 'qitchen',
    stacks: 'React, JavaScript, CSS, Git/Vercel, Vite, React Router Dom.',
    deploy_link: 'https://sushi-bar-eta.vercel.app/',
    git_link: 'https://github.com/EevgenK/sushi_bar',

    image_src: src3,
    image_srcset: srcset3,
  },
  {
    id: 2,
    title: 'modelingPrinting',
    stacks: 'Html, JavaScript, SASS, Git, Parcel.',
    deploy_link: 'https://eevgenk.github.io/team-project-10g/',
    git_link: 'https://github.com/annabramarova/x10-project-htmlcss',

    image_src: src2,
    image_srcset: srcset2,
  },
  {
    id: 1,
    title: 'webStudio',
    stacks: 'Html, JavaScript, SASS, Git, Parcel, BAM.',
    deploy_link: 'https://eevgenk.github.io/goit-markup-hw-08/',
    git_link: 'https://github.com/EevgenK/goit-markup-hw-08',

    image_src: src1,
    image_srcset: srcset1,
  },
];
