/*
Write a function called halfNumber() that accepts one argument (a number), divide it by 2, and return the result. It should log a string like "Half of 5 is 2.5.".
Write a function called squareNumber() that accepts one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
Write a function called percentOf() that accepts two numbers, figure out what percent the first number represents of the second number, and return the result. It should log a string like "2 is 50% of 4."
Write a function called findModulus() that accepts two numbers. Within the function write a statement that returns the modulus of the first and second parameters. It should log a string like "2 is the modulus of 4 and 10."
*/
//STEP 1
function halfNumber(num1){
    return num1/2
}
num = 5
result = halfNumber(num)
console.log('Half of ' + num + " is " + result)

//STEP 2
function squareNumber(num1){
    return num1 ** 2;
}
num = 5
result =squareNumber(num)
console.log('The result of squaring the number ' + num + " is " + result + ".")

//STEP 3
function percentOf(num1, num2){
return (num1/num2) *100

}
num1 = 2, num2 = 4;
result = percentOf(num1, num2)
console.log(num1 + " is " + result + "% of " + num2)

//STEP 4
function findModulus(num1, num2){
    return num2 % num1
}
num1 = 4, num2 = 10;
result = findModulus(num1, num2)
console.log(result + " is the modulus of " + num1 + " and " + num2)

