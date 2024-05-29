
$(document).ready(function () {

    function animation() {

        let windowHeight = $(window).height();//koliki je ekran, visina dakle

        let scroll = $(window).scrollTop(); //koliko je scrolovano od vrha ekrana

        $('.animation').each(function () {
            //da prodjemo kroz svaki od elemenata sa klasom animation sa metodom each()
            //i da uzmemo njegovu trenutnu poziciju

            let position = $(this).offset().top; //dakle uzimamo top od svakog elementa kros koji je each metoda prosla
            let animationName = $(this).attr('data-animation');//ovde cuvamo preko targetiranja klase koja animaciaj se izvrsava

            let delay = $(this).attr('data-delay');//ovde uzimamo i cuvamo attribut data delay


            if (position < windowHeight + scroll) {
                //proveramo da li je pozicija manja od onoga sto je korisnik scorllovao
                //u koliko jeste, dakle element je usao u vidno polje

                $(this).addClass(animationName);
                $(this).css('animation-delay', delay);//ovde kada udje u vidno polje mi mu dodajemo delay koji smo sacuvali u let delay

            }
        });
    }



    $(window).on('scroll', function () {
        animation(); //funkciju pozivamo na scroll


    });
    animation();

    //owl carousel
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 100,
        dots: true,
        dotsEach: true,
        items: 1,
        responsive: {
            0: {

            },
            360: {

            },
            768: {

            }
        }

    });


});

//nav bar animation from 360px to 576px
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("spinButton").addEventListener("click", function () {
        this.classList.toggle("rotate-45");
    });


    let items = document.querySelectorAll('.services-item-1');

    for (let i = 0; i < items.length; i++) {
        if (i % 2 === 1) {
            items[i].classList.add('even');
        }
    }


});


