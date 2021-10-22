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
console.log('header.js ..')

$("#menu_date").hover(function () {

    $("#sub_menu").slideDown(100);

        $("#sub_menu").hover(function () {

                $("#sub_menu").slideDown(100);
            },
            function () {

                let isHovered1 = $('#menu_date').is(":hover")

                if (isHovered1  == false ) {

                    $("#sub_menu").hide()

                };

            });

},
    function () {

        let isHovered = $('#sub_menu').is(":hover")

        if (isHovered  == false ) {

            $("#sub_menu").slideUp(100);

        }



});
//# sourceMappingURL=main.js.map
