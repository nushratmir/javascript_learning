// class Car {
//     constructor(name, year) {
//         this.name = name;
//         this.year = year;
//     }
//     age() {
//         const date = new Date();
//         return date.getFullYear() - this.year;
//     }
// }

// const myCar = new Car("Ford", 2014);


//find the biggest string from array and index
// function longestString(listName){
//     let longestWord="";
//     for(name of listName){
//         if(name.length>longestWord.length){
//             name =longestWord;
//         }
//     }
//     return [longestWord,listName.indexof(longestWord)];
// }
//
// console.log(longestString(["tina","jamil","nushrat","ria","tirumony"]));

const person = {
    name: "John",
    age: 30,
    city: "New York"
};

let stringfy = JSON.stringify(person)
let parsed = JSON.parse(stringfy)

console.log(parsed.age);
