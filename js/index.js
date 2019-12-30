$(document).ready(function(){
    $("#menu-btn").click(function(){
        $(this).hide(500);
        $("#close").show(500);
        $("#ul_group").show(500);
    });

    $("#close").click(function(){
        $(this).hide(500);
        $("#menu-btn").show(500);
        $("#ul_group").hide(500);
    });
});

// $(document).ready(function(){
//     $("#menu-btn").click(function(){
//         $(this).show(500);
//     });
// });
