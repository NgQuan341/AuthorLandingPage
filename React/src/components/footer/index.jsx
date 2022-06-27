import React from 'react'
import style from './footer.module.css'
const Footer = () => {
  return (
    <>
    <footer className={style.footer}>
        <div className={style.footer_container}>
          <div className={style.footer_row}>
            <div className={style.footer_column}>
              <div className={style.footer_column_text}>
                <h2>About</h2>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
              <div className={style.footer_social_media}>
                <div className={style.footer_social_media_btn}>
                  <a href=""><i className="fa-brands fa-twitter"></i></a>
                </div>
                <div className={style.footer_social_media_btn}>
                  <a href=""><i className="fa-brands fa-facebook"></i></a>
                </div>
                <div className={style.footer_social_media_btn}>
                  <a href=""><i className="fa-brands fa-instagram"></i></a>
                </div>
              </div>
            </div>
            <div className={style.footer_column}>
              <div className={style.footer_column_text}>
                <h2>Links</h2>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#chapter">Chapter</a></li>
                <li><a href="#review">Reviews</a></li>
                <li><a href="#contact">Contact</a></li>
              </div>
            </div>
            <div className={style.footer_column}>
              <div className={style.footer_column_text}>
                <h2>Services</h2>
                <li><a href="">Experience</a></li>
                <li><a href="">Marketing Goals</a></li>
                <li><a href="">Taggeting Vission</a></li>
              </div>
            </div>
            <div className={style.footer_column}>
              <div className={style.footer_column_text}>
                <h2>Have a Questions?</h2>
                <span>
                  <p className={style.footer_social_media_icon}>
                    <i className="fa-solid fa-location-dot"></i>
                  </p>
                  <p>
                    203 Fake St. Mountain View, San Francisco, California, USA
                  </p>
                </span>
                <span>
                  <p className={style.footer_social_media_icon}>
                    <i className="fa-solid fa-phone"></i>
                  </p>
                  <p>+2 392 3929 210</p>
                </span>
                <span>
                  <p className={style.footer_social_media_icon}>
                    <i className="fa-solid fa-paper-plane"></i>
                  </p>
                  <p>info@yourdomain.com</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer