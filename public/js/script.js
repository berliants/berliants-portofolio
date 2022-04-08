// nav berubah warna
const nav = document.getElementById('nav')
window.addEventListener('scroll', () => {
  if (window.scrollY >= 60) {
    nav.classList.add('nav-color')
  } 
  else if (window.scrollY <= 60) {
    nav.classList.remove('nav-color')
  }
})
//  end nav

window.addEventListener('load', () => {
  // batasan scroll portofolio
  let batas_portofolio = document.getElementById('portofolio').offsetTop
  let batas_about = document.getElementById('about').offsetTop
  let batas_skills = document.getElementById('skills').offsetTop
  let batas_contact = document.getElementById('contact').offsetTop
  

  // navigasi
  Array.from(document.querySelectorAll('.nav a')).map (e => {
    e.addEventListener('click', e => {
      e.preventDefault()
      const target = e.target
      if (target.classList.contains('portofolio')) {
        if(window.innerWidth < 640) {
          window.scrollTo(0, batas_portofolio-60)
        }
        else if (window.innerWidth >= 640 && window.innerWidth < 768) {
          window.scrollTo(0, batas_portofolio-60)
        }
        else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
          window.scrollTo(0, batas_portofolio-80)
        }
        else if (window.innerWidth >= 1024 && window.innerWidth < 1280) {
          window.scrollTo(0, batas_portofolio-85)
        }
        else if (window.innerWidth >= 1280 && window.innerWidth < 1536) {
          window.scrollTo(0, batas_portofolio-100)
        }
        else if (window.innerWidth >= 1536) {
          window.scrollTo(0, batas_portofolio-100)
        }
      } 

      else if (target.classList.contains('about')) {
        if(window.innerWidth < 640) {
          window.scrollTo(0, batas_about-60)
        }
        else if (window.innerWidth >= 640 && window.innerWidth < 768) {
          window.scrollTo(0, batas_about-70)
        }
        else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
          window.scrollTo(0, batas_about-80)
        }
        else if (window.innerWidth >= 1024 && window.innerWidth < 1280) {
          window.scrollTo(0, batas_about-85)
        }
        else if (window.innerWidth >= 1280 && window.innerWidth < 1536) {
          window.scrollTo(0, batas_about-100)
        }
        else if (window.innerWidth >= 1536) {
          window.scrollTo(0, batas_about-100)
        }
      } 

      else if (target.classList.contains('contact')) {
        window.scrollTo(0, batas_contact)
      }
      else if (target.classList.contains('home')) {
        window.scrollTo(0, 5)
      }
    })
  })

  
  let btn_skills = document.getElementById('btn_skills')
  btn_skills.addEventListener('click', e => {
    e.preventDefault()
    if(window.innerWidth < 640) {
      window.scrollTo(0, batas_skills-60)
    }
    else if (window.innerWidth >= 640 && window.innerWidth < 768) {
      window.scrollTo(0, batas_skills-80)
    }
    else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
      window.scrollTo(0, batas_skills-80)
    }
    else if (window.innerWidth >= 1024 && window.innerWidth < 1280) {
      window.scrollTo(0, batas_skills-85)
    }
    else if (window.innerWidth >= 1280 && window.innerWidth < 1536) {
      window.scrollTo(0, batas_skills-100)
    }
    else if (window.innerWidth >= 1536) {
      window.scrollTo(0, batas_skills-100)
    }
  })
})


// nav hamburger
const hamburger = document.querySelector('.hamburger')
const nav_menu = document.querySelector('.nav')
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('hamburger-active')
  nav_menu.classList.toggle('nav-menu')
})
window.addEventListener('scroll', () => {
  let last_scroll = 0
  if (last_scroll == 0) {
    nav_menu.classList.remove('nav-menu')
    hamburger.classList.remove('hamburger-active')
  }
})