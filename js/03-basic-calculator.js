let result, firstNum, secondNum, task;
// ADD A FUNCTION CALLED CALCULATE
function calculate(num1, num2, operation) {
    switch (true) {
        case (operation == 'add'): {
            return num1 + num2;
            break;
        }
        case (operation == 'subtract'): {
            return num1 - num2;
            break;
        }
        case (operation == 'multiply'): {
            return num1 * num2;
            break;
        }
        case (operation == 'divide'): {
            return (num1 / num2).toFixed(2);
            // return num1 / num2;
            break;
        }
    }
}

//function to check that user is enter a number for calculations
function numberEntry(num){
    repeat = true;
    do{
        if(isNaN(num)){
            num = Number(prompt("Incorrect entry. Enter a number for calculation: "))
            repeat = true;
            continue
        }else { repeat = false}
    }while(repeat)
    return num;

}
// COLLECT FIRST NUMBER FROM USER
firstNum = Number(prompt("Enter the first number for calculation: "))
if(isNaN(firstNum)) { 
   firstNum = numberEntry(firstNum)
}
// COLLECT SECOND NUMBER FROM USER
secondNum = Number(prompt("Enter the second number for calculation: "))
if(isNaN(secondNum)) { 
    secondNum = numberEntry(secondNum)
 }

// COLLECT OPERghATION TO PERFORM (+,-,*,/) FROM USER
repeat = true;
task = prompt("Enter  the operation you would like to perform (add, subtract, multiply, divide): ").toLowerCase();
    // console.log(task);
do{
    if (task !== "add" && task !== "subtract" && task !== "multiply" && task !== "divide"){
            task = prompt("Incorrect choice. Enter  the operation you would like to perform (add, subtract, multiply, divide): ").toLowerCase();
            repeat = true;
            continue;
        }else {
            repeat = false;
        }
}while(repeat)

// CALL THE FUNCTION AND RETURN THE RESULT WITHIN AN ALERT
result = calculate(firstNum,secondNum,task);
alert(`The result of ${task} operation on ${firstNum}, ${secondNum} is: ${result}.`)

