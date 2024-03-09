//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests.

// Tests for equality and inequality with strings
let password1 = 'password123';
let password2 = 'password456';
console.log("Is password1 equal to password2? I predict False.");
console.log(password1 == password2); // False

console.log("Is password1 not equal to password2? I predict True.");
console.log(password1 != password2); // True

// Tests using the lower case function
let color1 = 'BLUE';
let color2 = 'blue';
console.log("Are color1 and color2 equal after converting to lowercase? I predict True.");
console.log(color1.toLowerCase() == color2.toLowerCase()); // True

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
let number1 = 30;
let number2 = 20;
console.log("Is number1 greater than number2? I predict True.");
console.log(number1 > number2); // True

console.log("Is number1 less than or equal to number2? I predict False.");
console.log(number1 <= number2); // False

// Tests using "and" and "or" operators
let isLoggedIn = true;
let isAdmin = false;
console.log("Is the user logged in and an admin? I predict False.");
console.log(isLoggedIn && isAdmin); // False

console.log("Is the user logged in or an admin? I predict True.");
console.log(isLoggedIn || isAdmin); // True

// Test whether an item is in an array
let cars = ['Toyota', 'Honda', 'Ford'];
console.log("Is 'Toyota' in the cars array? I predict True.");
console.log(cars.includes('Toyota')); // True

// Test whether an item is not in an array
console.log("Is 'BMW' not in the cars array? I predict True.");
console.log(!cars.includes('BMW')); // True
