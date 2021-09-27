// Fizzbuzz main project file

/* Plan of action
1. Create a variable to store the target number
2. Define fizz, buzz and fizzbuzz
3. Create for loop to run through the numbers until the target number, outputting to the console the result of each
4. Profit
*/

const target = 100;
// This is the number the programme will run to - change it!

const fizz = 3;
const buzz = 5;
// These have been predefined meaning the user can easily change them later, if they wanted to change the rules of the game.

const playGame = target => {
    for (i=0; i < (target+1); i++) {
        if ((i % fizz) === 0 && (i % buzz) === 0) {
            console.log("Fizzbuzz");
        }
        // This code block checks if the number is both a multiple of three and five
    
        else if ((i % fizz) === 0) {
            console.log("Fizz");
        }
        // This code block checks if the number is just a multiple of three
    
        else if ((i % buzz) === 0) {
            console.log("Buzz");
        }
        // This code block checks if the number is just a mutliple of five

        else {
            console.log(i);
        }
        // If all code blocks above have failed, then the number is not a multiple of either and is outputted to the console as is.
    }
}

/* Refactoring plan:
1. Create seperate function to return a number or word based on the current value
2. Output such value to the console
*/

const fizzOrBuzz = num => {
    if ((num % fizz) === 0 && (num % buzz) === 0) {
        return ("fizzbuzz");
    }

    else if ((num % fizz) === 0) {
        return ("fizz");
    }

    else if ((num % buzz) === 0) {
        return ("buzz");
    }

    else {
        return i;
    }
}

for (i=1; i<(target+1); i++) {
    console.log(fizzOrBuzz(i));
}
