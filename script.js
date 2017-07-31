console.log('javascript is linked');
var counter = 0;

$(document).ready(function(){
    
    $('#generateButton').on('click', function(){
        $('body').append('<div></div>');
        clicker();

        $('div').append('<p>'+counter+'</p>');   
});
    });




function clicker(){
counter ++;
}