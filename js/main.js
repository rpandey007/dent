

$(function () {
    $('.lf-items-inner').matchHeight({
        byRow: true,
        property: 'height',
        target: null,
        remove: false
    });
    $('.testi-slides-inner').matchHeight({
        byRow: true,
        property: 'height',
        target: null,
        remove: false
    });
    $('.testi-content').matchHeight({
        byRow: true,
        property: 'height',
        target: null,
        remove: false
    });
    $('.testi-content p').matchHeight({
        byRow: true,
        property: 'height',
        target: null,
        remove: false
    });
});
$(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});
$(document).ready(function () {
    $("#sendMessageBtn").click(function () {
        $(".error").html('');

        var firstName = $("input[name='firstName']").val();
        var lastName = $("input[name='lastName']").val();
        var email = $("input[name='email']").val();
        var message = $("textarea[name='message']").val();

        if (firstName === '') {
            $("#firstNameError").html('Please enter your First Name.');
        }
        if (lastName === '') {
            $("#lastNameError").html('Please enter your Last Name.');
        }
        if (email === '') {
            $("#emailError").html('Please enter your Email.');
        }
        if ($(".error").is(':empty')) {
            // Perform action (e.g., send data to server) when the form is valid

            $("#contactForm").hide();

            $("#successMessage").html('Form submitted successfully!').show();
        }
    });
});
$('.faq-trigger').click(function () {
    $(this).parent().parent().siblings().find('.faq-trigger').removeClass('active');
    $(this).parent().parent().siblings().find('.faq-content').slideUp(300);
    $(this).toggleClass('active');
    $(this).next().slideToggle(300);
})