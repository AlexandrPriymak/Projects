//Delete additional classes in 'Menu Open' and 'Menu Accordion'  if window resized
window.addEventListener('resize', resizeFunction);
function resizeFunction () {
 if (window.innerWidth > 1000)
  {
    for (let i = 0; i<document.querySelectorAll('.toggleMe').length; i++)
     {
      if (parseInt(document.querySelectorAll('.toggleMe')[i].style.height) >= 0)
       {
        document.querySelectorAll('.toggleMe')[i].style.height = 'auto';
       }      
     }
  }

 if (window.innerWidth > 600)
  {
   if (document.querySelector('header').classList.contains('header__menu')) {
    document.querySelector('header').classList.remove('header__menu');
   }

   if (document.querySelector('.logo').classList.contains('logo__menu')) {
    document.querySelector('.logo').classList.remove('logo__menu');
   }

   if (document.querySelector('nav').classList.contains('nav__menu-open')) {
    document.querySelector('nav').classList.remove('nav__menu-open');
   }

   if (document.querySelector('.burger').classList.contains('burger__open')) {
    document.querySelector('.burger').classList.remove('burger__open');
   }

   if (document.querySelector('.burger__menu').classList.contains('burger__close')) {
    if (!document.querySelector('nav').classList.contains('nav__menu')) {
    document.querySelector('.burger__menu').classList.remove('burger__close');
    }
   }
  }
  

 if (window.innerWidth <= 600 || window.innerWidth > 1000)
  {
   if (document.querySelector('nav').classList.contains('nav__menu')) {
    document.querySelector('nav').classList.remove('nav__menu');
   }
   if(document.querySelector('.burger__menu').classList.contains('burger__close')) {
    if (!document.querySelector('header').classList.contains('header__menu')) {
     document.querySelector('.burger__menu').classList.remove('burger__close');
    }
   }

   if(document.querySelector('nav').classList.contains('nav__open')) {
    document.querySelector('nav').classList.remove('nav__open');
   }

   for(let i = 0; i < document.querySelectorAll('.menu__arrow').length; i++) {
    if(document.querySelectorAll('.menu__arrow')[i].classList.contains('arrow__open')) {
      document.querySelectorAll('.menu__arrow')[i].classList.remove('arrow__open');
    }
    if(document.querySelectorAll('.toggleMe')[i].classList.contains('active')) {
      document.querySelectorAll('.toggleMe')[i].classList.remove('active');
    }
   } 
  }
}

// Menu Open
const navigation = document.querySelector('nav');
const button = document.querySelector('.burger');
const close = document.querySelector('.burger__menu')

const header = document.querySelector('header');
const logo = document.querySelector('.logo');
const open = document.querySelector('.burger');

const arrow = document.querySelector('.menu__arrow');
const menuitem = document.querySelector('.menu__item-sublist');

const navitems = document.querySelectorAll('.menu__item a');

const aside = document.querySelectorAll('.burger__cvr');

button.addEventListener('click', closeBurger);
window.addEventListener('scroll', scrollBurger);

document.querySelector('body').addEventListener('click', (event) => {
    if(close.classList.contains('burger__close')) {
      if(event.target.tagName === "HEADER" || event.target.className === "logo") {
        scrollBurger();
      }
      document.querySelector('main').addEventListener('click', scrollBurger);
      document.querySelector('footer').addEventListener('click', scrollBurger);
      }
  });

for(let i = 0; i < navitems.length; i++) {
  if(navitems[i].innerHTML === "Services" || navitems[i].innerHTML === "Continents") {
    break;
  } else {
    navitems[i].addEventListener('click',scrollBurger);
  }
}

