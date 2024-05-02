  window.addEventListener('scroll', function () {
    var nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      nav.classList.add('nav-scrolled');
    } else {
      nav.classList.remove('nav-scrolled');
    }
  });
