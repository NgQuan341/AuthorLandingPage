import React, { useState } from 'react'
import SlideItem from './SlideItem'
import style from './testimonial.module.css'

const Testimonial = () => {
  const [slides, setSlides] = useState([
    {
      id:1,
      img:`./assets/images/person1.webp`,
      name:`Roger Scott`,
      position:`Marketing Manager`,
      description:`Far far away, behind the word mountains, far from the countries Vokalia
      and Consonantia, there live the blind texts.`
    },
    {
      id:2,
      img:`./assets/images/person2.webp`,
      name:`Roger Scott`,
      position:`Marketing Manager`,
      description:`Far far away, behind the word mountains, far from the countries Vokalia
      and Consonantia, there live the blind texts.`
    },
    {
      id:3,
      img:`./assets/images/person3.webp`,
      name:`Roger Scott`,
      position:`Marketing Manager`,
      description:`Far far away, behind the word mountains, far from the countries Vokalia
      and Consonantia, there live the blind texts.`
    },
    {
      id:4,
      img:`./assets/images/person1.webp`,
      name:`Roger Scott`,
      position:`Marketing Manager`,
      description:`Far far away, behind the word mountains, far from the countries Vokalia
      and Consonantia, there live the blind texts.`
    },
  ])
  return (
    <>
    <section className={`${style.testimonial} section`} id="reviews">
        <div className={style.testimonial_img} style={{backgroundImage: `url(./assets/images/testimonial.webp)`}}></div>
        <div className={style.testimonial_container}>
          <div className={style.testimonial_text}>
            <p>Testimonial</p>
            <h2>Kinds Words From Customers</h2>
          </div>
          <div className={style.testimonial_slide_container}>
            <div className={style.testimonial_slide_wrapper}>
              <div className={style.testimonial_slide_main}>
               {
                 slides.map(slide=>(
                   <SlideItem key={slide.id} slide={slide} style={style} />
                 ))
               }
              </div>
            </div>
          </div>
          <div className={style.testimonial_dots}>
            <button className={`${style.btn} ${style.btn_next}`}>
              <i className="fa-solid fa-angle-left"></i>
            </button>
            <div className={style.dots}>
            {
              slides.map(slide=>(
                <button key={slide.id}></button>
              ))
            }
            </div>
            <button className={`${style.btn} ${style.btn_pre}`}>
              <i className="fa-solid fa-angle-right"></i>
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Testimonial