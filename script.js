let defuserEl = document.getElementById("defuser");
let paragraphIdEl = document.getElementById("paragraphId");
let imageEl = document.getElementById("image");


let counter = 10;

let timeInterval = setInterval(function(){
    paragraphIdEl.textContent = counter;
    counter -= 1;
    if(counter === 0){
        clearInterval(timeInterval);
        paragraphIdEl.textContent = "Boom";
        imageEl.src="https://img.freepik.com/premium-photo/exploding-sparks-fire-dust-smoke-black-background_303714-991.jpg?w=740";
    

    };
},1000);
defuserEl.addEventListener("keydown",function(event){
    let bombDefuserText = defuserEl.value;
    if(counter !== 0 && bombDefuserText === "defuse" && event.key === "Enter"){
        paragraphIdEl.textContent = "You defused the bomb";
        clearInterval(timeInterval);

    }
});