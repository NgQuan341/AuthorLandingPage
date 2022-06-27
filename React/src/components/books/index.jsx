import React, { useState } from "react";
import BookItem from "./BookItem";
import style from "./books.module.css";

const Books = () => {
  const arr = [
    {
      id: 1,
      name: `You Are Your Ony Limit`,
      type: `romance`,
      img: `./assets/images/book1.webp`,
    },
    {
      id: 2,
      name: `You Are Your Ony Limit`,
      type: `romance`,
      img: `./assets/images/book2.webp`,
    },
    {
      id: 3,
      name: `You Are Your Ony Limit`,
      type: `romance`,
      img: `./assets/images/book3.webp`,
    },
    {
      id: 4,
      name: `You Are Your Ony Limit`,
      type: `romance`,
      img: `./assets/images/book4.webp`,
    },
    {
      id: 5,
      name: `You Are Your Ony Limit`,
      type: `romance`,
      img: `./assets/images/book5.webp`,
    },
    {
      id: 6,
      name: `You Are Your Ony Limit`,
      type: `romance`,
      img: `./assets/images/book6.webp`,
    },
    {
      id: 7,
      name: `You Are Your Ony Limit`,
      type: `romance`,
      img: `./assets/images/book7.webp`,
    },
    {
      id: 8,
      name: `You Are Your Ony Limit`,
      type: `romance`,
      img: `./assets/images/book8.webp`,
    },
  ];
  const [books, setBooks] = useState(arr);
  return (
    <>
      <section className={`${style.book} section`} id="book">
        <div className={style.book_title}>
          <p>Projects</p>
          <h2>My Other Books</h2>
        </div>
        <div className={style.book_container}>
          {books.map((item) => (
            <BookItem key={item.id} item={item} style={style} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Books;
