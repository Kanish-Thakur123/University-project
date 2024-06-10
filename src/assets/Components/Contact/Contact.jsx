import React from "react";
import "./Contact.css";
import msgicon from '../../../assets/msg-icon.png'
import mailicon from '../../../assets/mail-icon.png'
import phnicon from '../../../assets/phone-icon.png'
import locicon from '../../../assets/location-icon.png'

function Contact() {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "ce5c8a27-40cc-442a-afa2-ac9d7fbc830e");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>Send us a message <img src={msgicon} alt="" /></h3>
        <p>
          The term "education" originates from the Latin words educare, meaning
          "to bring up," and educere, meaning "to bring forth."[1] The
          definition of education has been explored by theorists from various
          fields.
        </p>
        <ul>
            <li> <img src={mailicon} alt=""/>kanisht349@gmail.com</li>
            <li> <img src={phnicon} alt="" />+91-7876316509 </li>
            <li> <img src={locicon} alt="" />Vill-Kaluna,Teh-Dheera,<br/>Himachal-Pradesh </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type="text" name="name" placeholder="Enter Your Name" required/>

            
            <label>Phone Number</label>
            <input type="tel" name="phone" placeholder="Enter Your Number" required/>

            
            <label>Write Your Message Here</label>
            <textarea name="message" id="" rows="6" placeholder="Enter Your Message" required></textarea>

            <button type="submit" className="btn dark_btn">Submit Now</button>
        </form>
        <span>{result}</span>
      </div>
      </div>
  );
}

export default Contact;
