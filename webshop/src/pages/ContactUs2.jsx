import { useRef } from 'react';
import emailjs from '@emailjs/browser';

function ContactUs() {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const sendEmail = () => {
    const templateParams = {
      from_name: nameRef.current.value + "(" + emailRef.current.value + ")",
      to_name: "Veebilehe omanik",
      products: ["Coca cola", "Fanta"].map((element,index) =>  (index+1) + ". " + element)
    };

    emailjs.send('service_fum24bj', 'template_ld2lsyd', templateParams, 'Xbn0xj_4LjNugxYGl')
      .then(result => {
          console.log(result.text);
      }, error => {
          console.log(error.text);
      });
  };

  return (
      <div>
        <label>Name</label>
        <input ref={nameRef} type="text" />
        <label>Email</label>
        <input ref={emailRef} type="email"/>
        <label>Message</label>
        <textarea ref={messageRef} name="message" />
        <button onClick={sendEmail}>Saada</button>
      </div>
  );
};

export default ContactUs;