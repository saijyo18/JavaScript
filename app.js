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
//     let inp =  document.querySelector("input");
//     console.log(inp.value);
// })

// EXTRACTING FORM DATA
// function hello() {
//     console.log("hello");
// }

// hello();

//BREAKPOINTS
// function one() {
//     return 1;
// }

// function two() {
//     return one() + one();
// }

// function three() {
//     let ans = two() + one();
//     console.log(ans);
// }
// three();

// these settimeout function are executed by the browser
// browser manages the delay 
// synchronous code  and asynchronous code
// setTimeout(() => {
//     console.log("Apna College");
// }, 2000);

// setTimeout(() => {
//     console.log("HEY");
// }, 2000);
// console.log("hello ...");

h1 = document.querySelector("h1");


function changecolor(color){
    h1.style.color = color;
}
setTimeout(() =>{
    changecolor(("red"));
})

setTimeout(() =>{
    changecolor(("orange"),2000);
})

setTimeout(() =>{
    changecolor(("green"),3000);
})
// setTimeout(changecolor("orange"),2000);
// setTimeout(changecolor("green"),3000);


// setTimeout(() => {
//     h1.style.color = "orange";
// }, 2000);

// setTimeout(() => {
//     h1.style.color = "green";
// }, 3000);

//PROMISES - represents the eventual completion or failure of an asynchronous 
// operation and its resulting value

// function savedata(data, success, failure) {
//     let internetspeed = Math.floor(( Math.random() * 10) + 1);
//     if( internetspeed > 4 ){
//         // console.log("your dta has been saved");
//         success();
//     } else {
//         failure();
//         // console.log("weak connection your data has been not been saved");
//     }
// }

// savedata("apna college" , 
//     () => {
//         console.log("You data has been saved:  ");
//         savedata("hello world", 
//             ()=> {
//             console.log("success2 : data has been saved successfuly");
//             }, 
//             ()=> {
//             console.log("failure: data has not been saved.");
//             })
//     }, 
//     () => {
//         console.log("weak connection your data has been not been saved");
//     })

//PROMISES - RESOLVE AND REJECT


function savedata(data) {
    return new Promise((resolve, reject) => {
        let internetspeed = Math.floor(( Math.random() * 10) + 1);
        if(internetspeed > 4){
            resolve("success: data was saved");
        } else {
            reject("failure: data was not saved");
        }
    })
}

// promise  - fulfilled and reject - in case of fulfilled we use then
// but in case of reject we use catch .
savedata("apna college")
    .then(() => {
        console.log("data1 saved promise fulfilled.");
        return savedata("helloworld");
    })
    .then(()=> {
        console.log("data2 saved");
        return savedata("mathematics");
    })
    .then(() => {
        console.log("data3 saved")
    })
    .catch(() => {
    console.log("the promise has NOT been fullfiled");
    })

// PROMISE CHAINING
