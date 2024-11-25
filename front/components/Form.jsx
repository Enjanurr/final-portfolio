'use client';
import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { User, MailIcon, ArrowRightIcon, MessageSquare } from 'lucide-react';

{
  /* the default(e.g Name) is that it is an empty string but then set(e.g seName) to have the data */
}
const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // This will handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:5000/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }), // Sending data as JSON
    });

    // this is a condition that tells wether the submission is successful or not
    const result = await response.json();
    if (result.success) {
      alert('Email sent successfully!');
    } else {  
      alert('Failed to send email');
    }
  };

  {
    /* this is for the front end */
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
      <div className="relative flex items-center ">
        <Input
          type="text"
          id="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <User className="absolute right-6" size={20} />
      </div>
      <div className="relative flex items-center ">
        <Input
          type="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <MailIcon className="absolute right-6" size={20} />
      </div>
      <div className="relative flex items-center ">
        <Textarea
          id="message"
          placeholder="Type your message here."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <MessageSquare className="absolute top-4 right-6" size={20} />
      </div>
      <Button className="flex items-center gap-x-1 max-w-[166px]">
        Let's Talk
        <ArrowRightIcon size={20} />
      </Button>
    </form>
  );
};

export default Form;
