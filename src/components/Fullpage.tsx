import React from 'react';
import { Mousewheel, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Main from '../pages/Main';
import About from '../pages/About';
import Work from '../pages/Work';
import Project from '../pages/Project';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';

const Fullpage: React.FC = () => {
  return (
    <Swiper
      direction="vertical"
      slidesPerView={1}
      modules={[Mousewheel, Pagination]}
      mousewheel
      pagination={{ clickable: true }}
      speed={600}
    >
      {FULLPAGE_MENU.map(menu => (
        <SwiperSlide key={menu.id}>{menu.component}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Fullpage;

const FULLPAGE_MENU = [
  { id: 1, name: 'Main', component: <Main /> },
  { id: 2, name: 'About', component: <About /> },
  { id: 3, name: 'Work', component: <Work /> },
  { id: 4, name: 'Project', component: <Project /> },
  { id: 5, name: 'Blog', component: <Blog /> },
  { id: 6, name: 'Contact', component: <Contact /> },
];
