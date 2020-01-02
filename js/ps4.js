$(document).ready(function(){
    $("#menu").click(function(){
        $(this).hide(500);
        $("#close").show(500);
        $("#menu-list").show(500);
    })
})

$(document).ready(function(){
    $("#close").click(function(){
        $(this).hide(500);
        $("#menu").show(500);
        $("#menu-list").hide(500);
    })
})