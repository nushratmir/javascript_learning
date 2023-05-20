//get any random number from dice
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
    console.log (getRndInteger(1,6));
}

//organize students name alphabetically
const students = ["Runi", "Orin", "Apple", "Mantasha","Bina"];
console.log(students.sort());
