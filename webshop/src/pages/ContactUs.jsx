import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault(); // refreshi takistamiseks juhul kui mul on HTMLs form tag

    emailjs.sendForm('service_fum24bj', 'template_ld2lsyd', form.current, 'Xbn0xj_4LjNugxYGl')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label> <br />
      <input type="text" name="from_name" /> <br />
      <label>Email</label> <br />
      <input type="email" name="from_email" /> <br />
      <label>Message</label> <br />
      <textarea name="message" /> <br />
      <input type="submit" value="Saada" /> <br />
    </form>
  );
};