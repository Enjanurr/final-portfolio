import Image from 'next/image';
import DevImg from './DevImg';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'; // this is from the shadcn website
import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
  University,
} from 'lucide-react';
import { FaHtml5, FaJs, FaNodeJs, FaCss3 } from 'react-icons/fa';
import {
  SiTailwindcss,
  SiNextdotjs,
  SiDjango,
  SiFlask,
  SiGit,
  SiGithub,
  SiExpress,
  SiMongodb,
  SiPython,
} from 'react-icons/si';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const infoData = [
  {
    icon: <User2 size={20} />,
    text: 'Enjanurr',
  },
  {
    icon: <PhoneCall size={20} />,
    text: '0921 506 2822',
  },
  {
    icon: <MailIcon size={20} />,
    text: 'bajentingjanurr@gmail.com',
  },
  {
    icon: <Calendar size={20} />,
    text: 'Born on November 17, 2005',
  },
  {
    icon: <GraduationCap size={20} />,
    text: 'BSIT',
  },
  {
    icon: <HomeIcon size={20} />,
    text: 'Argao,Cebu',
  },
];

const qualificationData = [
  {
    title: 'Education',
    data: [
      {
        University: 'Cebu Institute of Technology',
        role: 'Bachelors of Science in Information Technology',
        years: '2024-2028',
      },
      {
        University: 'Argao National High School',
        role: 'Science Technology Engineering and Mathematics',
        years: '2022-2024',
      },
      {
        University: 'Colawin National High School',
        role: 'Special Program of the Arts',
        years: '2018-2021',
      },
    ],
  },
  {
    title: 'Experience',
    data: [
      {
        Company: 'Freelancer',
        role: 'Website developer',
        years: '2022 - Present',
      },
      {
        Company: 'Ai Pilipinas',
        role: 'Full-stack developer',
        years: '2024 - 2025',
      },
      {
        Company: 'Google Dev Clubs',
        role: 'Volunteer',
        years: '2024 - 2025',
      },
    ],
  },
];

