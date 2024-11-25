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
        role: 'Front-end Website developer',
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
        imgPath: '/about/vscode.svg',
      },
      {
        imgPath: '/about/figma.svg',
      },
      {
        imgPath: '/about/notion.svg',
      },
      {
        imgPath: '/about/wordpress.svg',
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
    <section className="xl:h-[860px] pb-12 xl:py-24 ">
      <div className="containter mx-auto">
        <h2 className="section-title mb-8 xl:mt-16 text-center mx-auto">
          About Me
        </h2>
        <div className="flex flex-col xl:flex-row">
          {/*image*/}
          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px]
             h-[505px] bg-no-repeat relative"
              imgSrc="/about/developer.png"
            />
          </div>

          {/*tabs this is the button*/}
          {/* value resonates with the tab button and the tab content*/}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none ">
                <TabsTrigger value="personal">Personal Info</TabsTrigger>
                <TabsTrigger value="qualifications">Qualications</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
              </TabsList>

              {/*tabs content*/}
              <div className="text-lg mt-12 xl:mt-8">
                {/*personal*/}
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">Unmatched Service </h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                      Specializing in creating websites with cutting-edge
                      technology, delivering modern, high-performance web
                      solutions.
                    </p>
                    {/* icons */}
                    <div className="grid xl:grid-cols-2 gap-4 mb-12 ">
                      {/* make a for loop like the loop in django but in this case use a map since its next js */}
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className="flex items-center gap-x-4 mx-auto xl:mx-0"
                            key={index}
                          >
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </TabsContent>
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
                <TabsContent value="skills">
                  <div className="text-center xl:text-left ">
                    <h3 className="h3 mb-8">Tools I use</h3>
                    <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-2">Skills</h4>
                      <div className="border-b border-border mb-4"></div>
                      {/*skill set */}
                      <div>
                        {getData(skillData, 'skills').data.map(
                          (item, index) => {
                            const { name } = item;

                            return (
                              <div
                                className="w-2/4 text-center xl:text-left mx-auto xl:mx-0"
                                key={index}
                              >
                                <div className="font-medium">{name}</div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                    {/**toolss */}
                    <div>
                      <h4 className="text-xl font-semibold mb-2 xl:text-left">
                        Tools
                      </h4>
                      <div className="border-b border-border mb-4"></div>

                      {/* tools list */}
                      <div className='flex gap-x-8 justify-center xl:justify-start'>
                        {getData(skillData, 'tools').data.map((item, index) => {
                          const { imgPath } = item;
                          return (
                            <div key={index}>
                              <Image
                                src={imgPath}
                                width={48}
                                height={48}
                                alt=""
                                priority
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
