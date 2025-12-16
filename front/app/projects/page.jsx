'use client';

import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProjectCard from '@/components/ProjectCard';

// This is where the project page is located when we clicked the project in the navbar
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
    category: 'Fullstack / AI',
    name: 'Movie App',
   description:
  'A mobile movie application built with React Native that allows users to browse, search, and explore movie information in a clean and intuitive interface. The app focuses on smooth navigation, responsive layouts, and efficient data handling to deliver an engaging user experience across devices.',
    link: '/',
    github: '/',
  },
];

const uniqueCategories = [
  'all projects',
  ...new Set(projectData.map((item) => item.category)),
];
const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState('all projects');

  const filteredProjects = projectData.filter((project) => {
    // category if 'all projects' return all projects, else filtered by category
    return category === 'all projects'
      ? project
      : project.category === category;
  });
  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My projects
        </h2>
        <Tabs defaultValue={category} className='mb-24 xl:mb-48'>
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          <div className='text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4'>
            {filteredProjects.map((project,index) => {
            return <TabsContent value={category} key={index}>
              <ProjectCard project={project}></ProjectCard>
            </TabsContent>
          })}</div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
