"use strict";
// Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
let guestList = ["Miss Hina", "Sir Zia", "Sir Daniyal"];
let i = 0;
// Print invitation message using a while loop
while (i < guestList.length) {
    console.log(`Dear ${guestList[i]}, you're invited to dinner.`);
    i++;
}
