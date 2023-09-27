import { useState } from "react";
import { validateEmail } from "../utils/validate";
import emailjs from 'emailjs-com';
// import { init } from 'emailjs-com'
// init('IkgqTH2Np5vQFNJZz')


const styles = {
  content: {
    paddingBottom: "10em",
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

    const templateId = 'template_7mt3gdj';
    const serviceId = 'service_k24xo1c';
    const publicKey = 'IkgqTH2Np5vQFNJZz';
    const templateParams = {
     name, 
     email,
     message
    };

  emailjs.send(templateId, serviceId, templateParams, publicKey)
    .then(response => console.log(response))
    .then(error => console.log(error));

    alert(`Your message has been sent, ${name}`);
    setName("");
    setEmail("");
    setMessage("");
    setEmailSent(true);
    setTouched(false);
   } else {
    console.log('this does not work');
   }

  };

  return (
    <div className="container form-container">
    <form
      className="contact-form form-control-lg"
      style={styles.content}
      onSubmit={handleFormSubmit}
    >
       <h2 className="contact-title mt-5">Stay In Touch!</h2>
      <div >   
        <label className="form-label">
          Your Name 
        </label>
        <input className="contact-form input"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={() => setTouched(true)}
        ></input>
        {touched ? (name !== '' ? null : "Required Field"): null}
      </div>

      <div className="mb-3 pt-2" style={styles.form}>
        <label className="form-label ">Your Email Address </label>
        <input className="contact-form input"
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => setTouched(true)}
        ></input>
         {touched ? (email !== '' ? null : "Required Field"): null}
      </div>

      <div className="mb-3" style={styles.form}>
        <label className="form-label">Your Message </label>
        <textarea className="contact-form message-input"
          type="text"
          placeholder="Leave Me a Message!"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onBlur={() => setTouched(true)}
        ></textarea>
         {touched ? (message !== '' ? null : "Required Field"): null}
         <span className={emailSent ? 'visible' : null}>Thank you for your message, we will be in touch!</span>
      </div>

      <button onClick={handleFormSubmit} type="submit" className="send-message">
        Send Message
      </button>
    </form>
    </div>

  );
}
