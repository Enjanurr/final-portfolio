'use client';
import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
  RiInstallFill,
} from 'react-icons/ri';

import Link from 'next/link';

const icons = [
  {
    path: '/',
    name: <RiYoutubeFill />,
  },
  {
    path: '/',
    name: <RiLinkedinFill />,
  },
  {
    path: '/',
    name: <RiGithubFill />,
  },
  {
    path: '/',
    name: <RiInstallFill />,
  },
  {
    path: '/',
    name: <RiYoutubeFill />,
  },
  {
    path: '/',
    name: <RiFacebookFill />,
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
