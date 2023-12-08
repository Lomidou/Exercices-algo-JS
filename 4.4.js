let arr = ["Thomas", "Huseyin", "Marvin", "Nicolas", "Joshua"]; 
let max = 5
let min = 1
function pickLearner(inputAr, n){
    return Array.from({ length: n }, () => inputAr[Math.floor(Math.random() * inputAr.length)]);
}

let numoflearner = Math.floor(Math.random() * (max - min + 1)) + min;

randomLearners = pickLearner(arr, numoflearner);
console.log(randomLearners);