function closeBurger () {
if (window.matchMedia("(max-width: 1000px)").matches) {
if (!navigation.classList.contains('nav__menu')) {
 navigation.classList.toggle('nav__menu');
} else {
 navigation.classList.toggle('nav__menu');
}

if (!close.classList.contains('burger__close')) {
 close.classList.toggle('burger__close');
} else {
 close.classList.toggle('burger__close');
}

if (navigation.classList.contains('nav__open')) {
 navigation.classList.remove('nav__open');
}

if (arrow.classList.contains('arrow__open')) {
 arrow.classList.remove('arrow__open');
}

if (menuitem.classList.contains('active')) {
 menuitem.classList.remove('active');
}
}

if (window.matchMedia("(max-width: 600px)").matches) {

if (!logo.classList.contains('logo__menu')) {
 logo.classList.toggle('logo__menu');
} else {
 logo.classList.toggle('logo__menu');
}

if (!header.classList.contains('header__menu')) {
 header.classList.toggle('header__menu');
} else {
 header.classList.toggle('header__menu');
}

if (!navigation.classList.contains('nav__menu-open')) {
 navigation.classList.toggle('nav__menu-open');
} else {
 navigation.classList.toggle('nav__menu-open');
}

if (!open.classList.contains('burger__open')) {
 open.classList.toggle('burger__open');
} else {
 open.classList.toggle('burger__open');
}
}
};

function scrollBurger () {
if (window.matchMedia("(max-width: 1000px)").matches) {
if (navigation.classList.contains('nav__menu')) {
 navigation.classList.remove('nav__menu');
}

if (close.classList.contains('burger__close')) {
 close.classList.remove('burger__close');
}

if (navigation.classList.contains('nav__open')) {
 navigation.classList.remove('nav__open');
}

if (arrow.classList.contains('arrow__open')) {
 navigation.classList.remove('arrow__open');
}

if (menuitem.classList.contains('active')) {
 navigation.classList.remove('active');
}
}

if (window.matchMedia("(max-width: 600px)").matches) {

if (logo.classList.contains('logo__menu')) {
 logo.classList.remove('logo__menu');
}

if (header.classList.contains('header__menu')) {
 header.classList.remove('header__menu');
} 

if (navigation.classList.contains('nav__menu-open')) {
 navigation.classList.remove('nav__menu-open');
} 

if (open.classList.contains('burger__open')) {
 open.classList.remove('burger__open');
}
}
}

//Header Scroll
window.addEventListener('scroll', () => {
  console.log(window.scrollY);
  if(window.scrollY > 0) {
    document.querySelector('header').classList.add('header__scroll');
    document.querySelector('.burger').classList.add('burger__scroll');
  } else {
    document.querySelector('header').classList.remove('header__scroll');
    document.querySelector('.burger').classList.remove('burger__scroll');
  }
});

