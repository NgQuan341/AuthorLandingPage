import React, { useState } from "react";
import style from "./author.module.css";

const Author = () => {
  const [author, setAuthor] = useState({
    name:'Franklin Henderson',
    description: ` A small river named Duden flows by their place and supplies it
    with the necessary regelialia.`,
    dob: `November 28, 1980`,
    address: `San Francisco CA 97987 USA`,
    zip: `1000`,
    email:`franklinsample@gmail.com`,
    phone: `+1-2234-5678-9-0`,
    img:`./assets/images/author.webp`
  })
  return (
    <>
      <section className={`${style.author} section`} id="author">
        <div className={style.author_container}>
          <div
            className={style.author_img}
            style={{ backgroundImage: `url(${author.img})` }}
          ></div>
          <div className={style.author_infomation}>
            <div className={style.author_infomation_container}>
              <p className={style.author_infomation_subheading}>
                Know More About The Author
              </p>
              <h2>{author.name}</h2>
              <p className={style.author_infomation_description}>{author.description}</p>
              <table>
                <tbody>
                  <tr>
                    <th>Name</th>
                    <td>{author.name}</td>
                  </tr>
                  <tr>
                    <th>Date of birth</th>
                    <td>{author.dob}</td>
                  </tr>
                  <tr>
                    <th>Address</th>
                    <td>{author.address}</td>
                  </tr>
                  <tr>
                    <th>Zip code</th>
                    <td>{author.zip}</td>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <td>{author.email}</td>
                  </tr>
                  <tr>
                    <th>Phone</th>
                    <td>{author.phone}0</td>
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
