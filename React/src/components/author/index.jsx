import React, { useState, useEffect } from "react";
import style from "./author.module.css";

const Author = () => {
  const [author, setAuthor] = useState({})
  const getAuthor = () => {
    fetch(`${import.meta.env.VITE_GOOGLE_API}author.json`)
      .then((response) => response.json())
      .then((data) => setAuthor(data));
  };
  useEffect(()=>{
    getAuthor()
  },[])
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
