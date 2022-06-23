import React from "react";
import style from "./author.module.css";

const Author = () => {
  return (
    <>
      <section className={`${style.author} section`} id="author">
        <div className={style.author_container}>
          <div
            className={style.author_img}
            style={{ backgroundImage: `url(./assets/images/author.webp)` }}
          ></div>
          <div className={style.author_infomation}>
            <div className={style.author_infomation_container}>
              <p className={style.author_infomation_subheading}>
                Know More About The Author
              </p>
              <h2>Franklin Henderson</h2>
              <p className={style.author_infomation_description}>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
              <table>
                <tbody>
                  <tr>
                    <th>Name</th>
                    <td>Franklin Henderson</td>
                  </tr>
                  <tr>
                    <th>Date of birth</th>
                    <td>November 28, 1980</td>
                  </tr>
                  <tr>
                    <th>Address</th>
                    <td>San Francisco CA 97987 USA</td>
                  </tr>
                  <tr>
                    <th>Zip code</th>
                    <td>1000</td>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <td>franklinsample@gmail.com</td>
                  </tr>
                  <tr>
                    <th>Phone</th>
                    <td>+1-2234-5678-9-0</td>
                  </tr>
                </tbody>
              </table>
              <div className={style.author_btn}>120 view all books</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Author;
