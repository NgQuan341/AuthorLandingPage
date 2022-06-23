import React from 'react'
import style from './books.module.css'

const Books = () => {
  return (
    <>
     <section className={`${style.book} section`} id="book">
        <div className={style.book_title}>
          <p>Projects</p>
          <h2>My Other Books</h2>
        </div>
        <div className={style.book_container}>
          <div className={style.book_column}>
            <div
              className={style.book_img}
              style={{backgroundImage: `url(./assets/images/book1.webp)`}}
            >
              <div className={style.book_overlay}>
                <a href="" className={style.book_overlay_text}>
                  <h2>You Are Your Ony Limit</h2>
                  <p>romance</p>
                </a>
              </div>
            </div>
          </div>
          <div className={style.book_column}>
            <div
              className={style.book_img}
              style={{backgroundImage: `url(./assets/images/book2.webp)`}}
            >
              <div className={style.book_overlay}>
                <a href="" className={style.book_overlay_text}>
                  <h2>You Are Your Ony Limit</h2>
                  <p>romance</p>
                </a>
              </div>
            </div>
          </div>
          <div className={style.book_column}>
            <div
              className={style.book_img}
              style={{backgroundImage: `url(./assets/images/book3.webp)`}}
            >
              <div className={style.book_overlay}>
                <a href="" className={style.book_overlay_text}>
                  <h2>You Are Your Ony Limit</h2>
                  <p>romance</p>
                </a>
              </div>
            </div>
          </div>
          <div className={style.book_column}>
            <div
              className={style.book_img}
              style={{backgroundImage: `url(./assets/images/book4.webp)`}}
            >
              <div className={style.book_overlay}>
                <a href="" className={style.book_overlay_text}>
                  <h2>You Are Your Ony Limit</h2>
                  <p>romance</p>
                </a>
              </div>
            </div>
          </div>
          <div className={style.book_column}>
            <div
              className={style.book_img}
              style={{backgroundImage: `url(./assets/images/book5.webp)`}}
            >
              <div className={style.book_overlay}>
                <a href="" className={style.book_overlay_text}>
                  <h2>You Are Your Ony Limit</h2>
                  <p>romance</p>
                </a>
              </div>
            </div>
          </div>
          <div className={style.book_column}>
            <div
              className={style.book_img}
              style={{backgroundImage: `url(./assets/images/book6.webp)`}}
            >
              <div className={style.book_overlay}>
                <a href="" className={style.book_overlay_text}>
                  <h2>You Are Your Ony Limit</h2>
                  <p>romance</p>
                </a>
              </div>
            </div>
          </div>
          <div className={style.book_column}>
            <div
              className={style.book_img}
              style={{backgroundImage: `url(./assets/images/book7.webp)`}}
            >
              <div className={style.book_overlay}>
                <a href="" className={style.book_overlay_text}>
                  <h2>You Are Your Ony Limit</h2>
                  <p>romance</p>
                </a>
              </div>
            </div>
          </div>
          <div className={style.book_column}>
            <div
              className={style.book_img}
              style={{backgroundImage: `url(./assets/images/book8.webp)`}}
            >
              <div className={style.book_overlay}>
                <a href="" className={style.book_overlay_text}>
                  <h2>You Are Your Ony Limit</h2>
                  <p>romance</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Books