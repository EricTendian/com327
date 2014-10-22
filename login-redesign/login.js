jQuery.noConflict();
(function ($) {
    $(function () {
        $('html').removeClass('no-js');
        $('#login-content .signup a').click(function (event) {
            event.preventDefault();
            $('#login-content').hide();
            $('#signup-content').show();
            var pagetitle = $('#signup-content').attr('data-pagetitle');
            $('head > title').text(pagetitle);
            window.history.pushState(pagetitle, pagetitle, "signup.html");
        });
        $('#signup-content .login a').click(function (event) {
            event.preventDefault();
            $('#login-content').show();
            $('#signup-content').hide();
            var pagetitle = $('#login-content').attr('data-pagetitle');
            $('head > title').text(pagetitle);
            window.history.pushState(pagetitle, pagetitle, "login.html");
        });
        $('#login-content .submit').addClass('avoid-clicks');
    });
})(jQuery);

