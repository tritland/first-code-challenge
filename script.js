console.log('javascript is linked');
var counter = 1;
function clicker() {
    counter++;
};

$(document).ready(function () {

    $('#generateButton').on('click', function () {
        $('body').append('<div><button class="swapButton">Swap</button><p>'
            + counter + '</p><button class="deleteButton">Delete</button></div>');
        clicker();
    });

    $('body').on('click', '.deleteButton', function () {
        $(this).parent().remove();
    });

    $('body').on('click', '.swapButton', function () {
        $(this).closest('div').toggleClass('classSwap');
    });
});

