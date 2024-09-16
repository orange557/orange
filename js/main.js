

// ============繝｡繧､繝ｳ繝ｴ繧｣繧ｸ繝･繧｢繝ｫ縺ｮ鬮倥＆險ｭ螳�===============

const setFillHeight = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

let vw = window.innerWidth;

window.addEventListener('resize', () => {
if (vw === window.innerWidth) {
  return;
}

vw = window.innerWidth;
setFillHeight();
});

setFillHeight();


// ============繝｡繧､繝ｳ繝ｴ繧｣繧ｸ繝･繧｢繝ｫ縺ｮ邵ｦ讓ｪ豈�===============



//const setFillHW = () => {
//  let wvh = window.innerHeight;
//  let wvw = window.innerWidth;
//  let whRatio = wvw / wvh;

//  console.log(whRatio);

//document.documentElement.style.setProperty('--vh', `${vh}px`);
//}

//setFillHW();

//繝�繝ｼ繝薙�蜈ｨ逕ｻ髱｢繧ｹ繧ｯ繝ｪ繝励ヨ��PC逕ｨ��
//(1)蜍慕判縺ｮ逕ｻ隗呈ｯ皮紫繧定ｨｭ螳壹＠縺ｾ縺吶�4:3縺ｮ蝣ｴ蜷医�縺薙％繧偵�4/3縲阪↓螟画峩
var movieRatio = 16/9;  
//(2)逕ｻ蜒上�繝ｪ繧ｵ繧､繧ｺ髢｢謨ｰ縲稽ovieAdjust()縲阪ｒ菴懈�
function movieAdjust(){
      var adjustWidth = $(window).width();
      var adjustHeight = $(window).height();
      if (adjustHeight > adjustWidth / movieRatio) {
              adjustWidth = adjustHeight * movieRatio;
      }
      $('.brand-mv iframe').css({width:(adjustWidth),height:(adjustWidth/movieRatio)});
}
//(3)逕ｻ髱｢繝ｪ繧ｵ繧､繧ｺ譎ゅ→逕ｻ髱｢繝ｭ繝ｼ繝画凾縺ｫ髢｢謨ｰmovieAdjust()繧貞ｮ溯｡�
$(window).on('load resize', function(){
  movieAdjust();
});



// ============ modal navi ===============

// modal navi open
$(function(){
$('.modal-trigger').click(function(){
  $('.modal-trigger, .modal-navi').toggleClass('active');
  $("body").toggleClass("active");
});
});

// modal navi close 
$(function(){
$('.modal-trigger-off').click(function(){
  $('.modal-trigger, .modal-navi').toggleClass('active');
  $("body").toggleClass("active");
});
});

// modal navi close �医�繝ｼ繧ｸ蜀�Μ繝ｳ繧ｯ繧ｯ繝ｪ繝�け譎ゑｼ�
$(function(){
$('.modal-item__oem li').click(function(){
  $('.modal-trigger, .modal-navi').toggleClass('active');
  $("body").toggleClass("active");
});
});


// ============ header繝翫ン 鬮倥＆螟画峩 ===============

$(function() {
$(window).on('load scroll', function() {
  const vh = window.innerHeight;
  var scrollPos = $(this).scrollTop();
  if ( scrollPos > vh ) {
    $('.header__wrap').addClass('is-scroll');
    $('.modal-trigger-off').addClass('is-scroll');
  } else {
    $('.header__wrap').removeClass('is-scroll');
    $('.modal-trigger-off').removeClass('is-scroll');
  }
});
});	




// ===========================
//         oem page
// ===========================


// ============ OEM flow-modal ===============

