'use client';
import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
  RiInstallFill,
} from 'react-icons/ri';
import { SiLeetcode } from 'react-icons/si';

import Link from 'next/link';

const icons = [
 
  {
    path: 'https://www.linkedin.com/in/johnru-bajenting-57880a342/',
    name: <RiLinkedinFill />,
  },
  {
    path: 'https://github.com/Enjanurr',
    name: <RiGithubFill />,
  },
  
   {
    path: 'https://leetcode.com/u/enjanurr/',
    name: <SiLeetcode />,
  },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
