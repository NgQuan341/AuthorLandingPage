import React, { useState } from "react";
import SlideItem from "./SlideItem";
import style from "./testimonial.module.css";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';

const Testimonial = () => {
  const [slides, setSlides] = useState([
    {
      id: 1,
      img: `./assets/images/person1.webp`,
      name: `Roger Scott`,
      position: `Marketing Manager`,
      description: `Far far away, behind the word mountains, far from the countries Vokalia
      and Consonantia, there live the blind texts.`,
    },
    {
      id: 2,
      img: `./assets/images/person2.webp`,
      name: `Roger Scott`,
      position: `Marketing Manager`,
      description: `Far far away, behind the word mountains, far from the countries Vokalia
      and Consonantia, there live the blind texts.`,
    },
    {
      id: 3,
      img: `./assets/images/person3.webp`,
      name: `Roger Scott`,
      position: `Marketing Manager`,
      description: `Far far away, behind the word mountains, far from the countries Vokalia
      and Consonantia, there live the blind texts.`,
    },
    {
      id: 4,
      img: `./assets/images/person1.webp`,
      name: `Roger Scott`,
      position: `Marketing Manager`,
      description: `Far far away, behind the word mountains, far from the countries Vokalia
      and Consonantia, there live the blind texts.`,
    },
  ]);
  return (
    <>
      <section className={`${style.testimonial} section`} id="reviews">
        <div
          className={style.testimonial_img}
          style={{ backgroundImage: `url(./assets/images/testimonial.webp)` }}
        ></div>
        <div className={style.testimonial_container}>
          <div className={style.testimonial_text}>
            <p>Testimonial</p>
            <h2>Kinds Words From Customers</h2>
          </div>
            <Splide aria-label="Testimonial" options={{
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
            }}>
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
