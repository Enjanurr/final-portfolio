import Link from 'next/link';
import { Button } from './ui/button';
import { Download, Send } from 'lucide-react';

//This is an icon from the react
import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from 'react-icons/ri';

import DevImg from './DevImg';
import Badge from './Badge';
import Socials from './Socials';

// This entire content here is for the section
const Hero = () => {
  return (
    <section className="py-12 xl:py-24 pt-20 md:pt-28 ">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/**Text here */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px] ">
              Web developer
            </div>
            <h1 className="h1 mb-4">Hello, my name is Enjanurr</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
            I am a budding web developer
             passionate about creating functional
              and dynamic websites. I have hands-on experience
               building a website using Django and am now exploring 
               the MERN stack to expand my skill set. While I’m still
                early in my journey, I’m committed to continuous 
                learning and excited to tackle new challenges in web development
            </p>
            {/*buttons from the ui , shadcn ui */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact Me <Send size={18} />
                </Button>
              </Link>
              <Button variant="secondary" className="gap-x-2">
                Download CV <Download size={18} />
              </Button>
            </div>
            {/*This is for the socials logo */}
            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconsStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>
          {/**image here */}
          <div className="hidden xl:flex relative ">
            {/* badge 1 */}
            <Badge
              containerStyles="absolute top-[24%] -left-[39rem]"
              icon={<RiBriefcase4Fill />}
              endCountNum={1}
              badgeText="Years of Experience"
            />
            {/* badge 2 */}
            <Badge
              containerStyles="absolute top-[80%] -left-[33rem]"
              icon={<RiBriefcase4Fill />}
              endCountNum={3}
              badgeText="Finished Projects"
            />
               {/* badge 3 */}
               <Badge
              containerStyles="absolute top-[55%] -right-8"
              icon={<RiBriefcase4Fill />}
              endCountNum={3}
              badgeText="Happy clients"
            />
            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2">
              <DevImg
                containerStyles="bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom"
                imgSrc="/hero/developer.png"
              />
            </div>
          </div>
        </div>

        {/* That arrow that shows us there is an content below */}
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary " />
        </div>
      </div>
    </section>
  );
};

export default Hero;
