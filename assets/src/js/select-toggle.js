console.log('select-toggle.js')
$('select.custom-select').click(function (e) {
    $(this).toggleClass('active-select');
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

