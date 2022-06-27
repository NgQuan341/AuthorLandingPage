import React from "react";

const AboutCounterItem = (props) => {
    const {item, style} = props
  return (
    <div className={style.about_counter_item}>
      <div className={style.about_counter_block}>
        <strong>{item.number}</strong>
        <p>{item.title}</p>
      </div>
    </div>
  );
};

export default AboutCounterItem;
