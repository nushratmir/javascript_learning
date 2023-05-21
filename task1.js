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

//count vawel from a sentence
const vowel =["a","e","i","o", "u", "A","E","I","O","U"];

function checkVowel(sentence) {
    let count = 0;
    const letters = Array.from(sentence);

    letters.forEach(function (value) {
        if (vowel.includes(value)) {
            count++;
        }
    });
    console.log(count)
}

console.log(checkVowel("I love Bangladesh"));





