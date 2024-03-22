var arr =[{db:"https://images.unsplash.com/photo-1674948936181-2deb7eb82c5b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",story:"https://media.istockphoto.com/id/1315673241/photo/paint-for.webp?s=1024x1024&w=is&k=20&c=UykM43h4mFT8yGLxyCPyNZ9vtoERcjfhm33UPI5g7_E="},{db:"https://images.unsplash.com/photo-1708022799750-afbe4be26f73?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",story:"https://images.unsplash.com/photo-1708022776905-c986c53a4939?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},

,{db:"https://images.unsplash.com/photo-1708075207055-269ec68c323c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",story:"https://images.unsplash.com/photo-1681224237990-c3f21f358d10?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
,{db:"https://images.unsplash.com/photo-1708022788962-ac942bc0af71?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",story:"https://images.unsplash.com/photo-1649189277501-493b234a52ef?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
,{db:"https://images.unsplash.com/photo-1708165725218-3a37c2165755?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",story:"https://images.unsplash.com/photo-1514124242452-68a335539134?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
]
let storyii= document.querySelector(".storyii")
var cutter = ""
arr.forEach(function(elem,index ){
   
  cutter+=`<div class="story">
  <img id=${index} src="${elem.db}" alt="">
  </div>`

})
storyii.innerHTML=cutter;
storyii.addEventListener("click", function(dets){
var chack = document.querySelector("#fullscreen")
chack.style.display ="block"
chack.style.backgroundImage =`url(${arr[dets.target.id].story})`;


setTimeout(function(){
    chack.style.display ="none"
},3000)
});

