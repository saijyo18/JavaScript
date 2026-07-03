let para1  = document.createElement('p');
para1.innerText = "Hey! I am red"
document.querySelector('body').append(para1)

para1.classList.add("red");

let head1  = document.createElement('h3');
head1.innerText = "Hey! I am blue"
document.querySelector('body').append(head1)

head1.classList.add("blue");

let div = document.createElement('div')
let h1 = document.createElement("h1");
let para2 = document.createElement("p");

h1.innerText = "Hello I am inside DIV";
para2.innerText = "ME TOO";

div.append(h1);
div.append(para2);

div.classList.add("box");


document.querySelector('body').append(div);