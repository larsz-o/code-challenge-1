$(document).ready(readyNow);

let clickTotal = 0;
let divArray = [];

function readyNow() {
    $('#generate-button').on('click', appendDiv);
    $('#color-div-container').on('click', '.swap', swapColors);
    $('#color-div-container').on('click', '.delete', deleteDiv);
}

function appendDiv() {
    $('#color-div-container').append('<div class="red"><button class="swap">Swap</button><button class="delete">Delete</button></div>');
    let newDiv = $('.red');
    divArray.push(newDiv);
    let counter = divArray.length;
    $(this).parent().find('.red').append('<p> Div Number: ' + counter + '</p>'); // I can't figure out how to get the text to not repeat on each new box. 
    // I had misread the instructions at first (creating a counter on the top of the page), so I lost some time in figuring this out
}

function swapColors() {
    $(this).parent().toggleClass('yellow');
}

function deleteDiv() {
    $(this).parent().remove();
}