window.addEventListener("DOMContentLoaded", () => {
// 繝｢繝ｼ繝繝ｫ繧貞叙蠕�
const flowModal = document.getElementById("flow-modal");

// 繝｢繝ｼ繝繝ｫ繧帝幕縺�
const openflowModalBtns = document.querySelectorAll(".flow-modalOpen");
// 繝｢繝ｼ繝繝ｫ繧帝哩縺倥ｋ
const closeflowModalBtns = document.querySelectorAll(".flow-modalClose");

// Swiper縺ｮ險ｭ螳�
const swiper = new Swiper(".flow-modal-swiper", {
  effect: 'fade',
  navigation: {
    nextEl: ".flow-modal-button-next",
    prevEl: ".flow-modal-button-prev",
  },
  spaceBetween: 30, //莉ｻ諢上�繝槭�繧ｸ繝ｳ
});

// 繝｢繝ｼ繝繝ｫ縺ｮ繝懊ち繝ｳ繧ｯ繝ｪ繝�け
openflowModalBtns.forEach((openModalBtn) => {
  openModalBtn.addEventListener("click", () => {
    // data-modal縺ｧ險ｭ螳壹＠縺溘せ繝ｩ繧､繝臥分蜿ｷ繧貞叙蠕�
    const modalIndex = openModalBtn.getAttribute('data-modal');
    swiper.slideTo(modalIndex);
    flowModal.classList.add("is-active");
  });
});

// 繝｢繝ｼ繝繝ｫ縺ｮ髢峨§繧九�繧ｿ繝ｳ繧ｯ繝ｪ繝�け
closeflowModalBtns.forEach((closeModalBtn) => {
  closeModalBtn.addEventListener("click", () => {
    flowModal.classList.remove("is-active");
  });
});
});


// ============ oem-content-list swiper===============


window.addEventListener("DOMContentLoaded", () => {
const oemContentList = new Swiper(".oem-content-list", {
  navigation: {
  nextEl: ".oem-content-list-next",
  prevEl: ".oem-content-list-prev",
  },
  slidesPerView:1,
  roundLengths:true,
  spaceBetween:50,
  breakpoints: {
    390: {
      slidesPerView: 1.5,
    },
    768: {
      slidesPerView: 3.5,
    }
  }
});
});

// ============ lineup-cosme swiper===============

window.addEventListener("DOMContentLoaded", () => {
const cosmeSwiper = new Swiper(".lineup-cosme", {
  navigation: {
    nextEl: ".lineup-cosme-next",
    prevEl: ".lineup-cosme-prev",
  },
  slidesPerView:2.5,
  roundLengths:true,
  spaceBetween:30,
  breakpoints: {
    390: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 6.5,
    }
  }
});
});

// ============ lineup-goods swiper===============

window.addEventListener("DOMContentLoaded", () => {
const goodsSwiper = new Swiper(".lineup-goods", {
  navigation: {
    nextEl: ".lineup-goods-next",
    prevEl: ".lineup-goods-prev",
  },
  slidesPerView:1.1,
  roundLengths:true,
  spaceBetween:30,
  breakpoints: {
    390: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 6.5,
    }
  }
});
});


// ============ FAQ 繧ｿ繝門�繧頑崛縺�===============


document.addEventListener('DOMContentLoaded', function(){
const faqDivision = document.getElementsByClassName('faq__division__select');
for(let i = 0; i < faqDivision.length; i++) {
  faqDivision[i].addEventListener('click', tabSwitch, false);
}

// 繧ｿ繝悶ｒ繧ｯ繝ｪ繝�け縺吶ｋ縺ｨ螳溯｡後☆繧矩未謨ｰ
function tabSwitch(){

  // 繧ｿ繝悶�class縺ｮ蛟､繧貞､画峩
  document.getElementsByClassName('is-active')[0].classList.remove('is-active');
  this.classList.add('is-active');

  // 繧ｳ繝ｳ繝�Φ繝��class縺ｮ蛟､繧貞､画峩
  document.getElementsByClassName('is-show')[0].classList.remove('is-show');
  const arrayfaqDivision = Array.prototype.slice.call(faqDivision);
  const index = arrayfaqDivision.indexOf(this);
  document.getElementsByClassName('faq__divisionArea')[index].classList.add('is-show');
};
}, false);