const skillData = [
  {
    title: 'skills',
    data: [
      {
        name: 'HTML , CSS',
      },
      {
        name: 'Front-end Developer',
      },
      {
        name: 'DJANGO, NEXT.JS , JAVASCRIPT, PYTHON, C',
      },
      {
        name: 'Back-end Developer',
      },
    ],
  },
  {
    title: 'tools',
    data: [
      {
        tool: <FaHtml5 size={50} />,
        name: 'HTML',
      },
      {
        tool: <FaJs size={50} />,
        name: 'Javascript',
      },
      {
        tool: <FaNodeJs size={50} />,
        name: 'Node.js',
      },
      {
        tool: <FaCss3 size={50} />,
        name: 'CSS',
      },
      {
        tool: <SiTailwindcss size={50} />,
        name: 'Tailwind CSS',
      },
      {
        tool: <SiNextdotjs size={50} />,
        name: 'Next.js',
      },
      {
        tool: <SiDjango size={50} />,
        name: 'Django',
      },
      {
        tool: <SiFlask size={50} />,
        name: 'Flask',
      },
      {
        tool: <SiGit size={50} />,
        name: 'Git',
      },
      {
        tool: <SiGithub size={50} />,
        name: 'Github',
      },
      {
        tool: <SiExpress size={50} />,
        name: 'Express.js',
      },
      {
        tool: <SiMongodb size={50} />,
        name: 'Monggo ',
      },
      {
        tool: <SiPython size={50} />,
        name: 'Python',
      },
    ],
  },
  // I can add another code here for the svg of the tools
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className="xl:h-[1050px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mt-16 text-center mx-auto">
          About Me
        </h2>
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* image */}
          <div className="hidden xl:block flex-1">
            <div className="relative">
              <div className="sticky top-0 bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat bg-cover bg-center">
                <DevImg
                  containerStyles="w-full h-full relative bottom-2.5 bg-no-repeat"
                  imgSrc="/about/dev4.png"
                />
              </div>
            </div>
          </div>

          {/* tabs */}
          <div className="flex-1">
            
            <Tabs defaultValue="personal">
              <div className='flex align-center justify-center'>
              <TabsList className="w-full grid grid-cols-3 max-w-[520px] border dark:border-none">
                <TabsTrigger value="personal">Personal Info</TabsTrigger>
                <TabsTrigger value="qualifications">Qualifications</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
              </TabsList>

              </div>
              {/* tabs content */}
              <div className="text-lg mt-12 xl:mt-8 " >
              <div className="h-[500px] overflow-y-auto p-4 border border-primary rounded ">
                {/* Your existing TabsContent components remain unchanged */}
                {/* Personal Tab */}
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">Unmatched Service</h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                      Specializing in creating websites with cutting-edge
                      technology, delivering modern, high-performance web
                      solutions.
                    </p>
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => (
                        <div
                          className="flex items-center gap-x-4 mx-auto xl:mx-0"
                          key={index}
                        >
                          <div className="text-primary">{item.icon}</div>
                          <div>{item.text}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                {/* Qualifications Tab */}
                <TabsContent value="qualifications">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      My Journey
                    </h3>
                    {/* wrapper */}
                    <div className="grid md:grid-cols-2 gap-y-8">
                      {/*experience */}
                      <div>
                        <div>
                          <div className="flex gap-x-4 items-center text-[22px] text-primary">
                            <Briefcase />
                            <h4>
                              {/*title*/}
                              {getData(qualificationData, 'Experience').title}
                            </h4>
                          </div>
                          {/* list  */}
                          <div className="flex flex-col gap-y-8">
                            {/* this is the for loop */}
                            {getData(qualificationData, 'Experience').data.map(
                              (item, index) => {
                                const { Company, role, years } = item;
                                return (
                                  <div
                                    className="flex gap-x-8 group"
                                    key={index}
                                  >
                                    {/* invisible vertical line that serves as a path for the ball */}
                                    <div className="h-[84px] w[1px] bg-border relative ml-2 ">
                                      {/* that cute circle that moves when hovered */}
                                      <div className="w-[11px] h-[11px]  rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                    </div>

                                    <div>
                                      <div className="font-semibold text-xl leading-none mb-2 ">
                                        {Company}
                                      </div>
                                      <div className="text-lg leading-none text-muted-foreground mb-4">
                                        {role}
                                      </div>
                                      <div className="text-base font-medium">
                                        {years}
                                      </div>
                                    </div>
                                  </div>
                                );
                              }
                            )}
                          </div>
                        </div>
                      </div>
                      {/* education */}
                      <div>
                        <div>
                          <div className="flex gap-x-4 items-center text-[22px] text-primary">
                            <GraduationCap size={28} />
                            <h4>
                              {/*title*/}
                              {getData(qualificationData, 'Education').title}
                            </h4>
                          </div>
                          {/* list  */}
                          <div className="flex flex-col gap-y-8">
                            {/* this is the for loop */}
                            {getData(qualificationData, 'Education').data.map(
                              (item, index) => {
                                const { University, role, years } = item;
                                return (
                                  <div
                                    className="flex gap-x-8 group"
                                    key={index}
                                  >
                                    {/* invisible vertical line that serves as a path for the ball */}
                                    <div className="h-[84px] w[1px] bg-border relative ml-2 ">
                                      {/* that cute circle that moves when hovered */}
                                      <div className="w-[11px] h-[11px]  rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                    </div>

                                    <div>
                                      <div className="font-semibold text-xl leading-none mb-2 ">
                                        {University}
                                      </div>
                                      <div className="text-lg leading-none text-muted-foreground mb-4">
                                        {role}
                                      </div>
                                      <div className="text-base font-medium">
                                        {years}
                                      </div>
                                    </div>
                                  </div>
                                );
                              }
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Skills Tab */}
              <TabsContent value="skills">
  <div className="text-center xl:text-left">
    <h3 className="h3 mb-8">Tools I use</h3>
    
    {/* Skills Section */}
    <div className="mb-12">
      <h4 className="text-xl font-semibold mb-4">Skills</h4>
      <div className="h-px bg-border w-full mb-4" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto xl:mx-0">
        {getData(skillData, 'skills').data.map((skill, index) => (
          <div
            key={index}
            className="p-4 bg-transparent hover:bg-accent/50 rounded-lg transition-colors"
          >
            <span className="font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Tools Section - Updated with full-width grid */}
    <div className="space-y-4">
      <h4 className="text-xl font-semibold">Tools</h4>
      <div className="h-px bg-border w-full" />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 w-full">
        {getData(skillData, 'tools').data.map((item, index) => (
          <TooltipProvider key={index} delayDuration={100}>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="aspect-square w-full rounded-lg flex items-center justify-center hover:bg-accent/50 transition-all duration-300 group">
                  <div className="text-primary text-4xl group-hover:text-secondary dark:text-white dark:group-hover:text-orange-500 transition-colors duration-300">
                    {item.tool}
                  </div>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.name}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
    </div>
  </div>
</TabsContent>
              </div>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
