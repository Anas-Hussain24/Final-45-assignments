"use strict";
// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
let guestList = ["Miss Hina", "Sir Zia", "Sir Daniyal"];
// Print invitation message to each person using a for loop
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]}, you're invited to dinner.`);
}
// Identify the guest who can't make it
let guestBusy = guestList[1];
console.log(`\n ${guestBusy} can't join dinner.`);
// Replace the name of the guest who can't make it with the name of the new person you are inviting
guestList[1] = "Sir Ahmed";
// Print a second set of invitation messages using a for loop
console.log("\nSecond set of invitation messages:");
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]}, you're still invited to dinner.`);
}
// Print the number of people invited to dinner
console.log(`\nI am inviting ${guestList.length} people to dinner.`);
