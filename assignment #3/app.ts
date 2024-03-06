//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.


let personName: string = "Fazal Bakhash";

// Print in lowercase
console.log("Lowercase:", personName.toLowerCase());

// Print in uppercase
console.log("Uppercase:", personName.toUpperCase());

// Print in titlecase
function TitleCase(personName: string): string {
    let userName: string[] = personName.split(" ");
    let titlecaseName: string = "";

    for (let i = 0; i < userName.length; i++) {
        titlecaseName += userName[i].charAt(0).toUpperCase() + userName[i].slice(1).toLowerCase() + " ";
    }

    return titlecaseName.trim(); // Trim to remove extra space at the end
}
let titleCaseName: string = TitleCase(personName);
console.log("Titlecase:", titleCaseName);