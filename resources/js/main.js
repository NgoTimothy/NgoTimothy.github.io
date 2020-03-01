(function ($) {
    "use strict";


    /*==================================================================
    [ Focus Contact2 ]*/
    $('.input100').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })    
    })
  
  
    /*==================================================================
    [ Validate ]*/
    var name = $('.validate-input input[name="name"]');
    var email = $('.validate-input input[name="email"]');
    var phone = $('.validate-input input[name="phone"]');
    var party = $('.validate-input input[name="party"]');
    var date = $('.validate-input input[name="date"]');
    var time = $('.validate-input input[name="time"]');
    var message = $('.validate-input textarea[name="message"]');


    $('.validate-form').on('submit',function(){
        var check = true;

        if($(name).val().trim() === ''){
            showValidate(name);
            check = false;
        }

        if($(date).val().trim() === ''){
            showValidate(date);
            check = false;
        }

        if($(time).val().trim() === ''){
            showValidate(time);
            check = false;
        }

        if($(email).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
            showValidate(email);
            check = false;
        }

        if(isNaN(party.val())) {
            showValidate(party);
            check = false;
        }

        if(check) {
            sendEmail();
        }

        return check;
    });

    function sendEmail() {
        Email.send({
            Host: "smtp.elasticemail.com",
            Username : "",
            Password : "",
            To : "",
            From : "",
            Subject : "Reservation For " + $(name).val().trim(),
            Body : "Reservation for " + $(name).val().trim() + "\n" +
                "Email: " + $(email).val().trim() + "\n" +
                "Phone: " + $(phone).val().trim() + "\n" +
                "Party Size: " + $(party).val() + "\n" +
                "Date: " + $(date).val().trim() + "\n" +
                "Time: " + $(time).val().trim() + "\n" +
                "Message: " + $(message).val().trim()
        }).then(function (value) {
            alert("Email sent successfully")
        }
    );
    }


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
       });
    });

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    

})(jQuery);