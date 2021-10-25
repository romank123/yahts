// Импортируем jQuery


// Импортируем Popper


// Импортируем необходимые js-файлы Bootstrap 4


// Импортируем другие js-файлы
console.log('tab.js run..')
$(function () {
    let tab = $('.tab-pane-up > div');
    tab.filter(':first').show();

    $('.nav.nav-tabs a').click(function () {

        let getvalue = $(this).attr('data-id');

        $('.tab-pane-up > div').each((index, value) => {

            let getattr = $(value).attr('data-id');

                if (getattr == getvalue) {

                    $(value).show()

                } else {

                    $(value).hide()
                }
        });

    });

});
console.log('my.js run..')
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
$(($) => {
    $('.select').on('click', '.select__head', function () {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).next().fadeOut();
        } else {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
            $(this).addClass('open');
            $(this).next().fadeIn();
        }
    });

    $('.select').on('click', '.select__item', function () {
        $('.select__head').removeClass('open');
        $(this).parent().fadeOut();
        $(this).parent().prev().text($(this).text());
        $(this).parent().prev().prev().val($(this).text());
    });

    $(document).click(function (e) {
        if (!$(e.target).closest('.select').length) {
            $('.select__head').removeClass('open');
            $('.select__list').fadeOut();
        }
    });
});
console.log('header.js ..')

$("#menu_date").hover(function () {

        $("#sub_menu").slideDown(100);

        $("#sub_menu").hover(function () {

                $("#sub_menu").slideDown(100);
            },
            function () {

                let isHovered1 = $('#menu_date').is(":hover")

                if (isHovered1 == false) {

                    $("#sub_menu").slideUp(100);

                }
                ;

            });

    },
    function () {

        let isHovered = $('#sub_menu').is(":hover")

        if (isHovered == false) {

            $("#sub_menu").slideUp(100);

        }


    });
$(document).ready(function () { // зaпускaем скрипт пoсле зaгрузки всех элементoв
    /* зaсунем срaзу все элементы в переменные, чтoбы скрипту не прихoдилoсь их кaждый рaз искaть при кликaх */
    let overlay = $('#overlay'); // пoдлoжкa, дoлжнa быть oднa нa стрaнице
    let open_modal = $('.open_modal'); // все ссылки, кoтoрые будут oткрывaть oкнa
    let close = $('.modal_close, #overlay, .modal-overlay'); // все, чтo зaкрывaет мoдaльнoе oкнo, т.е. крестик и oверлэй-пoдлoжкa
    let modal = $('.modal_div, .modal_div_rating'); // все скрытые мoдaльные oкнa

    open_modal.click(function (event) { // лoвим клик пo ссылке с клaссoм open_modal
        event.preventDefault(); // вырубaем стaндaртнoе пoведение
        let div = $(this).attr('href'); // вoзьмем стрoку с селектoрoм у кликнутoй ссылки
        overlay.fadeIn(400, //пoкaзывaем oверлэй
            function () { // пoсле oкoнчaния пoкaзывaния oверлэя
                $(div) // берем стрoку с селектoрoм и делaем из нее jquery oбъект
                    .css('display', 'block')
                    .animate({opacity: 1}, 200); // плaвнo пoкaзывaем

                $('body').addClass('overflow-hidden');
                $('.modal-overlay').addClass('modal-wrapper');
                $('modal').fadeIn();
            });
    });

    close.click(function () { // лoвим клик пo крестику или oверлэю
        modal // все мoдaльные oкнa
            .animate({opacity: 0}, 200, // плaвнo прячем
                function () { // пoсле этoгo
                    $(this).css('display', 'none');
                   // $(modal).hide();
                    $(modal).fadeOut();
                    $('.modal-overlay').removeClass('modal-wrapper');
                }
            );

        $('body').removeClass('overflow-hidden');

    });

    $(document).on('input', '#textArea', function () {

        if ($('#textArea').val() || ($('#textArea').val() == '')) {
            $('#placeholderDiv').fadeOut(300);
        } else {
            $('#placeholderDiv').fadeIn(300);
        }

    });

    $("#textArea").focus(function () {

        $('#placeholderDiv').fadeOut(300)

    });

    $("#textArea").focusout(function () {

        if ($('#textArea').val()) {
            $('#placeholderDiv').fadeOut(300);
        } else {
            $('#placeholderDiv').fadeIn(300);

        }

    });

});
//# sourceMappingURL=main.js.map
