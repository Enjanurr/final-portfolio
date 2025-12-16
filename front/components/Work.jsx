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
    image: '/work/aipc.png',
    category: 'MERN',
    name: 'AI Pilipinas Community',
    description:
      'A volunteer-driven platform built for the AI Pilipinas community to connect enthusiasts, share events, and promote collaboration among Filipino developers. Developed a responsive full-stack web solution to manage user engagement and community resources.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/book.png',
    category: 'MERN',
    name: 'ZenRead',
    description:
      'A library management system built with the MERN stack and Django REST API integration. Allows users to borrow and track books, manage records efficiently, and provides an admin dashboard for organizing digital library operations.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/parser.png',
    category: 'DJANGO/ AI',
    name: 'Resume Parser',
    description:
      'An AI-powered resume analysis tool developed using Cohere API, Next.js, and Django. Automatically extracts key skills, experience, and education details from resumes to assist recruiters in evaluating candidates efficiently.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/kwezz.png',
    category: 'Fullstack / AI',
    name: 'Kwezz',
    description:
      'An AI-powered quiz generation platform using Cohere for NLP, Whisper for speech-to-text, Django with PostgreSQL for backend logic, and Next.js for the frontend. Designed to generate and evaluate quizzes intelligently for educational use cases.',
    link: '/',
    github: '/',
  },
  {
    image: '/work/demo.jpg',
    category: 'React-Native',
    name: 'Movie App',
   description:
  'A mobile movie application built with React Native that allows users to browse, search, and explore movie information in a clean and intuitive interface. The app focuses on smooth navigation, responsive layouts, and efficient data handling to deliver an engaging user experience across devices.',
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
            {projectData.slice(0, 5).map((project, index) => {
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
