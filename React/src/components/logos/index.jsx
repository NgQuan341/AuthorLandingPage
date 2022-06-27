import React, { useState } from "react";
import LogoItem from "./LogoItem";
import style from './logos.module.css'

const Logos = () => {
  const [logos, setLogos] = useState([
    {
      id:1,
      img:`./assets/images/xpartner-1.webp`,
      link:`#`
    },
    {
      id:2,
      img:`./assets/images/xpartner-2.webp`,
      link:`#`
    },
    {
      id:3,
      img:`./assets/images/xpartner-3.webp`,
      link:`#`
    },
    {
      id:4,
      img:`./assets/images/xpartner-4.webp`,
      link:`#`
    }
  ])
  return (
    <>
      <section className={style.logos}>
        <div className={style.logos_container}>
          <div className={style.logos_row}>
           {
             logos.map(logo=>(
               <LogoItem key={logo.id} logo={logo} style = {style} />
             ))
           }
          </div>
        </div>
      </section>
    </>
  );
};

export default Logos;
