const fixedHeader = function () {
  window.addEventListener("scroll", function () {
    if (window.scrollY >= 10) {
      document.getElementById("header").classList.add("fixed");
    } else {
      document.getElementById("header").classList.remove("fixed");
    }
  });
};
const activeMenuHeader = function () {
  const menuItems = document.getElementsByClassName("header-menu-item");
  const checkClassActive = function (element) {
    let classes = element.classList;
    let check = false;
    classes.forEach(function (c) {
      if (c == "active") {
        check = true;
      }
    });
    return check;
  };
  const removeMenuItem = function () {
    for (let i = 0; i < menuItems.length; i++) {
      let element = menuItems[i].children[0];
      if (checkClassActive(element)) {
        element.classList.remove("active");
      }
    }
  };
  const activeMenuItem = function () {
    for (let i = 0; i < menuItems.length; i++) {
      let element = menuItems[i].children[0];
      element.addEventListener("click", function () {
        if (!checkClassActive(element)) {
          removeMenuItem();
          element.classList.add("active");
        }
      });
    }
  };
  activeMenuItem();
};
const activeMenuChapterScroll = function () {
  const sections = document.querySelectorAll(".chapter-page");
  const menu_links = document.querySelectorAll(".chapter-menu ul li a");
  const makeCurrent = (link) => menu_links[link].classList.add("current");
  const removeCurrent = (link) => menu_links[link].classList.remove("current");
  const removeAllCurrent = () => [...Array(sections.length).keys()].forEach((link) => removeCurrent(link));
  let currentActive = 0;
  window.addEventListener("scroll", () => {
    let screenWidth = screen.width
    let sectionMargin = 1500;
    if(screenWidth<=1200 && screenWidth>768){
      sectionMargin = 1500;
    }
    else if(screenWidth<=768){
      sectionMargin = 2300;
    }
    else if(screenWidth<768){
      removeAllCurrent();
    }
    const current = sections.length - [...sections].reverse().findIndex((section) => window.scrollY >= section.offsetTop + sectionMargin) - 1;
    if (current < sections.length && current !== currentActive) {
      removeAllCurrent();
      currentActive = current;
      makeCurrent(current);
    }
  });
};
const activeMenuHeaderScroll = function () {
  const sections = document.querySelectorAll(".section");
  const menu_links = document.querySelectorAll(".header-menu-item-text");
  const makeActive = (link) => menu_links[link].classList.add("active");
  const removeActive = (link) => menu_links[link].classList.remove("active");
  const removeAllActive = () =>
    [...Array(sections.length).keys()].forEach((link) => removeActive(link));
  const sectionMargin = 0;
  let currentActive = 0;
  window.addEventListener("scroll", () => {
    const current =
      sections.length -
      [...sections]
        .reverse()
        .findIndex((section) => window.scrollY >= section.offsetTop - 112) -
      1;
    if (current < sections.length && current !== currentActive) {
      removeAllActive();
      currentActive = current;
      makeActive(current);
    }
  });
};
const handleTestimonials = function () {
  const blocks = document.querySelectorAll(".testimonial-slide-block");
  const nextBtn = document.querySelector('.testimonial-dots .btn-next');
  const preBtn = document.querySelector('.testimonial-dots .btn-pre')
  let slideWidth = blocks[0].offsetWidth + 30;
  let marginSlide = 0;
  if(screen.width<=992 && screen.width>767){
    marginSlide = slideWidth/2
  }
  else{
    marginSlide = 0;
  }
  let indexSlide = 0;
  let widthTransform = slideWidth*(indexSlide+1) + marginSlide;
  let screenWidth = screen.width;  
  let arrayIndex = [];
  [...blocks].forEach((block, index)=>{
    arrayIndex.push(index)
  })
  nextBtn.addEventListener('click', function(){
    console.log(indexSlide, widthTransform);
    
    if(screenWidth != screen.width){
      screenWidth =  screen.width;
      slideWidth = blocks[0].offsetWidth + 30;
      if(screen.width<=992 && screen.width>767){
        marginSlide = slideWidth/2
      }
      else{
        marginSlide = 0;
      }
      widthTransform = slideWidth + marginSlide;
      indexSlide = 0;
    };
    [...blocks].forEach((block) => {
      block.style.transition = `transform .25s linear`
      block.style.transform = `translateX(-${widthTransform}px)`;
    })
    if(indexSlide>=1){
      // xử lý khi slide không bấm từng slide
      let vt = arrayIndex.indexOf(indexSlide);
      if(vt>1){
        for(i = 1; i<vt; i++){
          blocks[i-1].style.left = `${slideWidth*blocks.length}px`;
          arrayIndex.push(arrayIndex.shift())
        }
      }
      else{
        // slide chuyển từng
        blocks[indexSlide-1].style.left = `${slideWidth*blocks.length}px`;
        arrayIndex.push(arrayIndex.shift())
      }
    }
    if(indexSlide == blocks.length){
      // trả về trạng thái ban đầu của cả testimonial
      [...blocks].forEach((block) => {
        block.removeAttribute('style')
      })
      indexSlide=0;
      widthTransform = slideWidth*(indexSlide+1) + marginSlide;
    }
    else{
      indexSlide++;
      widthTransform = slideWidth*(indexSlide+1) + marginSlide;
      console.log(indexSlide,widthTransform);
    }
  });
  preBtn.addEventListener('click', function(){
    indexSlide--;
    widthTransform = widthTransform - slideWidth-slideWidth;
    console.log(indexSlide,widthTransform);
    [...blocks].forEach((block) => {
      block.style.transition = `transform .25s linear`
      block.style.transform = `translateX(-${widthTransform}px)`;
    })
    indexSlide++;
    widthTransform = slideWidth*(indexSlide) + marginSlide;
    console.log(indexSlide,widthTransform);

  })
  
};
const clickMenuButton = function () {
  let btn = document.querySelector(".menu-btn");
  let menu = document.querySelector(".header-menu");
  let click = false;
  btn.addEventListener("click", function () {
    if (menu.style.maxHeight) {
      menu.style.maxHeight = null;
    } else {
      menu.style.maxHeight = menu.scrollHeight + "px";
    }
  });
};
const fixOverflowClip = function (){
  let screenWidth = screen.width;
  let isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
  if(screenWidth<=828 && Boolean(isSafari)){
    document.querySelector('html').style.overflowX='hidden'
    document.querySelector('body').style.overflowX='hidden'
  }
}
document.addEventListener(
  "DOMContentLoaded",
  function () {
    fixOverflowClip()
    fixedHeader();
    activeMenuHeader();
    activeMenuChapterScroll();
    activeMenuHeaderScroll();
    handleTestimonials();
    clickMenuButton();
  },
  false
);
