console.log('header.js run..')

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