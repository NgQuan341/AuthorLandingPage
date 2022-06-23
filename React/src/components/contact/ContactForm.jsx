import React from "react";
import { useState } from "react";
import style from './contactForm.module.css'

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
  />`} )
  return (
    <>
      <section className={style.form_contact} id="form-contact">
        <div className={style.form_contact_container}>
          <div className={style.form_map}>
            <div dangerouslySetInnerHTML={map} style={{width:'100%', height:'100%'}}></div>
          </div>
          <div className={style.form}>
            <form action="">
              <input
                className={style.form_control}
                type="text"
                name=""
                id=""
                placeholder="Your Name"
              />
              <input
                className={style.form_control}
                type="text"
                name=""
                id=""
                placeholder="Your Email"
              />
              <input
                className={style.form_control}
                type="text"
                name=""
                id=""
                placeholder="Subject"
              />
              <textarea
                className={style.form_control_textarea}
                name=""
                id=""
                cols="50"
                rows="7"
                placeholder="Message"
              ></textarea>
              <button className={style.form_btn} type="submit">
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
