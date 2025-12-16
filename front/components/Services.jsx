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
    title: 'Full-Stack Development',
    description:
      'I build end-to-end web and mobile applications with a strong backend-first approach. I focus on designing reliable APIs, handling authentication, and structuring application logic, while integrating clean and functional frontends using React, Next.js, or React Native. My goal is to deliver complete, maintainable systems where the frontend and backend work seamlessly together.',
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: 'Backend Engineering',
    description:
      'I specialize in developing secure and scalable backend systems using Django, Node.js, and Express. My work includes REST API design, authentication and authorization, database integration, and third-party API consumption, including AI services. I prioritize clear architecture, data integrity, and code that can grow with the application.',
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: 'DevOps & Security (Learning)',
    description:
      'I am actively learning DevOps and cybersecurity fundamentals to understand how applications are deployed, monitored, and protected in production. This includes Linux environments, deployment pipelines, basic CI/CD workflows, containerization concepts, and security practices such as environment hardening, secrets management, and minimizing attack surfaces.',
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
