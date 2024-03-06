//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

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
