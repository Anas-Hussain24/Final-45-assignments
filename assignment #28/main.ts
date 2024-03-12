//Stages of Life: Write an if-else chain that determines a person’s stage of life

let age: number = 17;

if (age < 2 && age >= 1) {
    console.log("The person is a baby.");
} else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
} else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
} else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
} else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
} else if(age >= 65){
    console.log("The person is an elder.");
}else{
    console.log("show correct age");
}
