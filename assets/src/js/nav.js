console.log('nav.js..')
$('a.nav-link.dropdown-toggle').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
});

$(function($){
    $(document).mouseup(function (e){ // событие клика по веб-документу
        let div = $("a.nav-link.dropdown-toggle"); // тут указываем ID элемента
        if (!div.is(e.target) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            $(div).removeClass('active'); // скрываем его
        }
    });
});