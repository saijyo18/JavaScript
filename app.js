// let btns = document.querySelectorAll("button");

// function sayhello() {
//     alert("hello");
// }


// for(btn of btns){
//     btn.onclick = sayhello;
//     btn.onmouseenter = function () {
//         console.log("You entered a button");
//     };
//     console.dir(btn);
// }

// EVENT LISTENER 
// addeventlisterner


// let btns = document.querySelectorAll("button");

// for(btn of btns){
//     // btn.onclick = sayhello;
//     // btn.onclick = sayhi;
//     btn.addEventListener("click", sayhello);
//     btn.addEventListener("click", sayhi);

// }
// function sayhello() {
//     alert("Hello");
// }

// function sayhi() {
//     alert("apna college");
// }

//ACTIVITY

// let btn = document.querySelector("button");

// btn.addEventListener("click", function() {
//    let h3 = document.querySelector("h3");
//    let randomcolor = getrandomcolor();
//    h3.innerText  = randomcolor;

//    let div = document.querySelector("div");
//    div.style.backgroundColor = randomcolor;

//    console.log("color updated")
// })

// function getrandomcolor() {
//     let red = Math.floor(Math.random()*255);
//     let green = Math.floor(Math.random()*255);
//     let blue = Math.floor(Math.random()*255);

//     let color = `rgb(${red}, ${green}, ${blue})`;
//     return color;
// }

// let btn = document.querySelector("button");

// btn.addEventListener("click", function(){
//     console.log(this);
// })

//KEYBOARD EVENTS
// let btn = document.querySelector("button");

// btn.addEventListener("click",function(event) {
//     console.log(event);
//     console.log("this button has been clicked");
// })

// let input = document.querySelector("input");

// input.addEventListener("keydown", function(){
//     console.log("this button has been clicked");
// });

// input.addEventListener("keyup", function(){
//     console.log("this button has been clicked");
// });

// let form = document.querySelector("form")

// form.addEventListener("submit", function(event) {
//     event.preventDefault();
//     alert("form submitted");
// })