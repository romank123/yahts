$(($) => {
    $('.select').on('click', '.select-head', function () {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).next().fadeOut(25);
        } else {
            $('.select-head').removeClass('open');
            $('.select-list').fadeOut(25);
            $(this).addClass('open');
            $(this).next().fadeIn(25);
        }
    });

    $('.select').on('click', '.select-item', function () {
        $('.select-head').removeClass('open');
        $(this).parent().fadeOut(25);
        $(this).parent().prev().text($(this).text());
        $(this).parent().prev().prev().val($(this).text());
    });

    $(document).click(function (e) {
        if (!$(e.target).closest('.select').length) {
            $('.select-head').removeClass('open');
            $('.select-list').fadeOut(25);
        }
    });
});