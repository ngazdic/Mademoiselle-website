


$(document).ready(function () {

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
  
    //owl carousel
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 100,
        dots: true,
        dotsEach: true,
        items: 1

    });
    
    //form validator
    
   //NAPOMENA: iz nekog razloga mi nije radio highlight i unhighlit function, mozda zato sto sam vec setovao 
   //bordere da budu ove pink boje kad je focus stanje, pa sam te dve funkcije izostavio

   $('#form1 input, #form1 textarea').val('');
        $("#form1").validate({
       
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                email: {
                    required: true,
                    email: true
                },
                subject: {
                    required: true,
                    minlength: 2
                },
                message: {
                    required: true,
                    minlength: 2
                }
            },
            messages: {
                name: {
                    required: "Please enter your name",
                    minlength: "Your name must be at least 2 characters long"
                },
                email: {
                    required: "Please enter your email",
                    email: "Please enter a valid email address"
                },
                subject: {
                    required: "Please enter the subject of your message",
                    minlength: "Must be at least 2 characters long"
                },
                message: {
                    required: "Please enter your message",
                    minlength: "Must be at least 2 characters long"
                }
                
            },
              errorPlacement: function(error, element) {
                  element.attr('placeholder', '');
            error.addClass('input-error-message');
            error.insertBefore(element);
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

//Spinner
$('#spinner-container').show();


setTimeout(function() {
    $('#spinner-container').hide();
}, 500); // NAPOMENA - ovde sam ostavio 500 milisekudni cisto da se vidi spiner, ali ne mora da stoji ovaj setTimeout u opste, 
//jer spiner ce se pokazati u slucaju da stranici treba vreme da se ucita sve dok ajax request ne bude kompletiran (uspesno ili 
//neuspesno, nema veze)


$.ajax({
    url: 'your-page-url',
    type: 'GET',
    success: function(response) {
       
        $('#spinner-container').hide();
  
        $('#content-container').html(response);
    },
    error: function(error) {
        
        console.error('Error loading page:', error);
       
        $('#spinner-container').hide();
    }
});


