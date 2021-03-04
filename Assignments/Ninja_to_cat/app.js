$(document).ready( function() {
    $(".ninjacat").click( function() {
        var temp = $(this).attr('src');
        $(this).attr('src', $(this).attr('data-alt-src'))
        $(this).attr('data-alt-src',temp)
    })
})