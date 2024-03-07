"use strict";
//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
let guestList = ["Miss Hina", "Sir Zia", "Sir Daniyal"];
// Print invitation message and guest using a while loop
let i = 0;
while (i < guestList.length) {
    console.log(`Dear ${guestList[i]}, you're invited to dinner.`);
    i++;
}
// Identify the guest who can't make it
let guestBusy = guestList[1];
console.log(`\n ${guestBusy} can't join dinner.`);
// Replace the name of the guest who can't make it with the name of the new person you are inviting
guestList[1] = "Sir Ahmed";
// Print a second set of invitation messages using a while loop
console.log("\nSecond set of invitation messages:");
i = 0;
while (i < guestList.length) {
    console.log(`Dear ${guestList[i]}, you're still invited to dinner.`);
    i++;
}
//bigger dinner table Info
console.log("\nGood news! We found a bigger dinner table.");
// Add three new guests
guestList.push("Miss Ayesha"); // Add to the end
guestList.unshift("Sir Ali"); // Add to the beginning
guestList.splice(Math.floor(guestList.length / 2), 0, "Sir Bilal"); // Add to the middle
// Print invitation messages to all guests
console.log("\nFinal invitation messages:");
i = 0;
while (i < guestList.length) {
    console.log(`Dear ${guestList[i]}, you're invited to dinner.`);
    i++;
}
