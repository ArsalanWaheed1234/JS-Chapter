// 1. Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.

// var firstNumber=+prompt("Enter Your First Number");
// var secondNumber=+prompt("Enter Your Second Number");
// document.write("Sum of " +firstNumber +" and "+secondNumber+" is "+(firstNumber + secondNumber));


// 2. Repeat task1 for subtraction, multiplication, division &
// modulus.
// var firstNumber=+prompt("Enter Your First Number");
// var secondNumber=+prompt("Enter Your Second Number");
// document.write("Subtraction of " +firstNumber +" and "+secondNumber+" is "+(firstNumber - secondNumber));

// var firstNumber=+prompt("Enter Your First Number");
// var secondNumber=+prompt("Enter Your Second Number");
// document.write("Multiplication of " +firstNumber +" and "+secondNumber+" is "+(firstNumber * secondNumber));


// var firstNumber=+prompt("Enter Your First Number");
// var secondNumber=+prompt("Enter Your Second Number");
// document.write("Division of " +firstNumber +" and "+secondNumber+" is "+(firstNumber / secondNumber));


// var firstNumber=+prompt("Enter Your First Number");
// var secondNumber=+prompt("Enter Your Second Number");
// document.write("Modulus of " +firstNumber +" and "+secondNumber+" is "+(firstNumber % secondNumber));


// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial
// value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value
// after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value
// by 3.
// l. Output : “The remainder is : 0”.

// let number ;
// document.write("“Value after variable declaration is: "+ number+ "<br>");
// number=5;
// document.write("Initial Value: "+number +"<br>");
// number=++number;
// document.write("Value after increment is: "+number +"<br>");
// number=number+7;
// document.write("Value after addicition is: "+number +"<br>");
// number=--number;
// document.write("Value after decrement is: "+number +"<br>");
// number= number % number;
// document.write("The remainder is: "+number +"<br>");


// 4. Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie. Example output:
 
// var personQuantity=+prompt("How many tickets do you have");
// var ticketPrice=+prompt("Enter your ticket amount");
// var amount=ticketPrice*personQuantity;
// document.write("Total cost to Buy "+personQuantity+" Tickets to a Movie is "+ amount+"PKR");


// 5. Write a script to display multiplication table of any
// number in your browser. E.g

// var table=+prompt("Enter your Number");
// document.write(table +" x "+" 1 "+" = "+ table*1 +"<br>");
// document.write(table +" x "+" 2 "+" = "+ table*2 +"<br>");
// document.write(table +" x "+" 3 "+" = "+ table*3 +"<br>");
// document.write(table +" x "+" 4 "+" = "+ table*4 +"<br>");
// document.write(table +" x "+" 5 "+" = "+ table*5 +"<br>");
// document.write(table +" x "+" 6 "+" = "+ table*6 +"<br>");
// document.write(table +" x "+" 7 "+" = "+ table*7 +"<br>");
// document.write(table +" x "+" 8 "+" = "+ table*8 +"<br>");
// document.write(table +" x "+" 9 "+" = "+ table*9 +"<br>");
// document.write(table +" x "+" 1 0"+ " ="+ table*10);



// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.

// var celsius=+prompt("Enter your Celsius" )
// var Fahrenheit=+prompt("Enter your Fahrenheit" )

// celsius=(Fahrenheit-32)*5/9;
// Fahrenheit=(celsius*9/5)+32;
// document.write(celsius+" <sup>0</sup>C " +" is" +Fahrenheit+" <sup>0</sup>F " +"<br>")
// document.write(Fahrenheit+" <sup>0</sup>F " + "is "+celsius+" <sup>0</sup>C ")



// 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables

// let shirtOrder=+prompt("shirts order");
// let shirtsQuantity=+prompt("Tell me your shirts Quantity")
// let shirtPrice=650;
// let pantsOrder=+prompt("pents order");
// let pantsQuantity=+prompt("Tell me your pents Quantity")
// let paintsPrice=100;
// let shipping=100;
// let totalShirts=shirtsQuantity*shirtPrice;
// let totalpants=pantsQuantity*paintsPrice;
// document.write("Price of item "+shirtOrder+ " is "+shirtPrice +"<br>");
// document.write("Quantity of item "+shirtOrder+ " is "+shirtsQuantity +"<br>");
// document.write("Price of item "+pantsOrder+ " is "+paintsPrice +"<br>");
// document.write("Quantity of item "+pantsOrder+ " is "+pantsQuantity +"<br>");
// document.write("Shipping Charges "+ shipping +"<br>");
// document.write("Total cost of your is" + (totalShirts + totalpants + shipping));



// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser

// let totalMarks=+prompt("Enter your Total Marks");
// let obtMarks=+prompt("Enter your Obtain Marks");
// let percentage=(obtMarks/totalMarks)*100;
// document.write("Total Marks "+totalMarks + "<br>");
// document.write("Obtain Marrks "+obtMarks + "<br>");
// document.write("Percentage :"+percentage+"%");


// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)

// let saudi=+prompt("Enter your Saudi Riyal");
// let dollar=+prompt("Enter your Dollar");
// let saudiRiyal=28*saudi;
// let dollarRate=104.80*dollar;
// // let totalSaudi=saudi*sau
// document.write("Saudi Riyal convert to PKR "+saudiRiyal+"<br>")
// document.write("Dollar Convart to PKR "+dollarRate+" <br>");
// document.write("Total Amount is "+(dollarRate + saudiRiyal))
