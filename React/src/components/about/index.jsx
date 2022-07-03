import React, { useState, Fragment, useEffect } from "react";
import style from './about.module.css'
import AboutCounter from "./AboutCounter";

const About = () => {
  const [paragraph,setParagraph] = useState({
    img:``,
    about:[]
  })
  const getAbout = () => {
    fetch(`${import.meta.env.VITE_GOOGLE_API}bestSeller.json`)
      .then((response) => response.json())
      .then((data) => setParagraph(data));
  };
  useEffect(()=>{
    getAbout()
  },[])
  return (
    <>
      <section className={`${style.about} section`} id="about">
        <div className={style.about_container}>
          <div className={style.about_row}>
            <div className={style.about_img} style={{backgroundImage: `url(${paragraph.img})`}}></div>
            <div className={style.about_text}>
              <h2>About The Book</h2>
              {
                paragraph.about.length>0?
                paragraph.about.map((item,index)=>{
                  return(
                    <Fragment key={index}>
                      <h4>{item.title}</h4>
                      <p>{item.content}</p>
                    </Fragment>
                  )
                }):``
              }
            </div>
          </div>
        </div>
      </section>
      <AboutCounter style={style}/>
    </>
  );
};

export default About;
