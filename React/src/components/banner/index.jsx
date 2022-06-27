import React, { useState } from "react";
import style from './banner.module.css';

const Banner = () => {
  const [bestSeller, setBestSeller] = useState({
    name:`Clue Of The Wooden Cottage`,
    description:`A small river named Duden flows by their place and supplies it with
    the necessary regelialia. It is a paradisematic country, in which
    roasted parts of sentences fly into your mouth.`,
    price:`$100`,
    imgBanner: `./assets/images/book_lover.svg`
  })
  return (
    <>
      <section className={`${style.banner} section`}>
        <div className={style.banner_text}>
          <div className={style.banner_text_subheading}>BEST SELLER BOOK OF THE WEEK</div>
          <h1 className={style.banner_text_slogan}>{bestSeller.name}</h1>
          <div className={style.banner_text_content}>{bestSeller.description}</div>
          <p>
            <a href="" className={style.banner_btn}>
              BUY NOW FOR {bestSeller.price}
            </a>
          </p>
        </div>
        <div className={style.banner_blank}></div>
        <div className={style.banner_img}>
          <img src={bestSeller.imgBanner} alt="" />
        </div>
      </section>
    </>
  );
};

export default Banner;
