// A navbar component
// This is the urls like in django
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation'; // for navigation through pages
import { motion } from 'framer-motion';

const links = [
  { path: '/', name: 'Home' },
  { path: '/projects', name: 'Projects' }, // Projects is the name of the function in projects/page.jsx
  { path: '/contact', name: 'Contact' },
];

const Nav = ({ containerStyles, linkStyles, underlineStyle }) => {
  const path = usePathname();
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`capitalize ${linkStyles}`}
          >
            {link.path === path && (
            
              <motion.span
                intitial={{ y: '-100%' }}
                animate={{ y: 0 }}
                transition={{ type: 'tween' }}
                layoutId="underline"
                className={`${underlineStyle}`}
              />
            )}
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
