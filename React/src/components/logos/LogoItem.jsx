import React from "react";

const LogoItem = (props) => {
  const { style,logo } = props;
  return (
    <div className={style.logos_item}>
      <a href={logo.link} className={style.logos_link}>
        <img src={logo.img} alt="" />
      </a>
    </div>
  );
};

export default LogoItem;
