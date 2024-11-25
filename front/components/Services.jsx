import { GanttChartSquare, Blocks, Gem } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const servicesData = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: 'Frontend development',
    description:  
      'I specialize in building responsive and interactive web interfaces that prioritize user experience. With expertise in HTML, CSS, JavaScript, and frameworks like React, I design and develop dynamic frontends tailored to your brand and audience. Whether it’s a landing page, portfolio site, or a single-page application, I deliver clean, modern, and accessible designs optimized for performance.',
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: 'Backend development',
    description:
      'I develop secure, scalable, and efficient backend solutions to power your applications. Using technologies like Node.js, Express.js, and Django, I handle server-side logic, API development, authentication, and integration with databases like MongoDB and MySQL. My focus is on ensuring your application runs smoothly behind the scenes while supporting all your business requirements.',
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: 'Database management',
    description:
      'I provide basic database setup and management services using MySQL and MongoDB. From creating tables or collections to performing CRUD operations, I can structure and maintain your project’s data needs efficiently. I’m continuously improving my skills to handle more complex database requirements',
  },
];

const Services = () => {
  return (
    <section className="mb-12 xl:mb-36">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">
          My Services
        </h2>
        {/* Responsive grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
          {servicesData.map((item, index) => {
            return (
              <Card
                className="w-full max-w-[424px] min-h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative mx-auto"
                key={index}
              >
                <CardHeader className="text-primary absolute -top-[60px]">
                  <div className="w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center">
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className='text-center '>
                  <CardTitle className='mb-4'>{item.title}</CardTitle>
                  <CardDescription className='text-lg'>{item.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
