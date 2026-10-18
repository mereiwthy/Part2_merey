//task 6 

const fullName = "Merey";
const isStudent = true;
let age = 18;
let favoriteColor = "Blue";

console.log(fullName, typeof fullName);
console.log(age, typeof age);
console.log(isStudent, typeof isStudent);
console.log(favoriteColor, typeof favoriteColor);

favoriteColor = "Black";
console.log("New favorite color:", favoriteColor);

//task 7 

const userName = prompt("Enter your name:", "Merey");
alert(`Welcome, ${userName}`);

const userGroup = "MT 2506";
const greetingMessage = `Hello, my name is ${userName} and I study in group ${userGroup}.`;
console.log(greetingMessage);

// task 8 

let input1 = prompt("Enter first number:", "12");
let input2 = prompt("Enter second number:", "5");

let num1 = Number(input1);
let num2 = Number(input2);

console.log("Sum:", num1 + num2);
console.log("Difference:", num1 - num2);
console.log("Product:", num1 * num2);
console.log("Quotient:", num1 / num2);
console.log("Remainder:", num1 % num2);

// task 9 
const myName = "Merey";

console.log("Length:", myName.length);
console.log("Uppercase:", myName.toUpperCase());
console.log("Lowercase:", myName.toLowerCase());
console.log("First 3:", myName.slice(0, 3));

const first = " Ayana ";
const second = " Malades";
console.log( first + second);

// task 10 

let counter = 10;
console.log("Initial:", counter);

counter++;
console.log("Plus ++:", counter);
counter--;
console.log("Minus --:", counter);
counter += 5;
console.log("After += 5:", counter);
counter -= 3;
console.log("After -= 3:", counter);
counter *= 2;
console.log("After *= 2:", counter);
counter /= 4;
console.log("After /= 4:", counter);


// task 11

function calculateHumanAge(dogAge) {
    let humanAge = (dogAge - 2) * 4 + 21;
    console.log(`Dog age ${dogAge} is equal to ${humanAge} human years.`);
}

calculateHumanAge(2);
calculateHumanAge(5);

// task  12

function greetUser(name) {
    console.log(`Hello, ${name}! Welcome!!!`);
}
greetUser("Merey");

function calculateSum(a, b) {
    return a + b;
}
console.log("Sum 1:", calculateSum(21, 31));
console.log("Sum 2:", calculateSum(17, 50));

function calculateArea(width, height) {
    return width * height;
}
console.log("Area 1:", calculateArea(3, 6));
console.log("Area 2:", calculateArea(13, 7));