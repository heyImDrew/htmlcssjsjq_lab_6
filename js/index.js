$(document).ready(function(){

    $(".fButton").click(function(){
        $(".class3 p, .class4 p").toggleClass('styleNew');
        $(".class1 h2").replaceWith(function() {
            return '<h6>' + $(this).text() + '</h6>';
        });
        $(".fButton").hide("slow");
        $(".sButton").show("slow");
    });

    $(".sButton").click(function() {
        $(".class2, .class4, .class6").replaceWith(function() {
            return '<img src="../resources/magic.png" width=150px border-radius=25px>';
        });
        $(".sButton").hide("slow");
    });
    
});