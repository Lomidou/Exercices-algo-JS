let n = window.prompt("Give me a number"); 

let x = 1; 
let result = 0;

while (x <= n){ 
   let number = window.prompt("Give me a number");
    result += Number(number);
    x++;
}

console.log(result);

alert("The addition is " + result)