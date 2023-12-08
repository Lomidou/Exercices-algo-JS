function MinMaxElem(arr){
    if (arr.length === 0){
        return "The array is empty";
    }


let min = arr[0];
let max = arr[0];

for (let i=0; i < arr.length; i++){
    if (arr[i]<min){
        min=arr[i];
    }
    else if(max<arr[i]){
        max=arr[i];
    }
}
return{min, max};
}

const array=[3, 5, 7, 1, 2];
const result = MinMaxElem(array);
console.log(`Minimum Element: ${result.min}`);
console.log(`Maximum Element: ${result.max}`);