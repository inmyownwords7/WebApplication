import React, { useRef, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

const service_id = (import.meta.env.VITE_SERVICE_ID)
const template_id = (import.meta.env.VITE_TEMPLATE_ID)
const pubKey = (import.meta.env.VITE_PUBLIC_KEY)

interface FormData {
  user_name: string;
  user_email: string;
  message: string;
}

export const ContactUs: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm(service_id, template_id, form.current, pubKey)
        .then((result: { text: any; }) => {
          console.log(result.text);
        })
        .catch((error: { text: any; }) => {
          console.log(error.text);
        });
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};
