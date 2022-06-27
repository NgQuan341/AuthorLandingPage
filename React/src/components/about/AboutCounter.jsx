import React, { useState } from "react";
import AboutCounterItem from "./AboutCounterItem";

const AboutCounter = (props) => {
    const {style} = props
    const arr = [
    {
        number:'1,100',
        title: 'Copies Sold'
    },
    {
        number:'1,200',
        title: 'Copies Released'
    },
    {
        number:'340',
        title: 'Cup of coffee'
    },
    {
        number:'12,000',
        title: 'Happy Readers'
    },
    ]
    const [items, setItems] = useState(arr)
  return (
    <section className={style.about_counter}>
      <div className={style.about_counter_container}>
        <div className={style.about_counter_row}>
            {
                items.map((item,index)=>(
                    <AboutCounterItem key={index} item={item} style={style}/>
                ))
            }
        </div>
      </div>
    </section>
  );
};

export default AboutCounter;
