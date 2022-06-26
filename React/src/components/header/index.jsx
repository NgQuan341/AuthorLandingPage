import React from "react";
import { useState } from "react";
import headerStyle from './header.module.css';
import HeaderMenuItem from "./HeaderMenuItem";

const Header = () => {
  const menuItems = [
    {
      id: 1,
      name:'Home',
      active: true,
      sectionID:'#'
    },
    {
      id: 2,
      name:'About',
      active: false,
      sectionID:'#about'
    },
    {
      id: 3,
      name:'Chapter',
      active: false,
      sectionID:'#chapter'
    },
    {
      id: 4,
      name:'Reviews',
      active: false,
      sectionID:'#reviews'
    },
    {
      id: 5,
      name:'My Books',
      active: false,
      sectionID:'#book'
    },
    {
      id: 6,
      name:'Author',
      active: false,
      sectionID:'#author'
    },
    {
      id: 7,
      name:'Contact',
      active: false,
      sectionID:'#contact'
    },
  ]
  const [items, setItems] = useState(menuItems);
  const setActiveItem = (id) =>{
    let arr = items.map((item, index)=>{
      if(item.id == id){
        item.active = true
      }
      else{
        item.active = false
      }
      return item
    }
    )
    setItems(arr)
  }
  return (
    <nav className={headerStyle.header} id='header'>
      <div className={headerStyle.header_container}>
        <a href="#" className={headerStyle.header_brand}>
          Author<span></span>
        </a>
        <button className={headerStyle.menu_btn}>Menu</button>
        <div className={headerStyle.header_menu}>
          {
            items.map((item, index)=>(
                <HeaderMenuItem key={index} item={item} style={headerStyle} setActiveItem={setActiveItem} />
              )
            )
          }
        </div>
      </div>
    </nav>
  );
};

export default Header