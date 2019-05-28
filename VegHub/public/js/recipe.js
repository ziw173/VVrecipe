$(document).ready(() => {
    // $(document).on('mouseenter', '#recipe-pic', () => {
    //     $('.recipe-button').show();
    // }).on('mouseleave', '#recipe-pic', () => {
    //     $('.recipe-button').hide();
    // });

    var source = $("#recipe-query").html();
    var template = Handlebars.compile(source);
    var parentDiv = $("#query-list");
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams) {
        $('#recipe-search-box').val(urlParams.get('search'));
        setTimeout(function(){ $('#recipe-search-button').click()}, 100);

    }
    $('#recipe-search-button').click(() => {
        if ($('#recipe-search-box').val().length !== 0) {
            $('#query-list').empty();
            $('.all-recipes').hide();
            // const search = '/recipe/search/' + $('#recipe-search-box').val();
            const search = '/allRecipes';
            const string = $('#recipe-search-box').val();
            $.ajax({
                url: search,
                type: 'GET',
                dataType: 'json',
                success: (data) => {
                    for (var i = 0; i < data.length; i++) {
                        if (data[i].name.toLowerCase().includes(string.toLowerCase())) {
                            var html = template(data[i]);
                            parentDiv.append(html);
                        }
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
});

function show(i) {
    $('.show-single-recipe' + i).removeClass('recipe-hidden');
}

function hide(i) {
    $('.show-single-recipe' + i).addClass('recipe-hidden');
}
