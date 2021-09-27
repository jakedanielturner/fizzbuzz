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
    
        if (i % fizz) {
            console.log("Fizz");
        }
    
        else if (i % buzz) {
            console.log("Buzz");
        }
    }
}
