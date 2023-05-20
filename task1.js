//get any random number from dice
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
    console.log (getRndInteger(1,6));
}

//organize students name alphabetically
const students = ["Runi", "Orin", "Apple", "Mantasha","Bina"];
console.log(students.sort());

//organize students roll in ascending order
const student_roll=[44,77,88,99,11,90];
console.log(student_roll.sort(function(a,b){
    return a-b;
}))

//leap year task