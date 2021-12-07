$(document).ready(function () {


    function handleIconHome(e) {

        console.log($(e.target).hasClass('bx-left-arrow'));

        const dicIcon = {
            'bx bx-left-arrow': 'bx bxs-left-arrow',
            'bx bx-right-arrow': 'bx bxs-right-arrow',
            'bx bxs-left-arrow': 'bx bx-left-arrow',
            'bx bxs-right-arrow': 'bx bx-right-arrow',
        }

        console.log(dicIcon['bx bx-left-arrow'])

        // console.log(Object.keys(dicIcon));

        Object.keys(dicIcon).filter(key => $(e.target).hasClass(key)).forEach(key => {
            $(e.target).removeClass(key);
            $(e.target).addClass(dicIcon[key]);
        })
    }

    if ($(window).width() > 720) {
        $(".nut-slide").hover(handleIconHome);
    } else {
        $(".nut-slide").hover();
    }
});
