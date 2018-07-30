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
    $(this).closest('.red').append('<p> Div Number: ' + counter + '</p>'); 

}
   
function swapColors() {
    $(this).parent().toggleClass('yellow');
}

function deleteDiv() {
    $(this).parent().remove();
}
