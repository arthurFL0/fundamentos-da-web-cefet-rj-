$(function(){
    $("#remover").click(function(){
        $("p").fadeOut("slow");
    })
    $("#exibir").click(function(){
        $("p").fadeIn("slow");
    })
    $("#toggle").click(function(){
        $("p").fadeToggle("slow");
    })


    $("p").on({
        mouseenter:function(){
            $(this).css("background-color","yellow")
        },
        mouseleave:function(){
            $(this).css("background-color","blue")
        }
    })
})