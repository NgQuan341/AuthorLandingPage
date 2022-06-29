import React, { useEffect } from "react";
import { useState } from "react";
import style from './header.module.css';
import HeaderMenuItem from "./HeaderMenuItem";
import useActiveMenuScoll from '../../hook/useActiveMenuScoll'

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
  const showMenu = () =>{
    const menu = document.querySelector(`.${style.header_menu}`);
    if (menu.style.maxHeight) {
      menu.style.maxHeight = null;
    } else {
      menu.style.maxHeight = menu.scrollHeight + "px";
    }
  }
  const fixedHeader = () =>{
    window.addEventListener("scroll", function () {
      if (window.scrollY >= 10) {
        document.getElementById("header").classList.add(`${style.fixed}`);
      } else {
        document.getElementById("header").classList.remove(`${style.fixed}`);
      }
    });
  }
  const handleMenuScroll = () =>{
    useActiveMenuScoll(style, `header`)
  }
  useEffect(()=>{
    fixedHeader();
    handleMenuScroll()
  },[])
  return (
    <nav className={style.header} id='header'>
      <div className={style.header_container}>
        <a href="#" className={style.header_brand}>
          Author<span></span>
        </a>
        <button className={style.menu_btn} onClick={()=>{showMenu()}}>Menu</button>
        <div className={style.header_menu}>
          {
            items.map((item, index)=>(
                <HeaderMenuItem key={index} item={item} style={style} setActiveItem={setActiveItem}/>
              )
            )
          }
        </div>
      </div>
    </nav>
  );
};

export default Header