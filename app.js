let btns = document.querySelectorAll("button");

function sayhello() {
    alert("hello");
}


for(btn of btns){
    btn.onclick = sayhello;
    btn.onmouseenter = function () {
        console.log("You entered a button");
    };
    console.dir(btn);
}