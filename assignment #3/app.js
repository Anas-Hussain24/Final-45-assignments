"use strict";
let personName = "Fazal Bakhash";
// Print in lowercase
console.log("Lowercase:", personName.toLowerCase());
// Print in uppercase
console.log("Uppercase:", personName.toUpperCase());
// Print in titlecase
function TitleCase(personName) {
    let userName = personName.split(" ");
    let titlecaseName = "";
    for (let i = 0; i < userName.length; i++) {
        titlecaseName += userName[i].charAt(0).toUpperCase() + userName[i].slice(1).toLowerCase() + " ";
    }
    return titlecaseName.trim(); // Trim to remove extra space at the end
}
let titleCaseName = TitleCase(personName);
console.log("Titlecase:", titleCaseName);
