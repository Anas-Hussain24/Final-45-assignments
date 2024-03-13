"use strict";
//Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let number of numbers) {
    let ordinal;
    if (number === 1) {
        ordinal = number + "st";
    }
    else if (number === 2) {
        ordinal = number + "nd";
    }
    else if (number === 3) {
        ordinal = number + "rd";
    }
    else {
        ordinal = number + "th";
    }
    console.log(ordinal);
}
