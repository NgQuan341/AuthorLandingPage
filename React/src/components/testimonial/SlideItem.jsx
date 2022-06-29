import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

const SlideItem = (props) => {
  const { style, slide } = props;
  return (
    <div className={style.testimonial_slide_block}>
      <div className={style.testimonial_slide_icon}>
        <FontAwesomeIcon icon={faQuoteLeft} />
      </div>
      <div className={style.testimonial_slide_description}>{slide.description}</div>
      <div className={style.testimonial_slide_row}>
        <div
          className={style.testimonial_slide_img}
          style={{ backgroundImage: `url(${slide.img})` }}
        ></div>
        <div className={style.testimonial_slide_column}>
          <div className={style.testimonial_slide_name}>{slide.name}</div>
          <div className={style.testimonial_slide_position}>{slide.position}</div>
        </div>
      </div>
    </div>
  );
};

export default SlideItem;
