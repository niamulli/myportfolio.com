/* ----- NAVIGATION BAR FUNCTION ----- */
let menuBtn = document.getElementById("myNavMenu");
let navList = document.getElementsByClassName("nav_list");
console.log(navList);
function myMenuFunction(){
    
    if(menuBtn.className === "nav-menu"){
      menuBtn.className += " responsive";
    } else {
      menuBtn.className = "nav-menu";
    }
  }

  const closeMenu = () => {
    menuBtn.className = "nav-menu";
  }

  for (let i = 0; i < navList.length; i++) {
    const element = navList[i];
    element.addEventListener("click", closeMenu);
  }
  
  const experiencesSelect = document.querySelector(".experiences-select");
const selectBtn = document.querySelector(".select-button");

const selectedValue = document.querySelector(".selected-value");
const optionsList = document.querySelectorAll(".select-dropdown li");

// add click event to select button
selectBtn.addEventListener("click", () => {
  // add/remove active class on the container element
  experiencesSelect.classList.toggle("active");
  // update the aria-expanded attribute based on the current state
  selectBtn.setAttribute(
    "aria-expanded",
    selectBtn.getAttribute("aria-expanded") === "true" ? "false" : "true"
  );
});

optionsList.forEach((option) => {

  function handler(e) {
    // Click Events
    if (e.type === "click" && e.clientX !== 0 && e.clientY !== 0) {
      selectedValue.textContent = this.children[1].textContent;
      experiencesSelect.classList.remove("active");
    }
    // Key Events
    if (e.key === "Enter") {
      selectedValue.textContent = this.textContent;
      experiencesSelect.classList.remove("active");
    }
  }

  option.addEventListener("keyup", handler);
  option.addEventListener("click", handler);
});
  /* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
  window.onscroll = function() {headerShadow()};
  
  function headerShadow() {
    const navHeader =document.getElementById("header");
  
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {
  
      navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
      navHeader.style.height = "70px";
      navHeader.style.lineHeight = "70px";
  
    } else {
  
      navHeader.style.boxShadow = "none";
      navHeader.style.height = "90px";
      navHeader.style.lineHeight = "90px";
  
    }
  }
  
  /* ----- TYPING EFFECT ----- */
//   let typingEffect = new Typed(".typedText",{
//     strings : ["Designer","Youtuber","Developer"],
//     loop : true,
//     typeSpeed : 100,
//     backSpeed : 80,
//     backDelay : 2000
//   })
  
  /* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
  const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: true
  })
  
  /* -- HOME -- */
  sr.reveal('.featured-text-card',{})
  sr.reveal('.featured-name',{delay: 100})
  sr.reveal('.featured-text-info',{delay: 200})
  sr.reveal('.featured-text-btn',{delay: 200})
  sr.reveal('.social_icons',{delay: 200})
  sr.reveal('.featured-image',{delay: 300})
  
  /* -- PROJECT BOX -- */
  sr.reveal('.project-box',{interval: 150})
  
  /* -- HEADINGS -- */
  sr.reveal('.top-header',{})
  
  /* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */
  
  /* -- ABOUT INFO & CONTACT INFO -- */
  const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true
  })
  
  // srLeft.reveal('.about-info.left',{delay: 100})
  srLeft.reveal('.contact-info',{delay: 100})
  // srLeft.reveal('.description-text.left',{delay: 100})
  
  // /* -- ABOUT SKILLS & FORM BOX -- */
  const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  reset: true
  })
  
  // srRight.reveal('.skills-box',{delay: 100})
  // srRight.reveal('.about-info.right',{delay: 100})
  srRight.reveal('.form-control',{delay: 100})
  // srRight.reveal('.description-text.right',{delay: 100})
  
  /* ----- CHANGE ACTIVE LINK ----- */
  
  const sections = document.querySelectorAll('section[id]')
  function scrollActive() {
    const scrollY = window.scrollY;
    
    sections.forEach(current =>{
      const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute('id')
    
      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
    
          document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
    
      }  else {
    
          document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
    
      }
    })
  }
  
  window.addEventListener('scroll', scrollActive);


/* ---- OPEN TAB CONTENT --- */
const tabLinks = document.getElementsByClassName('tab-links');
const tabContents = document.getElementsByClassName('tab-contents');

console.log(tabContents);

const openTab = (tabName) => {
  for(tabLink of tabLinks){
    tabLink.classList.remove('active-tab-link');
  }
  for(tabContent of tabContents){
    tabContent.classList.remove('active-tab');
  }
  event.currentTarget.classList.add('active-tab-link');
  document.getElementById(tabName).classList.add('active-tab');
}

