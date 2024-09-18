
jQuery(document).ready(function ()
{
  $('.header-menu__icon').click(function ()
  {
    $(this).toggleClass('active');
    $('.header-menu').toggleClass('active');
  });

  const swiper = new Swiper('.swiper-directions', {
    direction: 'horizontal',
    speed: 500,
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
    },
  });

  const swiper2 = new Swiper('.swiper-logos', {
    direction: 'horizontal',
    autoplay: {
      delay: 3000,
    },
    loop: true,
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
    },
  });

  document.querySelectorAll('.direction-item>div').forEach((point, key) =>
  {
    point.addEventListener('click', () =>
    {
      document.querySelectorAll('.direction-item>div').forEach((no_active) =>
      {
        no_active.classList.remove('active');
      });

      point.classList.add('active');
      const swiperInstance = document.querySelector('.swiper-directions').swiper;
      swiperInstance.slideTo(key);
    });
  })

  // Аккордион
  const boxes = Array.from(document.querySelectorAll(".box")); // считываем все элементы аккордеона в массив

  boxes.forEach((box) =>
  {
    box.addEventListener("click", boxHandler); // при нажатии на бокс вызываем ф-ию boxHanlder
  });

  function boxHandler(e)
  {
    e.preventDefault(); // сбрасываем стандартное поведение
    let currentBox = e.target.closest(".box"); // определяем текущий бокс
    let currentContent = e.target.nextElementSibling; // находим скрытый контент
    currentBox.classList.toggle("active"); // присваиваем ему активный класс
    if (currentBox.classList.contains("active"))
    {
      // если класс активный ..
      currentContent.style.maxHeight = currentContent.scrollHeight + "px"; // открываем контент
    } else
    {
      // в противном случае
      currentContent.style.maxHeight = 0; // скрываем контент
    }
  }

  //

  dinamic_width();

  window.addEventListener('resize', () =>
  {
    dinamic_width();
  });

  function dinamic_width()
  {
    const width_now = document.querySelector('.directions').offsetWidth / 2;
    document.querySelector('.swiper').setAttribute('style', `width:${width_now}px`);
  }

  //
  document.querySelector('.search i').addEventListener('click', () =>
  {
    const parent_elem = document.querySelector('.search i').parentElement;

    if (parent_elem.classList.contains('active'))
    {
      parent_elem.classList.remove('active');
    } else
    {
      parent_elem.classList.add(('active'));
    }

  });

  //
  document.querySelector('.header-menu i').addEventListener('click', () =>
  {

    const sub_menu = document.querySelector('.header-menu .sub-menu');
    if (document.querySelector('.header-menu i').nextElementSibling == sub_menu)
    {
      if (sub_menu.classList.contains('active'))
      {
        sub_menu.classList.remove('active');
      } else
      {
        sub_menu.classList.add(('active'));
      }
    }

  });

  window.addEventListener('resize', () =>
  {
    const header_menu = document.querySelector('.header-menu');
    const header_icon = document.querySelector('.header-menu__icon');
    if (window.innerWidth >= 1024)
    {
      header_menu.classList.remove('active');
      header_icon.classList.remove('active');
    }

    if (window.innerWidth < 1024)
    {
      $('.form-section input[type="submit"]').before($('.policy'));
    } else
    {
      $('.address').after($('.policy'));
    }
  })


})