// Menu Accordion
const container = document.querySelectorAll('.toggleMe');
const elements = document.querySelectorAll('.toggle');
const arrows = document.querySelectorAll('.menu__arrow')
const nav = document.querySelector('nav');

   for (let i = 0; i<container.length; i++) {
  elements[i].addEventListener('click', function (event) {
    if (window.matchMedia("(max-width: 1000px)").matches) {
    event.preventDefault();

    if (!arrows[i].classList.contains('arrow__open')) {
     arrows[i].classList.toggle('arrow__open');
    } else {
     arrows[i].classList.toggle('arrow__open');
    }

    if (!container[i].classList.contains('active')) {
      if (!nav.classList.contains('nav__open')) {
          nav.classList.add('nav__open');
      }
      container[i].classList.add('active');
      container[i].style.height = 'auto';

      var height = container[i].clientHeight + 'px';

      container[i].style.height = '0px';

      setTimeout(function () {
        container[i].style.height = height;
      }, 0);
    } else {
      container[i].style.height = '0px';

      container[i].addEventListener('transitionend', function () {
        container[i].classList.remove('active');
        if (!document.querySelectorAll('.toggleMe')[0].classList.contains('active') && 
           !document.querySelectorAll('.toggleMe')[1].classList.contains('active')) {
          nav.classList.remove('nav__open');
          }
      }, {
        once: true
      });
    } 
   }});
  }

  // Numbers Counter
  
  let valueDisplays = document.querySelectorAll('.herolist__num');
  let herolistItem = document.querySelectorAll('.herolist__item')
  let interval = 1000;

  if (window.innerWidth > 1000) {
    
    herolistItem.forEach((herolistItem) => {
      if (herolistItem.classList.contains('_anim-items')) {
        herolistItem.classList.remove('_anim-items');
      }
    });

  valueDisplays.forEach((valueDisplay,index) => {
    let startValue = 0;
    let endValue= parseInt(valueDisplay.getAttribute('data-val'));
    let duration = Math.floor(interval / endValue);
    setTimeout( () => {
      let counter = setInterval(function () {
      if (index == 0) {
       startValue += 100;
      }
      
      if (index == 1) {
       startValue += 200;
      }

      if (index == 2) {
       startValue += 5000;
      }
      valueDisplay.textContent = startValue;
      if(startValue == endValue) {
        clearInterval(counter);
        if (index == 0) {
         valueDisplay.textContent = '23,973';
        }

        if (index == 1) {
         valueDisplay.textContent = '82,000';
        }

        if (index == 2) {
         valueDisplay.textContent = '4,000,000';
        }
      }
    }, duration);
    }, 1000);
  });
  } else {
    if (window.innerWidth <= 1000) {
      valueDisplays.forEach((valueDisplay,index) => {
      if (index == 0) {
         valueDisplay.textContent = '23,973';
        }

        if (index == 1) {
         valueDisplay.textContent = '82,000';
        }

        if (index == 2) {
         valueDisplay.textContent = '4,000,000';
        }
    });
    herolistItem.forEach((herolistItem) => {
      herolistItem.classList.add('_anim-items');
    });
    }
  }

   
  window.addEventListener('resize', () => {
      herolistItem.forEach((herolistItem) => {
        if (window.innerWidth > 1000) {
      herolistItem.classList.contains('_anim-items');
      herolistItem.classList.contains('_active');
      herolistItem.classList.remove('_anim-items');
      herolistItem.classList.remove('_active');
        } else {
          herolistItem.classList.add('_anim-items');
        }
      });
  });

  // Animation on Scroll

  let animItems = document.querySelectorAll('._anim-items');

   window.addEventListener('resize', () => {
    animItems = document.querySelectorAll('._anim-items');
   });

  addEventListener('scroll', () => {
    if (animItems.length > 0) {
      function animOnScroll(params) {
        for (let index = 0; index < animItems.length; index++) {
          const animItem = animItems[index];
          const animItemHeight = animItem.offsetHeight;
          const animItemOffset = offset(animItem).top;
          const animStart = 4;

          let animItemPoint = window.innerHeight - animItemHeight / animStart;
          if(animItemHeight > window.innerHeight) {
            animItemPoint = window.innerHeight - window.innerHeight / animStart;
          }
        
          if((scrollY > animItemOffset - animItemPoint) && scrollY< (animItemOffset + animItemHeight)) {
            animItem.classList.add('_active');}
          // } else {
          //   animItem.classList.remove('_active');
          // }
        }
      }
      function offset(el) {
        const rect = el.getBoundingClientRect(),
        scrollLeft = window.scrollX || document.documentElement.scrollLeft,
        scrollTop = window.scrollY || document.documentElement.scrollTop;
        return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
      }
      setTimeout( () => {
        animOnScroll();
      }, 300)
    }
  });
  
  // Photo Gallery Slider(Carousel)

  const slider = document.querySelector(".photogallery__slider");
  const firstCardWidth = slider.querySelector(".photogallery__slides").offsetWidth;
  const sliderChildrens = [...slider.children];

  let isDragging = false, startX, startScrollLeft, timeoutId;

  let cardPerView = Math.round(slider.offsetWidth / firstCardWidth);
 
  sliderChildrens.slice(-cardPerView).reverse().forEach(card => {
    slider.insertAdjacentHTML("afterbegin", card.outerHTML);
  });

  sliderChildrens.slice(0, cardPerView).forEach(card => {
    slider.insertAdjacentHTML("beforeend", card.outerHTML);
  });

  const dragStart = (e) => {
    isDragging = true;
    slider.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = slider.scrollLeft;
  }

  const dragging = (e) => {
    if (!isDragging) return;
    slider.scrollLeft = startScrollLeft - (e.pageX - startX);
  }

  const dragStop = () => {
    isDragging = false;
    slider.classList.remove("dragging");
  }


  const autoPlay = () => {
    if(window.innerWidth < 800) return; 
    timeoutId = setTimeout(() => slider.scrollLeft += firstCardWidth, 2500);
  }
  
  autoPlay();

  const infiniteScroll = () => {
    if(slider.scrollLeft === 0) {
      setTimeout( () => {
        slider.classList.add("no-transition");
        slider.scrollLeft = slider.scrollWidth - ( 2 * slider.offsetWidth);
        slider.classList.remove("no-transition");
      }, 1000);
      
    } 
    else if((Math.ceil(slider.scrollLeft)) === slider.scrollWidth - slider.offsetWidth) {
      setTimeout( () => {
        slider.classList.add("no-transition");
        slider.scrollLeft = slider.offsetWidth;
        slider.classList.remove("no-transition");
      }, 1000);
      
    }

    clearTimeout(timeoutId);
    if(!slider.matches(":hover")) autoPlay();
  }

  slider.addEventListener("mousemove", dragging);
  slider.addEventListener("mousedown", dragStart);
  document.addEventListener("mouseup", dragStop);
  slider.addEventListener("scroll", infiniteScroll);
  slider.addEventListener("mouseover", () => clearTimeout(timeoutId));
  slider.addEventListener("mouseout", autoPlay);

   // Testimonials Slider(Carousel)
  
  const carousel = document.querySelector('.testimonials__container');
  const arrowBtns = document.querySelectorAll('.testimonials span');
  const firstItemWidth = carousel.querySelector('.container__card').offsetWidth;
  const carouselChildrenss = [...carousel.children];

  let isDrag = false, startingX, startScrollingLeft;

  let cardView = Math.round(carousel.offsetWidth / firstItemWidth);

  carouselChildrenss.slice(-cardView).reverse().forEach(card => {
    carousel.insertAdjacentHTML('afterbegin', card.outerHTML);
  });

  carouselChildrenss.slice(0, cardView).forEach(card => {
    carousel.insertAdjacentHTML('beforeend', card.outerHTML);
  });

  arrowBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      carousel.scrollLeft += btn.id === "left" ? -firstItemWidth : firstCardWidth
    });
  });

  const draggingStart = (e) => {
    isDrag = true;
    carousel.classList.add('drag');
    startingX = e.pageX;
    startScrollingLeft = carousel.scrollLeft;
  }

  const drag = (e) => {
    if(!isDrag) return;
    carousel.scrollLeft = startScrollingLeft - (e.pageX - startingX);
  }

  const draggingStop = () => {
    isDrag = false;
    carousel.classList.remove('drag');
  }

  const infiniteScrolling = () => {
    if(carousel.scrollLeft === 0) {
      carousel.classList.add('no-transit');
      carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
      carousel.classList.remove('no-transit');
    } else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
      carousel.classList.add('no-transit');
      carousel.scrollLeft = carousel.offsetWidth;
      carousel.classList.remove('no-transit');
    }
  }

  carousel.addEventListener('mousedown', draggingStart);
  carousel.addEventListener('mousemove', drag);
  document.addEventListener('mouseup', draggingStop);
  carousel.addEventListener('scroll', infiniteScrolling);