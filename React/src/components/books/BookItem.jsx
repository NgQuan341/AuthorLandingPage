import React from "react";

const BookItem = (props) => {
    const {style, item} = props
  return (
    <div className={style.book_column}>
      <div
        className={style.book_img}
        style={{ backgroundImage: `url(${item.img})` }}
      >
        <div className={style.book_overlay}>
          <a href="" className={style.book_overlay_text}>
            <h2>{item.name}</h2>
            <p>{item.type}</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default BookItem;
