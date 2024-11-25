'use client';
import { motion } from 'framer-motion';
// A template.jsx file is generally used to define a common structure 
// or layout that multiple pages can share, similar to layout.jsx
//hooks
import useScrollProgress from '@/hooks/useScrollProgress';

//variants
const variants = {
    hidden: { opacity: 0 },
    enter: { opacity: 1 },
};

const Template = ({ children }) => {
    const completion = useScrollProgress();
    return (
          <> {/*  provides animation */}
            <motion.main 
                variants={variants}
                initial='hidden'
                animate='enter'
                transition={{ type: 'linear', delay: 0.2, duration: 0.4 }}
                >
                {children}
            </motion.main>

            {/* Completion bar */}
            <span 
                style={{ transform: `translateY(${completion - 100}%)` }}
                className='fixed z-50 bg-primary w-1 top-0 right-0 bottom-0 transition-all duration-700'></span>
            <div className='h-[90px]'></div>
        </>
    );
};

export default Template;
