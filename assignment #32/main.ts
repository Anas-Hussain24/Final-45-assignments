//Checking Usernames: create a program that simulates how websites ensure that everyone has a unique username.

let current_users: string[] = ["aliza" ,"anas", "AHMED", "aliyan", "Mehar"];
let new_users: string[] = ["Sadiq", "ahmed", "hassan", "MEHAR", "Salman"];

for (let i = 0; i < new_users.length; i++) {
    let usernameExists = false;
    for (let j = 0; j < current_users.length; j++) {
        if (new_users[i].toLowerCase() === current_users[j].toLowerCase()) {
            usernameExists = true;
            break;
        }
    }
    if (usernameExists) {
        console.log(`Sorry, the username "${new_users[i]}" is already taken. Please enter a new username.`);
    } else {
        console.log(`Congratulations! The username "${new_users[i]}" is available.`);
    }
}


