import React from "react";

const HeaderMenuItem = (props) => {
    const {item, style, setActiveItem} = props
    return (
        <>
        <span className={style.header_menu_item} onClick={()=>setActiveItem(item.id)}>
            <a href={item.sectionID} className={`${style.header_menu_item_text} ${item.active?style.active:''}`}>
            {item.name}
            </a>
        </span>
        </>
    );
};

export default HeaderMenuItem;
