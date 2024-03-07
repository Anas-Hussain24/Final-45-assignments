//Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

let guestList: string[] = ["Miss Hina", "Sir Zia", "Sir Daniyal"];

// Print invitation message and guest using a while loop
let i: number = 0;
while (i < guestList.length) {
    console.log(`Dear ${guestList[i]}, you're invited to dinner.`);
    i++;
}

// Identify the guest who can't make it
let guestBusy: string = guestList[1];
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

// Inform that only two people can be invited for dinner
console.log("\nSorry, we can only invite two people for dinner.");

// Remove guests from the list until only two names remain
while (guestList.length > 2) {
    let removedGuest: string = guestList.pop()!;
    console.log(`Sorry ${removedGuest}, we can't invite you to dinner.`);
}

// Print invitation messages to the remaining two guests
console.log(`\nDear ${guestList[0]} and ${guestList[1]}, you're still invited to dinner.`);

// Remove the last two names from the list
guestList.pop();
guestList.pop();
console.log("Remove last two names");

// Print the list to make sure it's empty
console.log("\nRemaining guest list:", guestList);
