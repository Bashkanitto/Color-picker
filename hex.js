let colors = [1,2,3,4,5,6,'a','b','c','d','e','f',]
 let btn = document.querySelector("#btn");
 let color = document.querySelector(".color");

 btn.addEventListener('click', function(){
     let hex = '#'
     for(let i =0;i<6;i++){
        random();
         hex = hex+colors[a]
         
     }
     color.textContent = hex
    document.body.style.backgroundColor = hex;

})
function random(){
return  a = Math.floor(Math.random() * colors.length);

}