console.log('javascript is linked');
var counter = 0;
function clicker() {
    counter++;
};


$(document).ready(function () {

    $('#generateButton').on('click', function () {
        $('body').append('<div><button id="swapButton">Swap</button><p>' + counter + '</p><button id="deleteButton">Delete</button></div>');
        clicker();
    });


    $('body').on('click', '#deleteButton', function () {
        $(this).parent().remove();
    });

    $('body').on('click', '#swapButton', function () {
        $(this).parent().css('background-color', 'yellow');
    })


});

