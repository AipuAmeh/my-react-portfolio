import { useState } from "react";
import { validateEmail } from "../utils/validate";


const styles = {
  content: {
    padding: "12em",
  },
  form: {
    // display: '',
    // float: 'left'
  }
};

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [touched, setTouched] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();

        
    if (!validateEmail(email)) {
        alert(`Please enter a valid email`)
        return 
    }
   
    alert(`Thank you for your submission ${name}`);
    setName("");
    setEmail("");
    setMessage("");
    


  };

  return (
    <form
      className="contact-form"
      style={styles.content}
      onSubmit={handleFormSubmit}
    >
      <div className="mb-3" style={styles.form}>
        <label className="form-label p-2">
          Your Name: 
        </label>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={() => setTouched(true)}
        ></input>
        {touched ? (name !== '' ? null : "Required Field"): null}
      </div>

      <div className="mb-3" style={styles.form}>
        <label className="form-label p-2">Your Email Address: </label>
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => setTouched(true)}
        ></input>
         {touched ? (email !== '' ? null : "Required Field"): null}
      </div>

      <div className="mb-3" style={styles.form}>
        <label className="form-label p-2">Your Message: </label>
        <textarea
          type="text"
          placeholder="Leave Me a Message!"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onBlur={() => setTouched(true)}
        ></textarea>
         {touched ? (message !== '' ? null : "Required Field"): null}
      </div>

      <button type="submit" id="send-message">
        Send Message
      </button>
    </form>
  );
}
