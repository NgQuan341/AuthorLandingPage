import React from 'react'
import style from './testimonial.module.css'

const Testimonial = () => {
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
                <div className={style.testimonial_slide_block}>
                  <div className={style.testimonial_slide_icon}>
                    <i className="fa fa-quote-left"></i>
                  </div>
                  <div className={style.testimonial_slide_description}>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind texts.
                  </div>
                  <div className={style.testimonial_slide_row}>
                    <div
                      className={style.testimonial_slide_img}
                      style={{backgroundImage: `url(./assets/images/person1.webp)`}}
                    ></div>
                    <div className={style.testimonial_slide_column}>
                      <div className={style.testimonial_slide_name}>Roger Scott</div>
                      <div className={style.testimonial_slide_position}>
                        Marketing Manager
                      </div>
                    </div>
                  </div>
                </div>
                <div className={style.testimonial_slide_block}>
                  <div className={style.testimonial_slide_icon}>
                    <i className="fa fa-quote-left"></i>
                  </div>
                  <div className={style.testimonial_slide_description}>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind texts.
                  </div>
                  <div className={style.testimonial_slide_row}>
                    <div
                      className={style.testimonial_slide_img}
                      style={{backgroundImage: `url(./assets/images/person2.webp)`}}
                    ></div>
                    <div className={style.testimonial_slide_column}>
                      <div className={style.testimonial_slide_name}>Roger Scott</div>
                      <div className={style.testimonial_slide_position}>
                        Marketing Manager
                      </div>
                    </div>
                  </div>
                </div>
                <div className={style.testimonial_slide_block}>
                  <div className={style.testimonial_slide_icon}>
                    <i className="fa fa-quote-left"></i>
                  </div>
                  <div className={style.testimonial_slide_description}>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind texts.
                  </div>
                  <div className={style.testimonial_slide_row}>
                    <div
                      className={style.testimonial_slide_img}
                      style={{backgroundImage: `url(./assets/images/person3.webp)`}}
                    ></div>
                    <div className={style.testimonial_slide_column}>
                      <div className={style.testimonial_slide_name}>Roger Scott</div>
                      <div className={style.testimonial_slide_position}>
                        Marketing Manager
                      </div>
                    </div>
                  </div>
                </div>
                <div className={style.testimonial_slide_block}>
                  <div className={style.testimonial_slide_icon}>
                    <i className="fa fa-quote-left"></i>
                  </div>
                  <div className={style.testimonial_slide_description}>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind texts.
                  </div>
                  <div className={style.testimonial_slide_row}>
                    <div
                      className={style.testimonial_slide_img}
                      style={{backgroundImage: `url(./assets/images/person3.webp)`}}
                    ></div>
                    <div className={style.testimonial_slide_column}>
                      <div className={style.testimonial_slide_name}>Roger Scott</div>
                      <div className={style.testimonial_slide_position}>
                        Marketing Manager
                      </div>
                    </div>
                  </div>
                </div>
                <div className={style.testimonial_slide_block}>
                  <div className={style.testimonial_slide_icon}>
                    <i className="fa fa-quote-left"></i>
                  </div>
                  <div className={style.testimonial_slide_description}>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind texts.
                  </div>
                  <div className={style.testimonial_slide_row}>
                    <div
                      className={style.testimonial_slide_img}
                      style={{backgroundImage: `url(./assets/images/person3.webp)`}}
                    ></div>
                    <div className={style.testimonial_slide_column}>
                      <div className={style.testimonial_slide_name}>Roger Scott</div>
                      <div className={style.testimonial_slide_position}>
                        Marketing Manager
                      </div>
                    </div>
                  </div>
                </div>
                <div className={style.testimonial_slide_block}>
                  <div className={style.testimonial_slide_icon}>
                    <i className="fa fa-quote-left"></i>
                  </div>
                  <div className={style.testimonial_slide_description}>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind texts.
                  </div>
                  <div className={style.testimonial_slide_row}>
                    <div
                      className={style.testimonial_slide_img}
                      style={{backgroundImage: `url(./assets/images/person3.webp)`}}
                    ></div>
                    <div className={style.testimonial_slide_column}>
                      <div className={style.testimonial_slide_name}>Roger Scott</div>
                      <div className={style.testimonial_slide_position}>
                        Marketing Manager
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={style.testimonial_dots}>
            <button className={`${style.btn} ${style.btn_next}`}>
              <i className="fa-solid fa-angle-left"></i>
            </button>
            <div className={style.dots}>
              <button></button>
              <button></button>
              <button></button>
              <button></button>
              <button></button>
              <button></button>
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