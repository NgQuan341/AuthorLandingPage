import React from "react";
import style from './contactInfo.module.css'

const ContactInfo = () => {
  return (
    <>
      <section className={`${style.contact} section`} id="contact">
        <div className={style.contact_title_container}>
          <div className={style.contact_title}>
            <h2>Contact Me</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia
            </p>
          </div>
        </div>
        <div className={style.contact_content}>
          <div className={style.contact_box}>
            <div className={style.contact_block}>
              <div className={style.contact_block_icon}>
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <h3>Address</h3>
              <p>198 West 21th Street, Suite 721 New York NY 10016</p>
            </div>
          </div>
          <div className={style.contact_box}>
            <div className={style.contact_block}>
              <div className={style.contact_block_icon}>
                <i className="fa-solid fa-phone"></i>
              </div>
              <h3>Contact Number</h3>
              <a href="">123456789</a>
            </div>
          </div>
          <div className={style.contact_box}>
            <div className={style.contact_block}>
              <div className={style.contact_block_icon}>
                <i className="fa-solid fa-paper-plane"></i>
              </div>
              <h3>Email Address</h3>
              <a href="">quanguyen@gmail.com</a>
            </div>
          </div>
          <div className={style.contact_box}>
            <div className={style.contact_block}>
              <div className={style.contact_block_icon}>
                <i className="fa-solid fa-earth-asia"></i>
              </div>
              <h3>Website</h3>
              <a href="">yoursite</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactInfo;
