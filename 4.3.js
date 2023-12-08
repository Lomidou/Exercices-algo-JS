let n = window.prompt("Donne moi un nombre");
let x = 0;
let randomNumbers = [];



function multiRand(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

while (x < n){
    randomNumbers.push(multiRand(1,10));
    x++;
};

console.log(randomNumbers);



