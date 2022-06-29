import React, { useState } from "react";
import style from './contactInfo.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone, faPaperPlane, faEarthAsia } from '@fortawesome/free-solid-svg-icons'

const ContactInfo = () => {
  const [contact, setContact] = useState({
    description:`Far far away, behind the word mountains, far from the countries
    Vokalia and Consonantia`,
    address:`198 West 21th Street, Suite 721 New York NY 10016`,
    phone:`012356789`,
    email:`quanguyen@gmail.com`,
    website:`https://author-landingpage.netlify.app/`
  })
  return (
    <>
      <section className={`${style.contact} section`} id="contact">
        <div className={style.contact_title_container}>
          <div className={style.contact_title}>
            <h2>Contact Me</h2>
            <p>{contact.description}</p>
          </div>
        </div>
        <div className={style.contact_content}>
          <div className={style.contact_box}>
            <div className={style.contact_block}>
              <div className={style.contact_block_icon}>
                <FontAwesomeIcon icon={faLocationDot} inverse />
              </div>
              <h3>Address</h3>
              <p>{contact.address}</p>
            </div>
          </div>
          <div className={style.contact_box}>
            <div className={style.contact_block}>
              <div className={style.contact_block_icon}>
                <FontAwesomeIcon icon={faPhone} inverse />
              </div>
              <h3>Contact Number</h3>
              <a href="">{contact.phone}</a>
            </div>
          </div>
          <div className={style.contact_box}>
            <div className={style.contact_block}>
              <div className={style.contact_block_icon}>
                <FontAwesomeIcon icon={faPaperPlane} inverse />
              </div>
              <h3>Email Address</h3>
              <a href="">{contact.email}</a>
            </div>
          </div>
          <div className={style.contact_box}>
            <div className={style.contact_block}>
              <div className={style.contact_block_icon}>
                <FontAwesomeIcon icon={faEarthAsia} inverse />
              </div>
              <h3>Website</h3>
              <a href={contact.website} target="_blank">{contact.website}</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactInfo;
