// Write a program that creates Objects containing these items.

let fruitsInfo: { name: string, color: string, taste: string }[] = [
    { name: "Apple", color: "Red", taste: "Sweet" },
    { name: "Mango", color: "Yellow", taste: "Sweet" },
    { name: "Banana", color: "Yellow", taste: "Sweet" },
    { name: "Grapes", color: "Green", taste: "Tart" },
    { name: "Orange", color: "Orange", taste: "Sour" }
];

// Print information about each fruit
console.log("Information about fruits:");
for (let fruit of fruitsInfo) {
    console.log(`Name: ${fruit.name}, Color: ${fruit.color}, Taste: ${fruit.taste}`);
}
