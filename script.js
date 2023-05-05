  // функция для скроллинга страницы вверх
  function topFunction() {
    document.body.scrollTop = 0; // для Safari
    document.documentElement.scrollTop = 0; // для других браузеров
}

// показываем кнопку, когда пользователь прокрутил вниз на 20px от верхней части страницы
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scroll-to-top").style.display = "block";
    } else {
        document.getElementById("scroll-to-top").style.display = "none";
    }
};