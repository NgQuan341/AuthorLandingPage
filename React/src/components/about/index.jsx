import React from "react";
import aboutStyle from './about.module.css'

const About = () => {
  return (
    <>
      <section className={`${aboutStyle.about} section`} id="about">
        <div className={aboutStyle.about_container}>
          <div className={aboutStyle.about_row}>
            <div className={aboutStyle.about_img} style={{backgroundImage: `url(./assets/images/xbg_1.webp)`}}></div>
            <div className={aboutStyle.about_text}>
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
      <section className={aboutStyle.about_counter}>
        <div className={aboutStyle.about_counter_container}>
          <div className={aboutStyle.about_counter_row}>
            <div className={aboutStyle.about_counter_item}>
              <div className={aboutStyle.about_counter_block}>
                <strong>1,100</strong>
                <p>Copies Sold</p>
              </div>
            </div>
            <div className={aboutStyle.about_counter_item}>
              <div className={aboutStyle.about_counter_block}>
                <strong>1,200</strong>
                <p>Copies Released</p>
              </div>
            </div>
            <div className={aboutStyle.about_counter_item}>
              <div className={aboutStyle.about_counter_block}>
                <strong>340</strong>
                <p>Cup of coffee</p>
              </div>
            </div>
            <div className={aboutStyle.about_counter_item}>
              <div className={aboutStyle.about_counter_block}>
                <strong>12,000</strong>
                <p>Happy Readers</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
