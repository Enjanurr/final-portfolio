'use client';
import { MailIcon, HomeIcon, PhoneCall } from 'lucide-react';
import Form from '@/components/Form';

const Contact = () => {
  return (
    <section>
      <div className="container mx-auto ">{/* this is for the wrapper div */}
        <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">{/* this contains the children div */}
          {/* div for the text */}
          <div className="flex flex-col justify-center"> {/* this  wrap all the major elements*/}
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4"> {/* this contains the div for the say hello */}
              <span className="w-[30px] h-[2px] bg-primary"></span>
              Say hello
            </div>
            <h1 className="h1 max-w-md mb-8">Let's work Together.</h1>
            <p className="subtitle max-w-[400px]">
            I’m here to help. Contact me today, and let’s start building something amazing together!
            </p>
          </div>

          {/** div for illustration */}
          <div className="hidden xl:flex w-full bg-contact_illustration_light
           dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat"></div>
        </div>

        {/*another div#2 */}
        {/*info text and form */}
        <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
          {/* info text*/}
          <div className='flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg'>
            {/**/}
            <div className="flex items-center gap-x-8">
              <MailIcon size={18} className="text-primary" />
              <div>bajentingjanurr@gmail.com</div>
            </div>  
            {/**/}
            <div className="flex items-center gap-x-8">
              <HomeIcon size={18} className="text-primary" />
              <div>Argao,Cebu,Phillippines</div>
            </div>
            {/**/}
            <div className="flex items-center gap-x-8">
              <PhoneCall size={18} className="text-primary" />
              <div>0921-506-2822</div>
            </div>
          </div>
            <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
