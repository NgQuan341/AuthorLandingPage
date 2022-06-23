import React from "react";
import headerStyle from './header.module.css';
const Header = () => {
  return (
    <nav className={headerStyle.header} id='header'>
      <div className={headerStyle.header_container}>
        <a href="#" className={headerStyle.header_brand}>
          Author<span></span>
        </a>
        <button className={headerStyle.menu_btn}>Menu</button>
        <div className={headerStyle.header_menu}>
          <span className={headerStyle.header_menu_item}>
            <a href="#" className={`${headerStyle.header_menu_item_text} ${headerStyle.active}`}>
              Home
            </a>
          </span>
          <span className={headerStyle.header_menu_item}>
            <a href="#about" className={headerStyle.header_menu_item_text}>
              About
            </a>
          </span>
          <span className={headerStyle.header_menu_item}>
            <a href="#chapter" className={headerStyle.header_menu_item_text}>
              Chapter
            </a>
          </span>
          <span className={headerStyle.header_menu_item}>
            <a href="#reviews" className={headerStyle.header_menu_item_text}>
              Reviews
            </a>
          </span>
          <span className={headerStyle.header_menu_item}>
            <a href="#book" className={headerStyle.header_menu_item_text}>
              My Books
            </a>
          </span>
          <span className={headerStyle.header_menu_item}>
            <a href="#author" className={headerStyle.header_menu_item_text}>
              Author
            </a>
          </span>
          <span className={headerStyle.header_menu_item}>
            <a href="#contact" className={headerStyle.header_menu_item_text}>
              Contact
            </a>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Header