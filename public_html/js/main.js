
$(document).ready(function(){
    
        function animation() {

        let windowHeight = $(window).height();//koliki je ekran, visina dakle

        let scroll = $(window).scrollTop(); //koliko je scrolovano od vrha ekrana

        $('.animation').each(function () {
            //da prodjemo kroz svaki od elemenata sa klasom animation sa metodom each()
            //i da uzmemo njegovu trenutnu poziciju

            let position = $(this).offset().top; //dakle uzimamo top od svakog elementa kros koji je each metoda prosla
            let animationName = $(this).attr('data-animation');//ovde cuvamo preko targetiranja klase koja animaciaj se izvrsava

            let delay = $(this).attr('data-delay');//ovde uzimamo i cuvamo attribut data delauy


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

    
});