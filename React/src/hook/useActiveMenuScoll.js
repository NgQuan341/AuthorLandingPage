import React from 'react'

const useActiveMenuScoll = (style, type) => {
    let selectorSection = ``;
    let selectorLinks = ``;
    let classActive = `${style.active}`;
    // kiểm tra hàm được gọi ở component nào
    if(type == `header`){
        selectorSection = `.section`;
        selectorLinks = `.${style.header_menu_item_text}`;
    }
    else{
        selectorSection = `.${style.chapter_page}`;
        selectorLinks = `.${style.chapter_menu} ul li a`;
    }
    // query các class
    const sections = document.querySelectorAll(selectorSection);
    const menu_links = document.querySelectorAll(selectorLinks);
    const makeActive = (link) => menu_links[link].classList.add(classActive);
    const removeActive = (link) => menu_links[link].classList.remove(classActive);
    const removeAllActive = () =>[...Array(sections.length).keys()].forEach((link) => removeActive(link));
    let currentActive = 0;
    // add event scroll
    window.addEventListener("scroll", () => {
        let screenWidth = screen.width;
        let sectionMargin = 1500;
        if (screenWidth <= 1200 && screenWidth > 768) {
            sectionMargin = 1500;
        } 
        else if (screenWidth <= 768) {
            sectionMargin = 2300;
        } 
        else if (screenWidth < 768) {
            removeAllActive();
        }
        if(type == `header`){
            sectionMargin = Number(-112)
        }
        const current = sections.length - [...sections].reverse().findIndex((section) => window.scrollY >= section.offsetTop + sectionMargin) - 1;
        if (current < sections.length && current !== currentActive) {
        removeAllActive();
        currentActive = current;
        makeActive(current);
        }
    });
}

export default useActiveMenuScoll