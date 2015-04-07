
/****
Document Begin
****/
document.writeln("<div class = 'container' >");

title("Hello");


document.writeln('<h1 class="page-header text-center">Ok JavaScript is about to cook some html chorchori</h1>');
window.alert("Welcome to JavaScript programming");

var name;

name = window.prompt("Please enter your name", "Your Name");
document.writeln('<h1 class="page-header text-center">Hello ' +name+ ', how are you?');


/****
Addition
****/
document.writeln(titleStart+"Addition"+titleEnd);

document.writeln('<h1 class="page-header text-center">Ok, so lets move on to some maths</h1>');
var firstNumber, secondNumber, number1, number2, sum;

firstNumber = window.prompt("Enter a number","...any number");
secondNumber = window.prompt("Enter another number", "another number");

number1 = parseInt(firstNumber);
number2 = parseInt(secondNumber);
sum = number1 + number2;
document.writeln('<h3 class="page-header text-center">The sum of the two number is ' + sum+ '</h3>');



/****
While Loop
****/
document.writeln(titleStart+"while loop"+titleEnd);

document.writeln('<p> Its time for some dynamic font size, it will be chorom fun</p>');
document.writeln('I will increase the font size below one by one');        
var i = 0;
while(i <= 4){
    document.writeln("<p style=' font-size:"+i*5+"em; margin-left:"+i*30+"px; '>This is</p>");
    if(i == 4)
        document.writeln("<h1 class='page-header' style= 'font-size: " +i*5+ "em; '>SPARTA</h1>");        
    i++;
}


/****
For Loop
****/

document.writeln(titleStart+"for-loop"+titleEnd);

for(var j=0; j<5; j++){
    document.writeln("<p style='font-size: " +j*4+ "em; '>The for loop</p>");
}

var sum = 0;
for(var number = 2; number <= 100; number+=2)
    sum += number;

document.writeln("<h1 class='page-header text-center'>So as you all curious mind would be asking in the mind; the sum of even integers is "+sum+"</h1>");


/*****
List Type
*****/
document.writeln("<h1 class='alert alert-success text-center' style=' font-size:5em; text-transform: uppercase' >List Types</h1>");

var startTag;
var endTag = "</ol>";
var listType;
var one = "list-style-type: numbered";
var two = "list-style-type: upper-roman";
var three = "list-style-type: lower-alpha";
var validInput;

document.writeln("<h4 class='page-header'>1(numbered) , 2(upper-roman), 3(lower-alpha)</h4>");
listType = window.prompt("Select list type \n"+"1(numbered) , 2(upper-roman), 3(lower-alpha)",1);

switch(listType){
    case "1":
        startTag = "<ol style='"+one+"'>";
        break;
    case "2":
        startTag = "<ol style = '"+two+"'>";
        break;
    case "3":
        startTag = "<ol style=' " +three+ " '>";
        break;
    default:
        startTag = "<ol style=' " +three+ " '>";
}


document.writeln(startTag);

for(var i=0; i<=4; ++i){
    document.writeln("<li></li>");
}

document.writeln(endTag);

/****
do-while
****/
document.writeln(titleStart+"do-while"+titleEnd);

var i = 1;
do{
    document.writeln("<h3 class='page-header text-center' style='font-size:"+i+"em;'>We shall</h3>");
    if(i==4)
        document.writeln( "<h3 class='page-header text-center' style='font-size:"+i+"em;'>STRUGGLE</h3>");
    ++i;
}while(i<=4);

/*
Function Block
*/

title("Function");
title("Another topic");


document.writeln("</div>");