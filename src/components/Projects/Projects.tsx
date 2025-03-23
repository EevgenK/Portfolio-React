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

const Projects = () => {
  return (
    <section>
      <Container additionalClass={s.projects}>
        <SectionTitle id="projects" text="My Projects" />
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
          className="mySwiper"
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

              <h3 className={s.card_title}>{item.title}</h3>
              <p className={s.description}>
                <span>Description:</span> {item.description}
              </p>
              <p className={s.stacks}>
                <span>Used Stack:</span> {item.stacks}
              </p>
              <div className={s.links_wrap}>
                <a
                  className={s.deploy_link}
                  href={item.deploy_link}
                  target="blank"
                >
                  view
                </a>
                <a href={item.git_link} target="blank">
                  vist{' '}
                  <img src="/icons/front/github.svg" alt="GitHub" width={12} />
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
