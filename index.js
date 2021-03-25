let controls = document.querySelectorAll("button");
let h1 = document.querySelector("h1");
var count = 0;
for(let i =0; i<controls.length; i++){
    controls[i].addEventListener("click", function(){
        if(i == 0){
            count--;
        } else if(i == 1){
            count++;
        }
        h1.textContent = count;
        if(count < 0){
            h1.style.color = "#af1605";
        } else if(count > 0){
            h1.style.color = "#F49917";
        }
    })

}