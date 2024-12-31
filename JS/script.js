// Nav close open
// Nav Open close
const body = document.querySelector("body")
const navMenu = body.querySelector(".menu-content")
const navOpenBtn = body.querySelector(".navOpen-btn")
const navCloseBtn = navMenu.querySelector(".navClose-btn")

if (navMenu && navOpenBtn) {
    navOpenBtn.addEventListener("click", function(){
        navMenu.classList.add("open")
        body.style.overflowY = "hidden"
    })
}

if (navMenu && navCloseBtn) {
    navCloseBtn.addEventListener("click", function(){
        navMenu.classList.remove("open")
        body.style.overflowY = "scroll"
    })
}


// Swiper JS Slider
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  // spaceBetween: 30,
  loop: true,
  direction:'horizontal',
  observer: true,
  observeParents: true,
  parallax:true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

// Change the header background-color
window.addEventListener("scroll", function(){
  const scrollY = window.pageYOffset;

  if (scrollY > 5) {
    document.querySelector("header").classList.add("header-active")
  } else {
    document.querySelector("header").classList.remove("header-active")
  }

  // Scroll up button
  const scrollUpBtn = document.querySelector(".scrollUp-btn")

  if (scrollY > 250) {
    scrollUpBtn.classList.add("scrollUpBtn-active")
  } else {
  scrollUpBtn.classList.remove("scrollUpBtn-active")

  // Navlink-indicator
  const sections = document.querySelectorAll("section[id]")

  sections.forEach(function(section){
    const sectionHeight = section.offsetHeight
    const sectionTop = section.offsetTop - 60

    let navId = document.querySelector(`.menu-content a[href*= ${section.id}]`)
    console.log(navId)
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navId.classList.add("active-navlink")
    } else {
      navId.classList.remove("active-navlink")
    }

    navId.addEventListener("click", function(){
      navMenu.classList.remove("open")
      body.style.overflowY =  "scroll"
    })

  })

}})

  // Scroll-reveal Animation
document.addEventListener("DOMContentLoaded", function(){
  const sr =  ScrollReveal ({
  origin: "top",
  distance: "60px",
  duration: 1700,
  delay: 400,
  easing: 'cubic-bezier(0.5, 0, 0, 1)',
  })

  sr.reveal(`.section-subtitle, .section-title, .section-description, .brand-image, .testimonial, newsletter, .logo-content, .newsletter-inputBox, .newsletter-mediaIcon, .footer-content, .footer-links, .home-text, .button`, {interval:100})

  sr.reveal(`.about-imageContent, .menu-items`, {origin: "left"})
  sr.reveal(`.about-details, .time-table`, {origin: 'right'})
})

