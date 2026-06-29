// console.log("Java Script")
// console.log("Apna college")
// let a =5;
// let b =10;
// let output = `Your payment is ${a+b} rupees`;
// console.log(output);

// tripple equals to === * compares both type and value
// double equals to ==* compares only value and not type

// comarision for Non Numbers  - unicodes r bein compared 

// let age = 18;
// if(age >= 18){
//     console.log("The user is eligible to vote");
// } else if( age < 18){
//     console.log("The user is not elligible to vote");
// }

// let color="Yelow";

// if(color == "Yellow"){
//     console.log("congrats it is a happy color");
// } else  {
//     console.log("It is not a happy color");
// }

//practice question

// let size = "sL";

// if(size === "XL"){
//     console.log("Price is 250");
// } else if( size === "L"){
//     console.log("price is 150");
// } else if(size === "M"){
//     console.log("Price is 100");
// } else {
//     console.log("The asked size is not available");
// }

// //Logical operator - to combine two expressions together
// // good string if it starts with letter a and the length of the string is more than 3

// let str= "apple";

// if((str[0] === "a")  &&  (str.length > 3)){
//     console.log("the given string is a good string");
// }

// let num =12;

// if((num%3 == 0 ) && (num+1 == 15) || (num-1 ==11)){
//     console.log("safe");
// } else {
//     console.log("unsafe");
// }

// // sswitch statement - used when we have fixed values that we need to compare to 
// let color ="red";

// switch(color) {
//     case "red":
//         console.log("stop");
//         break;
// }

// prompt("Enter your namE: ")
// let str = "String";

// let newstr = str.toUpperCase();
// console.log(newstr);
// console.log(str);

//methods in string
// trime(), toUpperCase(), toLowerCase(), "indexOf(str)", "replace(str1, str2)"


// let str= "Hi      ";

// let newstr = str.trim();
// console.log("Msg after trimming: "+ newstr);
// newstr = newstr.toUpperCase();
// console.log("Msg after trimming: " + newstr);
// console.log(newstr);

// let msg = "          help!";
// let newmsg = msg.trim().toUpperCase();
// console.log(newmsg);

// Arrays methods - push()- add to the end 
// , pop()- delete from end , 
// unshift() - add to the starr, 
// shift() - deletefrom the end 
// indexOf("somtf") - returns the index of that element in the arrays 
// includes("smtg") - searches the value 
// concat - merges the two arrays 
// reverse - revers the array 

//LOOPS 
//JS OBJECT LITERALS 
// objects r collections of properties 


// const item = {
//     price: 100.09,
//     discount : 50,
//     colors :["red","green"]
// };

// // create a thread for a twitter post
// const thread = {
//     usernmae: "apnacollege",
//     content: "lifestyle",
//     likes: 200,
//     reposts: 200,
//     tags: 23
// };


// // js converts keys to strings automatically

// const obj = {
//     1:"a",
//     2:"b",
//     3:"c",
//     true:"d",
//     null:"f"
// }

// const student ={
//     name: "shradha",
//     age : 23,
//     city: "delhi",
//     marks: 94.4
// }

// const classinfo = [
//     {
//         name:"Aman",
//         grade:9,
//         city:"delhi"
//     },
//     {
//         name:"Shradha",
//         grade:9,
//         city:"kanpur"
//     },
//     {
//         name:"Hehe",
//         grade:9,
//         city:"hello"
//     }
// ]

// Random number generation
// const max = prompt("enter the max number: ");

// const random = Math.floor(Math.random()+ max) + 1;

// let guess = prompt("guess the number");
// while(true) {
//     if(guess == "quit" ){
//         console.log("userquit");
//         break;
//     }

//     if(guess == random){
//         console.log("You r right");
//         break;
//     } else {
//         guess = prompt("Your guess was wrong");

//     }
// }

//FUNCTIONS
// function hello() {
//     console.log("hello");
// }

// // Methods 
// const calculator = {
//     num : 55,
//     add : function(a,b){
//         return a+b;
//     },
//     sub : function(a,b){
//         return a-b;
//     },
//     mul : function(a,b){
//         return a*b;
//     }
// };

// const student = {
//     name:"shradha",
//     age: 23,
//     eng:97,
//     math:100,
//     sci:90,
//     getaverage(){
//         console.log((this.eng + this.math + this.sci)/3);
//     }
// }


// try {
//     console.log(a);
// } catch {
//     console.log("A is not defined");
// }

// console.log("hello");
// console.log("hello");
// try {
//     console.log(A);
// } catch(e){
//     console.log("Invalid a is not deifned");
//     console.log(e);
// } 
// console.log("hello again");

// ARROW FUNCTION
// const sum = (a,b) => {
//     console.log(a+b);
// }

// const cube = (n) => {
//     console.log(n*n*n);
// }

// const mul = (a,b) => (
//     a*b 
// )

//SET TIMEOUT FUNCTION - function that helps us to set the timeout 

// console.log("hi there");

// setTimeout( () => {
//     console.log("Apna college");
// }, 4000);

// console.log("Welcome to");

// console.log("Watch this , Watch This")

// const rm = (str) => {
//     console.log(str);
// }

// setTimeout ( rm,1000, "BEAT GOING HOOLIGAN");
// setTimeout ( rm,2000, "WE POP OUT");
// setTimeout ( rm,3000, "WE ACTIN");
// setTimeout ( rm,4000, "A FOOLAGAIN");
// setTimeout ( rm,5000, "HA HA HA HA HA HA HAHAHA HAHAH ");

//SET INTERVAL 

// setInterval ( () => {
//     console.log("hello world");
// }, 2000)

// arrow function 

// let avg = (arr) => {
//     let sum=0;
//     for(let i=0 ;i <arr.length;i++){
//         sum+= arr[i];
//     }

//     return (sum/arr.length);
// }

// console.log(avg([10,20,30,40,50]));

// let iseven = n => (
//     (n%2 == 0)
// );

// console.log(iseven(4))

// const object = {
//     message: "hELLW WORLD",

//     longmessage() {
//         console.log("this.message");
//     }
// }

// setTime

// let length =4;

// function callback() {
//     console.log(this.length);
// }

// const object = {
//     length:5,
//     method(callback){
//         callback();
//     },

// };

// object.method(callback, 1,2 );

