import React from 'react'
import footerStyle from './footer.module.css'
const Footer = () => {
  return (
    <>
    <footer className={footerStyle.footer}>
        <div className={footerStyle.footer_container}>
          <div className={footerStyle.footer_row}>
            <div className={footerStyle.footer_column}>
              <div className={footerStyle.footer_column_text}>
                <h2>About</h2>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
              <div className={footerStyle.footer_social_media}>
                <div className={footerStyle.footer_social_media_btn}>
                  <a href=""><i className="fa-brands fa-twitter"></i></a>
                </div>
                <div className={footerStyle.footer_social_media_btn}>
                  <a href=""><i className="fa-brands fa-facebook"></i></a>
                </div>
                <div className={footerStyle.footer_social_media_btn}>
                  <a href=""><i className="fa-brands fa-instagram"></i></a>
                </div>
              </div>
            </div>
            <div className={footerStyle.footer_column}>
              <div className={footerStyle.footer_column_text}>
                <h2>Links</h2>
                <li><a href="#">Home</a></li>
                <li><a href="about">About</a></li>
                <li><a href="chapter">Chapter</a></li>
                <li><a href="review">Reviews</a></li>
                <li><a href="contact">Contact</a></li>
              </div>
            </div>
            <div className={footerStyle.footer_column}>
              <div className={footerStyle.footer_column_text}>
                <h2>Services</h2>
                <li><a href="">Experience</a></li>
                <li><a href="">Marketing Goals</a></li>
                <li><a href="">Taggeting Vission</a></li>
              </div>
            </div>
            <div className={footerStyle.footer_column}>
              <div className={footerStyle.footer_column_text}>
                <h2>Have a Questions?</h2>
                <span>
                  <p className={footerStyle.footer_social_media_icon}>
                    <i className="fa-solid fa-location-dot"></i>
                  </p>
                  <p>
                    203 Fake St. Mountain View, San Francisco, California, USA
                  </p>
                </span>
                <span>
                  <p className={footerStyle.footer_social_media_icon}>
                    <i className="fa-solid fa-phone"></i>
                  </p>
                  <p>+2 392 3929 210</p>
                </span>
                <span>
                  <p className={footerStyle.footer_social_media_icon}>
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