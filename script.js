let colors = ['green','red','rgba(133,122,200)','#f15025']
 let btn = document.querySelector("#btn");
 let color = document.querySelector(".color");

 btn.addEventListener('click', function(){
     random();
    document.body.style.backgroundColor = colors[a];
    color.textContent = colors[a]; 
})
function random(){
return  a = Math.floor(Math.random() * colors.length);

}