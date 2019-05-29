$(document).ready(() => {
    $('#mine').click(() => {
        $('#mine').addClass('active');
        $('#favorites').removeClass('active');
        $('.profile-recipe').show();
        $('.profile-saved').hide();
    });

    $('#favorites').click(() => {
        $('#favorites').addClass('active');
        $('#mine').removeClass('active');
        $('.profile-saved').show();
        $('.profile-recipe').hide();
    });
}); 