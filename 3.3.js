
let num = [0, 1, 2, 3];
let num2 =  [4, 5, 6, 7];
let x = 0;

num2.length = num.length;

while (x < num.length){
    num2[x] = num[x];
    x++;
}

console.log(num2);



