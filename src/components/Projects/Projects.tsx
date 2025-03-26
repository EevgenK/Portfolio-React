import Container from '../../layout/Container/Container';

import { myProjects } from './myProjects';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import s from './Projects.module.css';
import SectionTitle from '../SectionTitle/SectionTitle';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { t } = useTranslation();
  return (
    <section>
      <Container additionalClass={s.projects}>
        <SectionTitle id="projects" text={t('projects.title')} />
        <button className="btn_prev">{'<'}</button>
        <button className="btn_next">{'>'}</button>
        <Swiper
          wrapperTag="ul"
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          loop={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 70,
            modifier: 1,
            scale: 0.9,
            slideShadows: true,
          }}
          breakpoints={{
            768: {
              slidesPerView: 3,
            },
          }}
          pagination={true}
          navigation={{
            nextEl: `.btn_next`,
            prevEl: `.btn_prev`,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className={s.swiper_pro}
        >
          {myProjects.map((item) => (
            <SwiperSlide key={item.id} tag="li" className={s.card}>
              <picture>
                <source
                  srcSet={`${item.image_src} 1x, ${item.image_srcset} 2x`}
                  media="(min-width: 1440px)"
                />
                <img
                  src={item.image_src}
                  alt="project image"
                  width="296"
                  loading="lazy"
                />
              </picture>

              <h3 className={s.card_title}>
                {t(`projects.${item.title}.title`)}
              </h3>
              <p className={s.description}>
                <span>{t('projects.description')}:</span>{' '}
                {t(`projects.${item.title}.description`)}
              </p>
              <p className={s.stacks}>
                <span>{t('projects.stack')}:</span> {item.stacks}
              </p>
              <div className={s.links_wrap}>
                <a
                  className={s.deploy_link}
                  href={item.deploy_link}
                  target="blank"
                >
                  {t('projects.view')}
                </a>
                <a href={item.git_link} target="blank">
                  {t('projects.visit')}
                  <img src="/icons/github.svg" alt="GitHub" width={12} />
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default Projects;
