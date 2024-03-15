 $(document).ready(function() {
    $('#buyer').click(function() {

        setTimeout(function() {

            $('.Buyer_questions').show();
            $('.saller_questions').hide();

            $('#buyer').addClass('underline');
            $('#seller').removeClass('underline');


        }, 100); 




    });
  });
  

////////// seller ////////////

$(document).ready(function() {
    $('#seller').click(function() {



        setTimeout(function() {
            $('.Buyer_questions').hide();
            $('.saller_questions').show();

            $('#buyer').removeClass('underline');
            $('#seller').addClass('underline');




          }, 100); 



    });
  });
     

