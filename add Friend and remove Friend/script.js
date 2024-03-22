var h1 = document.querySelector("h1");
var addfriend = document.querySelector("#btn");
var chack = 0;
addfriend.addEventListener("click",function(){
if(chack ==0){
    h1.innerHTML = "Friend";
h1.style.color ="green"
btn.innerHTML ="Remove Friend"
chack=1;
}else{
    h1.innerHTML = "Stranger";
    h1.style.color ="red"
    btn.innerHTML ="Add Friend"
    chack=0;
}

})