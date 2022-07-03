import React, { useEffect } from "react";
import { useState } from "react";
import style from "./contactForm.module.css";

const ContactForm = () => {
  const [map, setMap] = useState({
    __html: `<iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.2128415198013!2d106.71968101474424!3d10.795004161802463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527c2f8f30911%3A0x36ac5073f8c91acd!2sLandmark%20TVGB%2081!5e0!3m2!1svi!2s!4v1654743313022!5m2!1svi!2s"
    width="100%"
    height="100%"
    style="border: 0"
    allowFullScreen={true}
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />`,
  });
  const [contact, setContact] = useState({
    name: ``,
    email: ``,
    subject: ``,
    message: ``,
  });
  const [error, setError] = useState({
    name: ``,
    email: ``,
    subject: ``,
    message: ``,
  })
  const checkContact = ()=>{
    let check = false;
    if(!check){
      if(!contact.name){
        check = true
        setError({name:`Name must required`, email:``, subject:``})
      }
      else{
        setError({...error, name:``})
      }
    }
    if(!check){
      if(!contact.email){
        check = true
        setError({name:``, subject:``,email:`Email must required`})
      }
      else{
        let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if(!contact.email.match(mailformat)){
          check=true
        setError({name:``, subject:``, email:`Email format is wrong`})
        }
        else{
          setError({...error, email:``}) 
        }
      }
    }
    if(!check){
      if(!contact.subject){
        check = true
        setError({name:``, email:``, subject:`Subject must required`})
      }
      else{
        setError({...error, subject:``})
      }
    }
    return check;
  }
  const sentContactInfo = () => {
    if(checkContact()){
      return
    }
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contact),
    };
    fetch(`${import.meta.env.VITE_GOOGLE_API}customers.json`, requestOptions)
      .then((res) => res.json())
      .then((json) => {
        if (json.error) {
          throw new Error(json.error);
        } else {
          setContact({
            name: ``,
            email: ``,
            subject: ``,
            message: ``,
          });
          setError({
            name: ``,
            email: ``,
            subject: ``,
            message: ``,
          })
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(()=>{

  },[error])
  return (
    <>
      <section className={style.form_contact} id="form-contact">
        <div className={style.form_contact_container}>
          <div className={style.form_map}>
            <div
              dangerouslySetInnerHTML={map}
              style={{ width: "100%", height: "100%" }}
            ></div>
          </div>
          <div className={style.form}>
            <form action="">
              <input
                className={style.form_control}
                type="text"
                name="name"
                id=""
                placeholder="Your Name"
                onChange={(e) => {
                  setContact({ ...contact, name: e.target.value });
                }}
                value={contact.name}
                required
              />
              <small style={{marginLeft:'6px', color:'red'}}>{error.name}</small>
              <input
                className={style.form_control}
                type="email"
                name="email"
                id=""
                placeholder="Your Email"
                onChange={(e) => {
                  setContact({ ...contact, email: e.target.value });
                }}
                value={contact.email}
                required
              />
              <small style={{marginLeft:'6px', color:'red'}}>{error.email}</small>
              <input
                className={style.form_control}
                type="text"
                name="subject"
                id=""
                placeholder="Subject"
                onChange={(e) => {
                  setContact({ ...contact, subject: e.target.value });
                }}
                value={contact.subject}
                required
              />
              <small style={{display:'block',marginLeft:'6px', color:'red'}}>{error.subject}</small>
              <textarea
                className={style.form_control_textarea}
                name="message"
                id=""
                cols="50"
                rows="7"
                placeholder="Message"
                onChange={(e) => {
                  setContact({ ...contact, message: e.target.value });
                }}
                value={contact.message}
                required
              ></textarea>
              <button
                className={style.form_btn}
                type="button"
                onClick={() => sentContactInfo()}
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
