let mouse  = document.querySelectorAll(".mousechack")
mouse.forEach(function(val){
    val.addEventListener("mouseenter",function(){
       val.children[1].style.opacity = 1;
    })
    val.addEventListener("mouseleave",function(){
       val.children[1].style.opacity = 0;
    })
    val.addEventListener("mousemove",function(dtes){
       val.children[1].style.left= dtes.x +"px";
       val.children[1].style.top = dtes.y;
    })

})
