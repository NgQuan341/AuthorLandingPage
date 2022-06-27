import React, { useState } from "react";
import style from './about.module.css'
import AboutCounter from "./AboutCounter";

const About = () => {
  const [paragraph,setParagraph] = useState({
    backgroundImage:`./assets/images/xbg_1.webp`
  })
  return (
    <>
      <section className={`${style.about} section`} id="about">
        <div className={style.about_container}>
          <div className={style.about_row}>
            <div className={style.about_img} style={{backgroundImage: `url(${paragraph.backgroundImage})`}}></div>
            <div className={style.about_text}>
              <h2>About The Book</h2>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </p>
              <h4>Award achievements</h4>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </p>
              <h4>Read On Any Devices</h4>
              <p>
                Separated they live in Bookmarksgrove right at the coast of the
                Semantics, a large language ocean.
              </p>
              <h4>Very High Resolution</h4>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
          </div>
        </div>
      </section>
      <AboutCounter style={style}/>
    </>
  );
};

export default About;
