//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function make_Shirt(size: string = 'large', message: string = 'I love TypeScript'): string {
    return `You ordered a ${size} sized t-shirt with the message: "${message}".`;
}

// Making a large shirt with the default message
const largeShirt: string = make_Shirt();
console.log(largeShirt);

// Making a medium shirt with the default message
const mediumShirt: string = make_Shirt('medium');
console.log(mediumShirt);

// Making a shirt of any size with a different message
const customShirt: string = make_Shirt('small', 'The World of coding 💻');
console.log(customShirt);
