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
  const removeAllCurrent = () =>
    [...Array(sections.length).keys()].forEach((link) => removeCurrent(link));
  const sectionMargin = 1500;
  let currentActive = 0;
  window.addEventListener("scroll", () => {
    const current =
      sections.length -
      [...sections]
        .reverse()
        .findIndex(
          (section) => window.scrollY >= section.offsetTop + sectionMargin
        ) -
      1;
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
const activeSlideTestimonial = function () {
  const blocks = document.querySelectorAll(".testimonial-slide-block");
  let transition = ` `;
  [...blocks].forEach((block) => {
    block.setAttribute("style", transition);
  });
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
document.addEventListener(
  "DOMContentLoaded",
  function () {
    fixedHeader();
    activeMenuHeader();
    activeMenuChapterScroll();
    activeMenuHeaderScroll();
    setInterval(activeSlideTestimonial(), 0);
    clickMenuButton();
  },
  false
);
