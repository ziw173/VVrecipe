$(document).ready(() => {
    $('#recipe-button').click(() => {
        const search = 'post/' + $('#search-box').val() + '.png';
        $.ajax({
            url: search,
            type: 'GET',
            dataType: 'json',
            success: (data) => {
                $('#search-box-img').attr('src', '/image/' + data.filename);
                $('#search-box-img').attr('width', '400px');
            }
        })
    });
    $('#recipe-button').click(() => {
        const search = 'post/' + $('#search-box').val() + '.jpg';
        $.ajax({
            url: search,
            type: 'GET',
            dataType: 'json',
            success: (data) => {
                $('#search-box-img').attr('src', '/image/' + data.filename);
                $('#search-box-img').attr('width', '400px');
            }
        })
    });

    $('.add-recipe-button').click(() => {
        const div = document.getElementById("instructions");
        const input = document.createElement("input");
        input.type = "text";
        input.name = "instructions[]";
        div.appendChild(document.createElement("br"));
        div.appendChild(input);
    });

    $('.delete-recipe-button').click(() => {
        console.log($('.instructions').children());
    });

    $('.recipe-post-button').click(() => {
        
    });
    // $('#exampleModal').on('show.bs.modal', function (event) {
    //     var button = $(event.relatedTarget) // Button that triggered the modal
    //     var recipient = button.data('whatever') // Extract info from data-* attributes
    //     // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    //     // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    //     var modal = $(this)
    //     // modal.find('.modal-title').text('Create a Recipe')
    //   })
});

function isEmpty() {
    return !($('.post-comment').val().length) ? false : true;
}