import React, { useState } from "react";
import SlideItem from "./SlideItem";
import style from "./testimonial.module.css";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';

const Testimonial = () => {
  const [slides, setSlides] = useState([
    {
      id: 1,
      img: `https://firebasestorage.googleapis.com/v0/b/author-api.appspot.com/o/person1.webp?alt=media&token=0eec7ed6-cd0f-46d7-b5a1-04e83d25c3d4`,
      name: `Roger Scott`,
      position: `Marketing Manager`,
      description: `Far far away, behind the word mountains, far from the countries Vokalia
      and Consonantia, there live the blind texts.`,
    },
    {
      id: 2,
      img: `https://firebasestorage.googleapis.com/v0/b/author-api.appspot.com/o/person2.webp?alt=media&token=b6590040-8828-45dc-9035-5e0568f8c3a3`,
      name: `Roger Scott`,
      position: `Marketing Manager`,
      description: `Far far away, behind the word mountains, far from the countries Vokalia
      and Consonantia, there live the blind texts.`,
    },
    {
      id: 3,
      img: `https://firebasestorage.googleapis.com/v0/b/author-api.appspot.com/o/person3.webp?alt=media&token=4c6a739f-54a5-4fd1-ac40-2f0c1b1a7fa6`,
      name: `Roger Scott`,
      position: `Marketing Manager`,
      description: `Far far away, behind the word mountains, far from the countries Vokalia
      and Consonantia, there live the blind texts.`,
    },
    {
      id: 4,
      img: `https://firebasestorage.googleapis.com/v0/b/author-api.appspot.com/o/person2.webp?alt=media&token=b6590040-8828-45dc-9035-5e0568f8c3a3`,
      name: `Roger Scott`,
      position: `Marketing Manager`,
      description: `Far far away, behind the word mountains, far from the countries Vokalia
      and Consonantia, there live the blind texts.`,
    },
  ]);
  const splideConfig = {
    type:'loop',
    perPage: 3,
    perMove: 1,
    gap:`15px`,
    autoplay: true,
    arrows: false,
    speed: 1500,
    pauseOnHover: true,
    breakpoints: {
      992: {
        perPage: 1,
        padding:`172px`
      },
      768:{
        perPage: 1,           
      },
      590:{
        perPage: 1,
        gap:`30px`,
        padding:{right:'29px'}
      }
    }
  }
  return (
    <>
      <section className={`${style.testimonial} section`} id="reviews">
        <div
          className={style.testimonial_img}
          style={{ backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/author-api.appspot.com/o/testimonial.webp?alt=media&token=bba33bed-5d69-4647-8a59-f7a6ee24a3c7)` }}
        ></div>
        <div className={style.testimonial_container}>
          <div className={style.testimonial_text}>
            <p>Testimonial</p>
            <h2>Kinds Words From Customers</h2>
          </div>
            <Splide aria-label="Testimonial" options={splideConfig}>
              {
                slides.map((slide) => (
                  <SplideSlide key={slide.id}>
                    <SlideItem slide={slide} style={style} />
                  </SplideSlide>
                ))
              }
              
            </Splide>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
