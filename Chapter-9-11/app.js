// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

// let city=prompt("Enter a City Name")
// if (city=="karachi"){
//     console.log("Welcome to City of light")
// }
// else{
//     console.log("Please enter city name")
// }



// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

// let gender=prompt("Enter a Gender")
// if (gender=="male"){
//     console.log("Good Morning Sir")
// }else if(gender== "female"){
//     console.log("Good Morning Ma'am")
// }
// else{
//     console.log("Please enter gender")
// }



// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:

// let signalsColor=prompt("Enter a Traffic Light Color")
// if (signalsColor=="red"){
//     console.log("Must Stop")
// }else if(signalsColor== "yellow"){
//     console.log("Ready to Move")
// }else if(signalsColor== "green"){
//     console.log("Move Now")
// }
// else{
//     console.log("Please enter Traffic Light Color ")
// }



// 4. Write a program to take input remaining fuel in car (in
//     litres) from user. If the current fuel is less than 0.25litres,
//     show the message “Please refill the fuel in your car”

// let fuel=+prompt("Enter a current fuel status")
// if (0.25<fuel){
//     console.log("Normal Fuel condition")
// }
// else{
//     console.log("Please refill the fuel in your car")
// }




// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.

//  var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
//  var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
//  var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
//  if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
//  if("car" < "cat"){
//     alert("car is smaller than cat");
//     }


// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:

// let obtainMarksEnglish = +prompt("Enter your English Marks");
// let obtainMarksMath = +prompt("Enter your Math Marks");
// let obtainMarksUrdu = +prompt("Enter your Urdu Marks");
// let totalObtainMarks=obtainMarksEnglish+obtainMarksMath+obtainMarksUrdu;
// let totalMarks=300;
// let percentage=totalObtainMarks/totalMarks*100;

// if(percentage>= 90){
//     document.write("<h1>Marks Sheet</h1>"+"Total Marks : "+totalMarks+"<br>"+
//     "ObtainMarks : "+totalObtainMarks+"<br>"+
//     "Percentage : "+percentage+"%"+"<br>"+
//    "Grade : "+"Top-postion"+"<br>"+
//    "Remarks : "+"Your Genius");
// }
// else if(percentage>=80){
//     document.write("<h1>Marks Sheet</h1>"+"Total Marks : "+totalMarks+"<br>"+
//     "ObtainMarks : "+totalObtainMarks+"<br>"+
//     "Percentage : "+percentage+"%"+"<br>"+
//    "Grade : "+"A-one"+"<br>"+
//    "Remarks : "+"Excellent");
// }
// else if (percentage>=70){
//     document.write("<h1>Marks Sheet</h1>"+"Total Marks : "+totalMarks+"<br>"+
//     "ObtainMarks : "+totalObtainMarks+"<br>"+
//     "Percentage : "+percentage+"%"+"<br>"+
//    "Grade : "+"A"+"<br>"+
//    "Remarks : "+"Good");
// }
// else if(percentage>=60){
//     document.write("<h1>Marks Sheet</h1>"+"Total Marks : "+totalMarks+"<br>"+
//     "ObtainMarks : "+totalObtainMarks+"<br>"+
//     "Percentage : "+percentage+"%"+"<br>"+
//    "Grade : "+"B"+"<br>"+
//    "Remarks : "+"You need to improve");
// }
// else{
//     document.write("<h1>Marks Sheet</h1>"+"Total Marks : "+totalMarks+"<br>"+
//     "ObtainMarks : "+totalObtainMarks+"<br>"+
//     "Percentage : "+percentage+"%"+"<br>"+
//    "Grade : "+"Fail"+"<br>"+
//    "Remarks : "+"sorry");
// }


// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

// let userInput=+prompt("Enter a number");
// let number=5;
// if (userInput==number){
//     console.log("“Bingo! Correct answer”.");
// }else if(userInput==6){
//     console.log("“Close enough to the correct answer”.");
// }else{
//     console.log("incorrect number");
// }



// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.

// let userInput=+prompt("Enter a Number");
// if(userInput%3==0){
    //     console.log("Divisible by 3");
    // }else{
        //     console.log(" Not Divisible by 3")
        // }
        
        
        
// 9. Write a program that checks whether the given input is an
        // even number or an odd number.
        
    // let userInput=+prompt("Enter a Number");
    // if(userInput%2==0){
    //     console.log("Even Number");
    // }
    // else{
    //     console.log("Odd Number");
    // }




//     10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”
    
// let userInput=+prompt("Enter a temperature");
// if(userInput>= 40){
//     console.log("It is too hot outside.");
// }
// else if(userInput>=30){
//     console.log("The Weather today is Normal.");
// }
// else if (userInput>=20){
//     console.log("Today’s Weather is cool.");
// }
// else{
//     console.log("OMG! Today’s weather is so Cool.");
// }




// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

// let userInput1=+prompt("Enter a Value1 ");
// let userInput2=+prompt("Enter a Value2");
// let Operator=prompt("Enter a Operator");
// if(Operator=="+"){
//     console.log(userInput1+userInput2);
// }
// else if(Operator== "-"){
//     console.log(userInput1-userInput2);
// }
// else if (Operator=="*"){
//     console.log(userInput1*userInput2);
// }
// else if (Operator=="/"){
//     console.log(userInput1/userInput2);
// }
// else if (Operator=="%"){
//     console.log(userInput1%userInput2);
// }
// else{
//     console.log("Please Enter a Value");
// }