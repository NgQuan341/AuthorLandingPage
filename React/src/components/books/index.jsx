import React, { useState, useEffect } from "react";
import BookItem from "./BookItem";
import style from "./books.module.css";

const Books = () => {
  const [books, setBooks] = useState([]);
  const getBooks = () => {
    fetch(`${import.meta.env.VITE_GOOGLE_API}books.json`)
      .then((response) => response.json())
      .then((data) => setBooks(data));
  };
  useEffect(()=>{
    getBooks()
  },[])
  return (
    <>
      <section className={`${style.book} section`} id="book">
        <div className={style.book_title}>
          <p>Projects</p>
          <h2>My Other Books</h2>
        </div>
        <div className={style.book_container}>
          {
            books?
            books.map((item) => (
              <BookItem key={item.id} item={item} style={style} />
            )):''
          }
        </div>
      </section>
    </>
  );
};

export default Books;
