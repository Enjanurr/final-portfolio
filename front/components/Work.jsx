'use client';
import Link from 'next/link';
import { Button } from './ui/button';

//import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

//import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

//import required modules
import { Pagination } from 'swiper/modules'; // this is the 3 dots that tells is if there is still cards left

//componenets
import ProjectCard from '@/components/ProjectCard';

//this contains the data
const projectData = [
  {
    image: '/work/coffee.png',
    category: 'DJANGO, HTML , BOOTSTRAP',
    name: 'E-commerce Website',
    description:
      'I created a E-website with DJANGO that have a contend management system.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/komi.png',
    category: 'DJANGO, HTML , BOOTSTRAP',
    name: 'Portfolio website # 1',
    description:
      'I created this website for my self and host it in pythonanywhere',
    link: '/',
    github: '/',
  },
  {
    image: '/work/portfolio.png',
    category: 'next.js',
    name: 'Portfolio website #2',
    description: 'I created a Portfolio website using next.js as a practice',
    link: '/',
    github: '/',
  },
  {
    image: '/work/aipc.png',
    category: 'Next.js, Express.js, Postgress',
    name: 'AI Pilipinas Community',
    description: 'I volunteered to make a platform in this community',
    link: '/',
    github: '/',
  },
];
// this display on the page
const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* parent div  */}
        <div
          className=" max-w-[400px] 
        mx-auto xl:mx-0 text-center xl:text-left
         mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start"
        >
          <h2 className="section-title mb-4 ">Latest Project</h2>
          <p className="subtitle mb-8">
          Need an end-to-end solution? I offer full-stack development services, combining my skills in frontend development, backend logic, and database management to deliver complete and functional web applications.
          </p>
          <Link href="/projects">
            <Button>All projects</Button>
          </Link>
        </div>
        {/* this is for the card */}
        <div className="xl:max-w-[950px] xl:absolute right-0 top-0">
          {/* tells if there is still card that exist like the 3 dots bruhhh swiper is a library which we can enable the pagination dots that allow us to know how many cards still left */}
          <Swiper
            className="h-[480px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/*this is the image in the carousel looped */}
            {/* show only the first 4 projects */}
            {/* projectdata is already used here so just use the project in the projectcard like project.image */}
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  {/* project is a prop to the projectcard folder wow */}
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}


          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
