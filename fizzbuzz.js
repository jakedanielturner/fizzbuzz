// Fizzbuzz main project file

/* Plan of action
1. Create a variable to store the target number
2. Define fizz, buzz and fizzbuzz
3. Create for loop to run through the numbers until the target number, outputting to the console the result of each
4. Profit
*/

const target = 0;
// This is the number the programme will run to - change it!

const fizz = 3;
const buzz = 5;
// These have been predefined meaning the user can easily change them later, if they wanted to change the rules of the game.

const playGame = (target) => {
    for (i=0; i++; i < (target+1)) {
        if ((i % fizz) && (i % buzz)) {
            console.log("Fizzbuzz");
        }
        // This code block checks if the number is both a multiple of three and five
    
        if (i % fizz) {
            console.log("Fizz");
        }
        // This code block checks if the number is just a multiple of three
    
        if (i % buzz) {
            console.log("Buzz");
        }
        // This code block checks if the number is just a mutliple of five

        else {
            console.log(i);
        }
        // If all code blocks above have failed, then the number is not a multiple of either and is outputted to the console as is.
    }
}
