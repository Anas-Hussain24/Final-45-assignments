//Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error.

// Create an array of fruits
let fruits: string[] = ["Apple", "Mango", "Banana", "Grapes", "Orange"];

//access element at an invalid index to produce an error
console.log("Accessing an element at an invalid index:", fruits[5]); // This line will cause an array index error

// Correcting the error
// correct the error, we can access an element at a valid index
console.log("Accessing the first element of the array:", fruits[0]);
