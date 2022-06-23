import React from "react";
import logoStyle from './logos.module.css'

const Logos = () => {
  return (
    <>
      <section class={logoStyle.logos}>
        <div class={logoStyle.logos_container}>
          <div class={logoStyle.logos_row}>
            <div class={logoStyle.logos_item}>
              <a href="" class={logoStyle.logos_link}>
                <img src="./assets/images/xpartner-1.webp" alt="" srcset="" />
              </a>
            </div>
            <div class={logoStyle.logos_item}>
              <a href="" class={logoStyle.logos_link}>
                <img src="./assets/images/xpartner-2.webp" alt="" srcset="" />
              </a>
            </div>
            <div class={logoStyle.logos_item}>
              <a href="" class={logoStyle.logos_link}>
                <img src="./assets/images/xpartner-3.webp" alt="" srcset="" />
              </a>
            </div>
            <div class={logoStyle.logos_item}>
              <a href="" class={logoStyle.logos_link}>
                <img src="./assets/images/xpartner-4.webp" alt="" srcset="" />
              </a>
            </div>
            <div class={logoStyle.logos_item}>
              <a href="" class={logoStyle.logos_link}>
                <img src="./assets/images/xpartner-5.webp" alt="" srcset="" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Logos;
