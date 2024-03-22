let love = document.querySelector("#love");
let img  = document.querySelector(".container");

img.addEventListener("dblclick",function(){
   love.style.transform= "translate(-50%, -50%) scale(1)";
   love.style.opacity= 1;
setTimeout(function(){
    love.style.opacity=0;
},2000)
setTimeout(function(){
    love.style.transform= "translate(-50%, -50%) scale(0)";

},3000)
})
