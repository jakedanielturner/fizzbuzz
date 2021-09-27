# Fizzbuzz project
This project was inspired by the Tom Scott video, available at https://www.youtube.com/watch?v=QPZ0pIK_wsc

## Introduction
The aim of this project is to create a Javascript programme, capable of playing the childrens game of Fizzbuzz. Simply, two players count up from zero, in turns. When the number is a multiple of three, the number is replaced with Fizz. When the number is a multiple of five, the number is replaced with Buzz. When the number is a multiple of both, the number is replaced with Fizzbuzz. If the number is a multiple of neither, the number is called out, unchanged.

## Explanation of code
There are comments through the code to explain how it works, but I will also outline it here:
1. A target number is set - this is the number the programme will count to.
2. Fizz and buzz mulitples are defined - this allows the user to modify the programme to use different numbers if they wished,
say multiples of six and seven, instead  
3. A function is created which takes a number as an input, and then uses a series of if statements to determine whether it is a multiple of either of the defined fizz or buzz (or both) values, and then returns the result.
4. Finally, a for loop cycles through all the numbers between one and the target number, passes it in to the function and then outputs the result to the console, creating our list of fizzbuzz.

## Technologies
- Javascript
- Node