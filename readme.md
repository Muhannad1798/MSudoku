//----------------------------------------------------------constant
First the constants
Button is constant to get the start button value from html page
messageEl is constant to get the message value from html
sec is constant to get the section value from html
cNumbers is constant to get the section value from html
mCount is constant to get the numbers from html

a is a two dimensional array that holds would be used to fill the board
righta is a dimensional array that holds the right solution for each array in a

//------------------------------------------------------------variables

emtt a variable that holds a boolean value return true of false to check if the square is empty or no
lasSqr a variable holds a number value of the last selected square
sNum a variable to select the numbers under the board
m a variable holds number of mistakes
loser holds a boolean to check if the user has lost the game
let sq a variable to select the square in the board
let createNumbers to create the numbers under the board
let creatB to create a button

a1,a2,a3,a4,a5,a6,a7,a8,a9 to count how many times each number was used in the board

//------------------------------------------------------------functions

startBoard() is a function uses for loop to create each square and puts them under section and gives them a class name and a uniq id for each square, 81 square and calls rightBorder().
And after the for loop it hides the button and shows the numbers under the board and changes the message then adds an event listener for each square and calls handleClick() for each click on any square. After that it starts filing the board by calling fillBoard() and creates the number under the board by calling createNum()

createNum() is a function to create the numbers under the board firs a variable x to gives the value for each number a for loop to create the numbers and put them in the section under the board gives each number its uniq id and value and increase x by 1 in the end of the loop to be used for the next number

clickNum() is a function first it reset the values if a1,a2..a9 to 0 then it scan all the squares using for each and get the each value and increase a1 if square have 1 and so on for each number till number 9 and a9

catchNum() it calls clickNum() and check if each number how many times its value is on the board if it is equal to 9 the function hides it

rightBorder() a function to shape the board it has 4 for loops first for loop takes square number 2 and all the squares in its column and changes the border on the right the second for loops takes square number 5 and all squares in its column and changes the border on the right third for loop takes square 27 and all the squares in the same row and changes the border on the top the last for loop takes square 54 and all the squares in the same row and changes the border on the top

fillBoard a function calls all the squares in the board store them in sq and uses math.random to choose a number from 0 to length of the array a and store the number in sNum and uses for each for sq values to fill the numbers on the board from the array a and a chooses the value of which array inside it using sNum

handleClick() function it just calls three functions inside isEmpty() to check if empty shadowBoard() to show the number on the board, mBoard() to highlight the row column and block of the selected square



https://muhannad1798.github.io/MSudoku/

isEmpty() takes an event passes from handleClick() and checks the value if it is not empty update the value of emptt to false and lasssqr to the id of event and calls selectedSqr(eve) and passes the event value. then it check the color of the text in the square and update the value of emtt and calls selectedSqr(eve) with the event. and if none of the above statements are met it changes the value of lassqr and update emtt to true and calls selectedSqr(eve)
