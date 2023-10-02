import { useState } from "react";
import { validateEmail } from "../utils/validate";
import emailjs from '@emailjs/browser';
import Form from 'react-bootstrap/Form';

const styles = {
  content: {
    paddingBottom: "5em",
  },

};

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [touched, setTouched] = useState(false);

  const  handleFormSubmit = (e) => {
    e.preventDefault();      
    if (!validateEmail(email)) {
        alert(`Please enter a valid email`)
        return 
    }
   if (name && email && message) {

    const templateId = "template_7mt3gdj";
    const serviceId = "service_p2a62m8"
    const publicKey = 'IkgqTH2Np5vQFNJZz';
    const templateParams = {
     name, 
     email,
     message
    };

  emailjs.send(serviceId, templateId, templateParams, publicKey)
  .then((result) => {
    console.log(result);
  },
  (error) => {
    console.log(error.text)
  });

    alert(`Your message has been sent, ${name}`);
    setName("");
    setEmail("");
    setMessage("");
    setEmailSent(true);
    setTouched(false);
   } else {
    console.log('it works!');
   }

  };

  return (
    <Form className="container form-container">
    <Form.Group
      className="contact-form form-control-lg"
      style={styles.content}
      onSubmit={handleFormSubmit}
    >
       <h2 className="contact-title mt-5">Stay In Touch!</h2>
      <div >   
        <Form.Label className="form-label">
          Your Name 
        </Form.Label>
        <Form.Control className="contact-form input"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => {setName(e.target.value);
            setTouched(true)}}
        ></Form.Control>
        {touched ? (name !== '' ? null : "Required Field"): null}
      </div>

      <div className="mb-3 pt-2" style={styles.form}>
        <Form.Label className="form-label ">Your Email Address </Form.Label>
        <Form.Control className="contact-form input"
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => {setEmail(e.target.value); setTouched(true)}}
        ></Form.Control>
         {touched ? (email !== '' ? null : "Required Field"): null}
      </div>

      <div className="mb-3" style={styles.form}>
        <label className="form-label">Your Message </label>
        <Form.Control className="contact-form message-input"
          type="text"
          as="textarea"
          placeholder="Leave Me a Message!"
          value={message}
          onChange={(e) => {setMessage(e.target.value); setTouched(true)}}
          // onBlur={() => setTouched(true)}
        ></Form.Control>
         {touched ? (message !== '' ? null : "Required Field"): null}
         <span className={emailSent ? 'Thank you for your message, we will be in touch!' : null}></span>
      </div>

      <button onClick={handleFormSubmit} type="submit" className="send-message">
        Send Message
      </button>
    </Form.Group>
    </Form>

  );
}
