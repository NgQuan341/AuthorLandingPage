import React from "react";
import bannerStyle from './banner.module.css'
const Banner = () => {
  return (
    <>
      <section className={`${bannerStyle.banner} section`}>
        <div className={bannerStyle.banner_text}>
          <div className={bannerStyle.banner_text_subheading}>BEST SELLER BOOK OF THE WEEK</div>
          <h1 className={bannerStyle.banner_text_slogan}>Clue Of The Wooden Cottage</h1>
          <div className={bannerStyle.banner_text_content}>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth.
          </div>
          <p>
            <a href="" className={bannerStyle.banner_btn}>
              BUY NOW FOR $22.78
            </a>
          </p>
        </div>
        <div className={bannerStyle.banner_blank}></div>
        <div className={bannerStyle.banner_img}>
          <img src="./assets/images/book_lover.svg" alt="" />
        </div>
      </section>
    </>
  );
};

export default Banner;
