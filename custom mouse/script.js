var main = document.querySelector(".container");
var curser = document.querySelector(".curser")
main.addEventListener("mousemove",function(move){
curser.style.top = move.y+"px"
curser.style.left = move.x+"px"
})