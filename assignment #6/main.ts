//Stripping Names: Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.


let personName: string = "\t\n   Babar Azam   \t\n";
console.log("Name with whitespace:", personName);

let strippedName: string = personName.trim();
console.log("Stripped name:", strippedName);
