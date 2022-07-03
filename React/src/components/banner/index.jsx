import React, { useState, useEffect } from "react";
import style from './banner.module.css';

const Banner = () => {
  const [bestSeller, setBestSeller] = useState({})
  const getBestSeller = () => {
    fetch(`${import.meta.env.VITE_GOOGLE_API}bestSeller.json`)
      .then((response) => response.json())
      .then((data) => setBestSeller(data));
  };
  useEffect(()=>{
    getBestSeller()
  },[])
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
          <img src={`https://firebasestorage.googleapis.com/v0/b/author-api.appspot.com/o/book_lover.svg?alt=media&token=e4a5fb01-ec4c-44af-8508-99d6ec47b2be`} alt="" />
        </div>
      </section>
    </>
  );
};

export default Banner;
