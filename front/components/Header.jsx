'use client';
import React, { useState, useEffect } from 'react';
import Themetoggler from './ThemeToggler';
import Logo from './Logo';
import Nav from './Nav';
import MobileNav from './MobileNav';
import { usePathname } from 'next/navigation';

// This entire code here is for the top region or the nav bar part
const Header = () => {
  const [header, setHeader] = useState(false);
  const pathname = usePathname();
  //console.log(pathname)

  useEffect(() => {
    const scrollYPos = window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });

    return () => window.removeEventListener('scroll', scrollYPos);
  });


  //This is the part that is being rendered to the website  or the navbar component
  return (
    <header
      className={`${
        header
          ? 'py-4 bg-white shadow-lg dark:bg-accent'
          : 'py-6 dark:bg-transparent'
      }
         sticky top-0 z-30 transition-all
        ${pathname === '/' && 'bg-[#fef9f5]'}`}
    >
      <div className=" container mx-auto">
        <div className="flex justify-between items-cen">
          {/* This is from the logo.jsx transported here */}
          <Logo />
          <div className="flex items-center gap-x-6">
            
            {/*Nav.jsx */}
            {/* This is for the underline design when clicked */}
            <Nav
              containerStyles="hidden xl:flex gap-x-8 items-center "
              linkStyles="relative hover:text-primary transition-all"
              underlineStyle="absolute left-0 top-full h-[2px] bg-primary w-full"
            />

            {/* The button that switches to darkmode to light */}
            <Themetoggler />
            {/* This is for a responsive view */}
            {/* mobile nav.jsx*/}
            <div className="xl:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
