$(document).ready(() => {
    $('.add-recipe-button').click(() => {
        const div = document.getElementById("instructions");
        const input = document.createElement("input");
        input.type = "text";
        input.name = "instructions[]";
        input.id = 'single-instruction';
        div.appendChild(document.createElement("br"));
        div.appendChild(input);
    });

    $('.delete-recipe-button').click(() => {
        $('#instructions #single-instruction:last').remove();
        $('#instructions br:last').remove();
    });
});

function show(i) {
    $('.show-single-recipe' + i).removeClass('recipe-hidden');
}

function hide(i) {
    $('.show-single-recipe' + i).addClass('recipe-hidden');
}