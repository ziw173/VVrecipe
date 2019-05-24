$(document).ready(() => {
    // $(document).on('mouseenter', '#recipe-pic', () => {
    //     $('.recipe-button').show();
    // }).on('mouseleave', '#recipe-pic', () => {
    //     $('.recipe-button').hide();
    // });

    var source = $("#recipe-query").html();
    var template = Handlebars.compile(source);
    var parentDiv = $("#query-list");
    $('#recipe-search-button').click(() => {
        if ($('#recipe-search-box').val().length !== 0) {
            $('#query-list').empty();
            $('.all-recipes').hide();
            const search = '/recipe/search/' + $('#recipe-search-box').val();
            $.ajax({
                url: search,
                type: 'GET',
                dataType: 'json',
                success: (data) => {
                    // $('#search-box-img').attr('src', '/image/' + data.filename);
                    // $('#search-box-img').attr('width', '400px');
                    console.log(data[0])
                    for (var i = 0; i < data.length; i++) {
                        var html = template(data[i]);
                        console.log(html);
                        parentDiv.append(html);
                    }
                }
            });
        }   
    });

    $('#recipe-search-box').keyup(() => {
        if ($('#recipe-search-box').val().length === 0) {
            $('#query-list').empty();
            $('.all-recipes').show();
        }
    });

    $('.post-image').click(() => {
        // console.log('clicked');
        // $(this).parents().eq(2).find('#show-single-recipe').removeClass('recipe-hidden');
    });
});
