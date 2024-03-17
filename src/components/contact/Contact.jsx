/* eslint-disable no-unused-vars */
import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "d784ec68-f932-40c8-820c-7f37d5a9253f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat dolore debitis eaque eius deserunt vitae excepturi. Ipsam cum voluptatum blanditiis.</p>
            <ul>
                <li><img src={mail_icon} alt="" />ringinrp21@gmail.com</li>
                <li><img src={phone_icon} alt="" />085156219219</li>
                <li><img src={location_icon} alt="" />Pondok Makmur, Kuta Bumi, Tangerang</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your name</label>
                <input type="text" name='name' placeholder='Enter your name' required/>
                <label>Phone number</label>
                <input type="tel" name='phone_number' placeholder='Enter you mobile number'/>
                <label>Write your messages here</label>
                <textarea name="message" rows="6" placeholder='Enter your message'></textarea>
                <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact
