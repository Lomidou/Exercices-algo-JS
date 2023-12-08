let num = window.prompt ("Give me a number between 1 and 7");

if (num == "1"){
    console.log("It's monday!");
}
if (num == "2"){
    console.log("It's tuesday!");
}
if (num == "3"){
    console.log("It's wednesday!");
}
if (num == "4"){
    console.log("It's thursday!");
}
if (num == "5"){
    console.log("It's friday!");
}
if (num == "6"){
    console.log("It's saturday!");
}
if (num == "7"){
    console.log("It's sunday!");
}
else if ((num > "7") || (num <= "0")){
    console.log("It's error!");
}