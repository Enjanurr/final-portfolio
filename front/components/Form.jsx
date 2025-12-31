'use client';
import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { User, MailIcon, ArrowRightIcon, MessageSquare } from 'lucide-react';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const onFormSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message }),
    });

    const data = await res.json();
    
    if (data.success) {
      alert("Email sent successfully!");
      setName(""); setEmail(""); setMessage("");
    } else {
      alert(`Failed to send email: ${data.error}`);
    }
  };

  return (
    <form onSubmit={onFormSubmit} className="flex flex-col gap-y-4">
      <div className="relative flex items-center ">
        <Input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} required />
        <User className="absolute right-6" size={20} />
      </div>
      <div className="relative flex items-center ">
        <Input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
        <MailIcon className="absolute right-6" size={20} />
      </div>
      <div className="relative flex items-center ">
        <Textarea placeholder="Message" value={message} onChange={e => setMessage(e.target.value)} required />
        <MessageSquare className="absolute top-4 right-6" size={20} />
      </div>
      <Button type="submit" className="flex items-center gap-x-1 max-w-[166px]">
        Let's Talk
        <ArrowRightIcon size={20} />
      </Button>
    </form>
  );
};

export default Form;
