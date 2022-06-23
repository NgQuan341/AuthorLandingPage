import React from "react";
import logoStyle from './logos.module.css'

const Logos = () => {
  return (
    <>
      <section className={logoStyle.logos}>
        <div className={logoStyle.logos_container}>
          <div className={logoStyle.logos_row}>
            <div className={logoStyle.logos_item}>
              <a href="" className={logoStyle.logos_link}>
                <img src="./assets/images/xpartner-1.webp" alt="" />
              </a>
            </div>
            <div className={logoStyle.logos_item}>
              <a href="" className={logoStyle.logos_link}>
                <img src="./assets/images/xpartner-2.webp" alt="" />
              </a>
            </div>
            <div className={logoStyle.logos_item}>
              <a href="" className={logoStyle.logos_link}>
                <img src="./assets/images/xpartner-3.webp" alt="" />
              </a>
            </div>
            <div className={logoStyle.logos_item}>
              <a href="" className={logoStyle.logos_link}>
                <img src="./assets/images/xpartner-4.webp" alt="" />
              </a>
            </div>
            <div className={logoStyle.logos_item}>
              <a href="" className={logoStyle.logos_link}>
                <img src="./assets/images/xpartner-5.webp" alt="" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Logos;
