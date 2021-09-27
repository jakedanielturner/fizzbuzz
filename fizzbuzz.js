// Fizzbuzz main project file

const target = 100;
// This is the number the programme will run to - change it!

const fizz = 3;
const buzz = 5;
// These have been predefined meaning the user can easily change them later, if they wanted to change the rules of the game.

const fizzOrBuzz = num => {
    if ((num % fizz) === 0 && (num % buzz) === 0) {
        return ("fizzbuzz");
    }
    // This block of code checks if the given number is a multiple of both fizz and buzz

    else if ((num % fizz) === 0) {
        return ("fizz");
    }
    // This block of code checks if the given number is a multiple of fizz

    else if ((num % buzz) === 0) {
        return ("buzz");
    }
    // This block of code checks if the given number is a multiple of buzz

    else {
        return i;
    }
    // If the number is neither a multiple of fizz or buzz, it is returned by itself
}

for (i=1; i<(target+1); i++) {
    console.log(fizzOrBuzz(i));
}
// Finally, the list of numbers is cycled through and the result of the function check is logged to the console, producing our list