// ===========================
//         about page
// ===========================


// ============ about story-modal ===============

window.addEventListener("DOMContentLoaded", () => {
// 繝｢繝ｼ繝繝ｫ繧貞叙蠕�
const storyModal = document.getElementById("story-modal");

// 繝｢繝ｼ繝繝ｫ繧帝幕縺�
const openstoryModalBtns = document.querySelectorAll(".story-modalOpen");

// Swiper險ｭ螳�
const storyModalswiper = new Swiper(".story-modal-swiper", {
  effect: 'fade',
  navigation: {
    nextEl: ".story-modal-button-next",
    prevEl: ".story-modal-button-prev",
  },
  spaceBetween: 30, //莉ｻ諢上�繝槭�繧ｸ繝ｳ
});

// 繝｢繝ｼ繝繝ｫ縺ｮ繝懊ち繝ｳ繧ｯ繝ｪ繝�け
openstoryModalBtns.forEach((openModalBtn) => {
  openModalBtn.addEventListener("click", () => {

    // data-modal縺ｧ險ｭ螳壹＠縺溘せ繝ｩ繧､繝臥分蜿ｷ繧貞叙蠕�
    const modalIndex = openModalBtn.getAttribute('data-modal');

    storyModalswiper.slideTo(modalIndex);
    storyModal.classList.add("is-active");
    document.querySelector('body').classList.add("active");

  });
});


// 繝｢繝ｼ繝繝ｫ繧帝哩縺倥ｋ
const closestoryModalBtns = document.querySelectorAll(".story-modalClose");

// 繝｢繝ｼ繝繝ｫ縺ｮ髢峨§繧九�繧ｿ繝ｳ繧ｯ繝ｪ繝�け
closestoryModalBtns.forEach((closeModalBtn) => {
  closeModalBtn.addEventListener("click", () => {
    storyModal.classList.remove("is-active");
    document.querySelector('body').classList.remove("active");

  });
});
});

// ============oactivity__slide1 swiper===============

window.addEventListener("DOMContentLoaded", () => {
const goodsSwiper = new Swiper(".activity__slide1", {
  navigation: {
    nextEl: ".activity__slide1-next",
    prevEl: ".activity__slide1-prev",
  },
  pagination: {
    el: '.activity__slide1-pagination',
    clickable: true,
  },    
  roundLengths:true,
});
});


// ============oactivity__slide2 swiper===============


window.addEventListener("DOMContentLoaded", () => {
const goodsSwiper = new Swiper(".activity__slide2", {
  navigation: {
    nextEl: ".activity__slide2-next",
    prevEl: ".activity__slide2-prev",
  },
  pagination: {
    el: '.activity__slide2-pagination',
    clickable: true,
  },    
  roundLengths:true,
});
});


// ===========================
//         Brand page
// ===========================

// ============ blog swiper ===============

window.addEventListener("DOMContentLoaded", () => {
const blogSwiper = new Swiper(".bloglist", {
  navigation: {
    nextEl: ".blog-content-list-next",
    prevEl: ".blog-content-list-prev",
  },
  slidesPerView:1,
  roundLengths:true,
  spaceBetween:50,
  breakpoints: {
    390: {
      slidesPerView: 1.5,
    },
    768: {
      slidesPerView: 1.5,
    },
    1200: {
      slidesPerView: 4.5,
    },
    1920: {
      slidesPerView: 4.5,
    }
  }
});
});


// ============ brand history-modal ===============

