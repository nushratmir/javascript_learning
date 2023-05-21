
//from playlist 1 (50/130)


// //JavaScript Syntax
// let y=10+5;
// console.log(y);
//
// //variable in javascript
// let x=5;//let can not be redeclared
// var y =6;
// var y=9;// var variable can redeclared
// var total = x+y;
// console.log(total);
//
// //javascript operations
// let text1 = "dom";
// let text2 = "Toretto";
// let add = text1 + " " + text2;
// console.log(add);
// console.log(typeof text1);//data type of the value
//
// //javascript function
// function convertCelsius(fahrenheit) {
//     return (5/9) * (fahrenheit-32); //calculate and return the value
// }
//
// let value = convertCelsius(77);
// console.log(value);
// //
// //
// // //javascript object
// const house = {type:"duplex", model:"Aw1q", color:"white"};
// console.log(house.model);
//
// //javascript string method
// const person = { //object declare
//     firstName:"Jahan",
//     lastName:"Mir",
//     age: 40,
//     eyeColor:"blue"};
//
// let humanBeing = "tara"; //its a string
// console.log(humanBeing.length); //when we are using method it become object
//  let x= humanBeing.slice(1,3);
//  console.log(x);
// //
// //
// //  //template literal
// let str1 ="mir";
// let str2 ="miru";
// let str3 ="mira";
//
// let completeStr = str1 + " "+str2 + " "+str3 ;
// let finalStr = `${str1} ${str2} ${str3}`;
//
// console.log(finalStr);
//
// //number methods
// let x = 123;
// let newN = x.toString();
// console.log(newN) ;
//
// //array
// const member=["rita","bina","tina"] ;
// for(i=0; i<member.length; i++){   //array iteration
// console.log(member[i]);
// }
//

//for in uses
const person = {fname:"Dom", lname:"Toretto", age:25};

let text = "";
for (let x in person) {
    text += person[x];
}








