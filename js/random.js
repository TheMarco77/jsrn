/* 
Make it more challeging BY asking for a low number "example 10" 
and a high number "example 25" and generate a random number in between
*/

// collect input from a user
const numberRequest = prompt('Please give a number!');

// collect another input from the user 

// Convert the input to a number
const number = parseInt(numberRequest);

    // use Math.random() and the user's input to generate a random number
    if (number) {
        const math = Math.floor( Math.random() * number) + 1;
        // Create a message displaying the random number
        console.log(`${math} is the random number between 0 and ${numberRequest}`);
    } else {
        console.log('You need to provide a number. Try again!');   
}