window.addEventListener("DOMContentLoaded", () => {

// Swiper險ｭ螳夲ｼ医Δ繝ｼ繝繝ｫ螟厄ｼ�

const historyswiper = new Swiper(".historylist", {
  navigation: {
    nextEl: ".history-content-list-next",
    prevEl: ".history-content-list-prev",
  },
  slidesPerView:2,
  roundLengths:true,
  spaceBetween:50,
  breakpoints: {
    390: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 4.5,
    },
    1920: {
      slidesPerView: 4.5,
    }
  }    
});

// 繝｢繝ｼ繝繝ｫ繧貞叙蠕�
const historyModal = document.getElementById("history-modal");

// 繝｢繝ｼ繝繝ｫ繧帝幕縺�
const openhistoryModalBtns = document.querySelectorAll(".history-modalOpen");

// Swiper險ｭ螳夲ｼ医Δ繝ｼ繝繝ｫ蜀�ｼ�
const historyModalswiper = new Swiper(".history-modal-swiper", {
  effect: 'fade',
  navigation: {
    nextEl: ".history-modal-button-next",
    prevEl: ".history-modal-button-prev",
  },
  spaceBetween: 30, //莉ｻ諢上�繝槭�繧ｸ繝ｳ
});

// 繝｢繝ｼ繝繝ｫ縺ｮ繝懊ち繝ｳ繧ｯ繝ｪ繝�け
openhistoryModalBtns.forEach((openModalBtn) => {
  openModalBtn.addEventListener("click", () => {

    // data-modal縺ｧ險ｭ螳壹＠縺溘せ繝ｩ繧､繝臥分蜿ｷ繧貞叙蠕�
    const modalIndex = openModalBtn.getAttribute('data-modal');
    console.log(modalIndex)

    historyModalswiper.slideTo(modalIndex);
    historyModal.classList.add("is-active");
    document.querySelector('body').classList.add("active");

  });
});


// 繝｢繝ｼ繝繝ｫ繧帝哩縺倥ｋ
const closehistoryModalBtns = document.querySelectorAll(".history-modalClose");

// 繝｢繝ｼ繝繝ｫ縺ｮ髢峨§繧九�繧ｿ繝ｳ繧ｯ繝ｪ繝�け
closehistoryModalBtns.forEach((closeModalBtn) => {
  closeModalBtn.addEventListener("click", () => {
    historyModal.classList.remove("is-active");
    document.querySelector('body').classList.remove("active");

  });
});
});

// ===========================
//         simulation page
// ===========================

// ============option__slide1 swiper===============

window.addEventListener("DOMContentLoaded", () => {
const option1Swiper = new Swiper(".option__slide1", {
  effect: 'fade',
  navigation: {
    nextEl: ".option__slide1-next",
    prevEl: ".option__slide1-prev",
  },
  pagination: {
    el: '.option__slide1-pagination',
    clickable: true,
  },    
  roundLengths:true,
});
});



// ============option__slide2 swiper===============

window.addEventListener("DOMContentLoaded", () => {
const option2Swiper = new Swiper(".option__slide2", {
  effect: 'fade',
  navigation: {
    nextEl: ".option__slide2-next",
    prevEl: ".option__slide2-prev",
  },
  pagination: {
    el: '.option__slide2-pagination',
    clickable: true,
  },    
  roundLengths:true,
});
});


// ============option__slide3 swiper===============

window.addEventListener("DOMContentLoaded", () => {
const option3Swiper = new Swiper(".option__slide3", {
  effect: 'fade',
  navigation: {
    nextEl: ".option__slide3-next",
    prevEl: ".option__slide3-prev",
  },
  pagination: {
    el: '.option__slide3-pagination',
    clickable: true,
  },    
  roundLengths:true,
});
});

// ============ other-bottol swiper===============

window.addEventListener("DOMContentLoaded", () => {
const goodsSwiper = new Swiper(".other-bottol", {
  navigation: {
    nextEl: ".other-bottol-next",
    prevEl: ".other-bottol-prev",
  },
  slidesPerView:2.5,
  roundLengths:true,
  spaceBetween:10,
  breakpoints: {
    390: {
      slidesPerView: 3.0,
    },
    992: {
      slidesPerView: 6.5,
    },
    1920: {
      slidesPerView: 6.5,
    }
  }
});
});