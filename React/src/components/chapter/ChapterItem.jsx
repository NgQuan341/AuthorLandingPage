import React from "react";

const ChapterItem = (props) => {
  const { style, page } = props;
  return (
    <div className={style.chapter_page}>
      <h2>{page.title}</h2>
      <p>{page.content}
      </p>
    </div>
  );
};

export default ChapterItem;
