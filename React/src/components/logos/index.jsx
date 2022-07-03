import React, { useState, useEffect } from "react";
import LogoItem from "./LogoItem";
import style from './logos.module.css'

const Logos = () => {
  const [logos, setLogos] = useState([])
  const getLogos = () => {
    fetch(`${import.meta.env.VITE_GOOGLE_API}partners.json`)
      .then((response) => response.json())
      .then((data) => setLogos(data));
  };
  useEffect(()=>{
    getLogos()
  },[])
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
