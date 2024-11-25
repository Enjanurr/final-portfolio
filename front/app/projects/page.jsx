'use client';

import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProjectCard from '@/components/ProjectCard';

// This is where the project page is located when we clicked the project in the navbar
const projectData = [
  {
    image: '/work/komi.png',
    category: 'DJANGO',
    name: 'Portfolio website # 1',
    description:
      'I created this website for my self and host it in pythonanywhere',
    link: '/',
    github: '/',
  },
  {
    image: '/work/portfolio.png',
    category: 'Next.js',
    name: 'Portfolio website #2',
    description: 'I created a Portfolio website using next.js as a practice',
    link: '/',
    github: '/',
  },
  {
    image: '/work/aipc.png',
    category: 'Fullstack',
    name: 'AI Pilipinas Community',
    description: 'I volunteered to make a platform in this community',
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
