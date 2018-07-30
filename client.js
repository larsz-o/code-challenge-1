$(document).ready(readyNow);

let clickTotal = 0;

function readyNow() {
    $('#generate-button').on('click', appendDiv);
    $('#color-div-container').on('click', '.swap', swapColors);
    $('#color-div-container').on('click', '.delete', deleteDiv);
}

function appendDiv() {
    $('#color-div-container').append('<div class="red"><button class="swap">Swap</button><button class="delete">Delete</button></div>');
    clickTotal++;
    $('#counter-container').html('<p> Times Clicked: ' + clickTotal + '</p>');
}

function swapColors() {
    $(this).parent().toggleClass('yellow');
    // $(this).parent().find('.red').css('background-color', 'yellow'); 
}

function deleteDiv() {
    $(this).parent().remove();
}