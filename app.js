//            ______CHAPTER # 01_______

// QUESTION NO:01
// Write a script to greet your website visitor using JS alert box. 

// alert('GOOD MORNING!')



// QUESTION NO:02
//  Write a script to display following message on your web page: 

// alert('Error! Please enter a valid password')



// QUESTION NO:03
// Write a script to display following message on your web page: (Hint : Use line break)

// alert('Welcome to JS Land... \n Happy coding!')



// QUESTION NO:04
//  Write a script to display following messages in sequence: 
// alert('Welcome to JS Land...')

// alert('Happy Coding! \n Prevent this apge from creating additional dialogs.')



// QUESTION NO:05
// Generate the following message through browser’s developer console: 

// alert('Hello... I can run JS through my web browsers console ')



// QUESTION NO:07
// Practice placement of <script></script> element in following sections of your project in exercise 6: 
// a. Head 
// b. Body (before your page’s HTML) 
// c. Body (inside your page’s HTML) 
// d. Body (after your page’s HTML) 

// THE OUTPUT WILL REMAIN SAME BY PLACING SCRIPT TAG INSIDE DIFFERENT TAGS.



//            ______CHAPTER # 02_______


// QUESTION NO:01
// Declare a variable called username. 

// var username=prompt('ENTER YOUR NAME');
// alert(username );



// QUESTION NO:02
// Declare a variable called myName & assign to it a string that represents your Full Name. 

// var myName;
// myName=("TANIA JABEEN")
// alert(myName);



// QUESTION NO:03
// Write script to
//  a) Declare a JS variable, titled message. 
//  b) Assign “Hello World” to variable message
//  c) Display the message in alert box. 

// var message;
// message=("Hello World!")
// alert(message);



// QUESTION NO:04
// Write a script to save student’s bio data in JS variables and show the data in alert boxes. 

// var username="TANIA JABEEN"
// var age="20 YEARS OLD"
// var course="CERTIFIED MOBILE APPLICATION DEVELOPMENT"
// alert(username);
// alert(age);
// alert(course);



// QUESTION NO:05
// Write a script to display the following alert using one JS variable: 

// var i, result, str;
// str = "pizza"
// for (var i = 5; i <= str.length; i--) {
//      result = str.substr(0,i)
//      alert(result)
// }



// QUESTION NO:06
// Declare a variable called email and assign to it a string that represents your Email Address(e.g. example@example.com). 
// Show the blow mentioned message in an alert box.(Hint: use string concatenation) 

// var email;
// email="taniyajabeen04@gmail.com"
// alert("My Email Address is" + " " + email)



// QUESTION NO:07
// Declare a variable called book & give it the value “A smarter way to learn JavaScript”.
//  Display the following message in an alert box: 

// var book;
// book="A smarter way to learn JavaScript."
// alert("I am trying to learn from the book" + " " + book)



// QUESTION NO:08
// Write a script to display this in browser through JS 

// document.write("Yah! I can write HTML content through JavaScript")



// QUESTION NO:09
// Store following string in a variable and show in alert 
// and browser through JS “▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬” 

// var a;
// a="▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬ "
// alert(a);



//            ______CHAPTER # 03_______


// QUESTION NO:01
// Declare a variable called age & assign to it your age. Show your age in an alert box. 

// var age;
// age="20 years old"
// alert("I am" + " " + age)



// // QUESTION NO:02
// Declare & initialize a variable to keep track of how many times a visitor has visited a web page.
//  Show his/her number of visits on your web page.
//   For example: “You have visited this site N times”. 

// var number = 14;
// alert("You have visited this site " + " " + number + " times")



// QUESTION NO:03
// Declare a variable called birthYear & assign to it your birth year.
//  Show the following message in your browser: 

// var birthYear;
// birthYear=1999;
// document.write("My birthday year is" + " "+ birthYear + "<br>" + 
// "Data type of my declared variable is  " +typeof(birthYear))



// QUESTION NO:04
// A visitor visits an online clothing store www.xyzClothing.com .
//  Write a script to store in variables the following information: 
//  a. Visitor’s name
//   b. Product title
//  c. Quantity i.e. how many products a visitor wants to order Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”. 

// var visitorName = "John Doe"
// var productTitle = "T-shirt"
// var Quantity = 5;
// document.write("<b>"+visitorName+ "<b/>"+ " " +"ordered " +"<b>"+Quantity+"<b/>"+ "<b>"+productTitle+"</b>"+ "(s)" + " on XYZ Clothing store"  )



//            ______CHAPTER # 04_______



// QUESTION NO:01
// Declare 3 variables in one statement. 

// var a="Hello Sir" ; b="Muhammad Ali"; c="Mughal"



// QUESTION NO:02
// Declare 5 legal & 5 illegal variable names.

// LEGAL VARIABLES

// var a1=20;
// var myName=30;
// var $a=5;
// var user_name=40;
// var _b=38;

// ILLEGAL VARIABLES

// var 1ali=5;
// var ?b=2;
// var /j=3;
// var for=9;
// var date=6;



// QUESTION NO:03
// Display this in your browser
//  a)  A heading stating “Rules for naming JS variables”
//   b)  Variable names can only contain ______, ______, ______ and ______. For example $my_1stVariable 
//   c) Variables must begin with a ______, ______ or _____. For example $name, _name or name 
//   d) Variable names are case _________ e) Variable names should not be JS _________   

// var alph="letter";
// var no="number";
// var dollor="$";
// var underscore="_";
// var a="letter ";
// document.write( "<h1>"+ "Rules for naming JS variables" + "</h1>" +"<br>" + "Variable names can only contain" + " " + alph +  " " + no + " "   + dollor +  " " + "and" + " " +  underscore + " " + "For example "+ "<b>" + "$my_1stVariable " + "<b>" + "</br>" + "Variable names can only contain " + alph + " " + dollor + " " + "or "+ underscore +  "<b>" + "$name, _name or name " + "<b>" +"<br>" + "Variable names are case sensitive"  +"<br>" + "Variable names should not be JS keywords")



//            ______CHAPTER # 05_______


// QUESTION NO:01
// Write a program that take two numbers & add them in a new variable. Show the result in your browser. 

// var a = 3;
// var b = 5;
// var c = a + b;
// document.write("sum of" +" "+ a + " " + "&"+ " " + b + " " + "is" +" "+ c)


// QUESTION NO:02
// Repeat task1 for subtraction, multiplication, division & modulus. 

// var a = 3;
//  var b = 5;
//  var c=b-a;
//  var d=a*b;
//  var e=b/a;
//  var f=b%a;
//  document.write("difference of" +" "+ b + " " + "&"+ " " + a + " " + "is" +" "+ c + "<br>" +
//  "product of" +" "+ a + " " + "&"+ " " + b + " " + "is" +" "+ d + "<br>"+
//  "division of" +" "+ a + " " + "&"+ " " + b + " " + "is" +" "+ e+ "<br>" +
//  "modulus of" +" "+ a + " " + "&"+ " " + b + " " + "is" +" "+ f )



// QUESTION NO:03
// Do the following using JS Mathematic Expressions 
// a. Declare a variable. 
// b. Show the value of variable in your browser like “Value after variable declaration is: ??”. 
// c. Initialize the variable with some number.
//  d. Show the value of variable in your browser like “Initial value: 5”. 
// e. Increment the variable. 
// f. Show the value of variable in your browser like “Value after increment is: 6”. 
// g. Add 7 to the variable.
//  h. Show the value of variable in your browser like “Value after addition is: 13”. 
// i. Decrement the variable.
//  j. Show the value of variable in your browser like “Value after decrement is: 12”. 
//  k. Show the remainder after dividing the variable’s value by 3. 
//  l. Output : “The remainder is : 0”. 


// var a;
// document.write("Value after variable declaration is :" + a)
// document.write("<br>")
// a=5;
// document.write("Initial value: " + a)
// document.write("<br>")
// ++a;
// document.write("Value after increment is: " + a)
// document.write("<br>")
// a+=7;
// document.write("Value after after addition: " + a)
// document.write("<br>")
// --a;
// document.write("Value after after decrement: " + a)
// document.write("<br>")
// a%=3;
// document.write("The remainder is: " + a)
// document.write("<br>")



// QUESTION NO:04
// Cost of one movie ticket is 600 PKR.
//  Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. 
//  Example output: 

//  var ticket=600;
//  numOfTickets=prompt('How many tickets u want to buy')
//  var ticketPrice;
//  ticketPrice=(ticket*numOfTickets);
//  document.write("Total cost to buy" +" "+numOfTickets+ " "+"tickets to a movie is" + " "+ticketPrice + " " +"PKR.")



// QUESTION NO:05
// Write a script to display multiplication table of any number in your browser. E.g

// var number= +prompt("Enter a number");
// document.write("Table of  " + number + "<br>")
// for(var i=1; i<=10; i++){
//     document.write( number + "X" + i + "=" + (number*i) + "<br>")
// }



// QUESTION NO:06
// The Temperature Converter: 
// It’s hot out! Let’s make a converter based on the steps here. 
// a.  Store a Celsius temperature into a variable.
//  b. Convert it to Fahrenheit & output “NNoC is NNoF”. 
//  c. Now store a Fahrenheit temperature into a variable. 
//  d. Convert it to Celsius & output “NNoF is NNoC”. 

// var celsius_Temp = prompt("Enter Temperature")
// var cel = (fahrenhite_Temp - 32) * 5 / 9;
// document.write(celsius_Temp + " is " + cel + "F")
// var fahrenhite_Temp = prompt("Enter Temperature")
// var far = (celsius_Temp * 9 / 5) + 32;
// document.write("<br>" + fahrenhite_Temp + " is " + far + "C")



// QUESTION NO:07
// Write a program to implement checkout process of a shopping cart system for an e-commerce website. 
// Store the following in variables 
// a. Price of item 1
//  b. Price of item 2
//  c. Ordered quantity of item 1
//   d. Ordered Quantity of item 2
//    e. Shipping charges 
// Compute the total cost & show the receipt in your browser. 

// var item1=3;
// var item2=7;
// var price1=650;
// var price2=100;
// var shippingCharges=100;
// var total=item1*price1 + item2*price2 +shippingCharges;
// document.write(" Price of item 1 is " +price1 + "<br>" + "quantity of item 1 is " +item1 + "<br>" +" Price of item 2 is " + price2 
// + "<br>" + " Quantity of item 2 is "+item2 + "<br>" + " Shipping charges " + shippingCharges+  "<br>" 
// + "<br>" +"Total cost of your order is  " + total ) 



// QUESTION NO:08
// Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser.

// var total_marks=980;
// var obtained_marks=804;
// var percentage=(obtained_marks/total_marks)*100;
// document.write("Total marks: " + total_marks + "<br>" + " Marks obtained : " + obtained_marks + "<br>"+ "Percentage :" 
// + percentage + "%" )



// QUESTION NO:09
// Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)

// var riyal=28;
// var dollar=104.80;
// var total_currency_in_pkr= 10*dollar + 25*riyal;
// document.write("Total Currency in PKR : " + total_currency_in_pkr)



// QUESTION NO:10
// Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

// var a=5;
// var b=(a+5)*10/2
// document.write(b)



// QUESTION NO:11
// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.
// Output them to the screen like so: “They are either NN or NN
// years old”.

// var current_year=2020;
// var birth_year=1999;
// var Age= current_year-birth_year;
// document.write(" Current year: " + current_year +"<br>" + "Birth year " + birth_year + "<br>" +"Your Age is : " +Age)



// QUESTION NO:12
// The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r 2 , π = 3.142)


// var r=10;
// var pi=3.142;
// var C=2*pi*r
// var A=pi*r**2;
// document.write("<h1>" + "The Geometrizer" + "</h1>")
// document.write("Radius of a circle : " +r + "<br>" + "The circumference is :" + C +"<br>" + " The area is : " +A)




// QUESTION NO:13
// The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.

// var snack="lays";
// var c_age=21;
// var m_age=65;
// var snack_amount_day=2;
// var total_snack_amount= (m_age - c_age)*snack_amount_day
// document.write("<h1>" + "The Lifetime Supply Calculator" + "</h1>")
// document.write("Favorite snack: "+ snack + "<br>"+"Current Age : " +c_age  + "<br>"+ "Maximum age : "
// + m_age + "<br>" + " Amount of snacks per day:" +" "+snack_amount_day + "<br>" + " You will need "
// + total_snack_amount + " "+"to last you until the ripe old age of " + m_age)




//            ______CHAPTER # 06-09_______


// QUESTION NO:1
// Write a program to take a number in a variable,
//  do the required arithmetic to display the following result in your browser: 

// var a=10;
// document.write("Result : " + " <br>" + "The value of a is :  "+ a + " <br>" + "...............................................")
// document.write(" <br>")
// document.write("The value of ++a is : "+(++a) + "<br>"+"Now the value of a is : 11" + "<br>" + "..............................................." )
// document.write(" <br>")
// document.write("The value of a++ is : "+(a++) + "<br>"+"Now the value of a is : 12" + "<br>" + "..............................................." )
// document.write(" <br>")
// document.write("The value of --a is : "+(--a) + "<br>"+"Now the value of a is : 11" + "<br>" + "..............................................." )
// document.write(" <br>")
// document.write("The value of a-- is : "+(a--) + "<br>"+"Now the value of a is : 10" + "<br>" + "..............................................." )



// QUESTION NO:2
// What will be the output in variables a, b & result after execution of the following script:
//  var a = 2, b = 1; 
//  var result = --a - --b + ++b + b--;
//   Explain the output at each stage: --a; --a - --b; --a - --b + ++b; --a - --b + ++b + b--; 

// var a=2;
// var b=1;
// document.write( --a - --b + ++b + b--)



// QUESTION NO:3
// Write a program that takes input a name from user & greet the user.

// var name= prompt("Please enter your name" )
// document.write("Hi! " + name + " Welcome" )



// QUESTION NO:5
// Write a program to take input a number from user & display it’s multiplication table on your browser. 
// If user does not enter a new number, multiplication table of 5 should be displayed by default. 


// var num= prompt("Please enter a number ")
// for (var i=1; i<=10; i++){
//     switch(num){
//         case (num):
//              document.write(num + "x" + i + " = " + (num*i) + " <br>" + " <br>")

//         default: 
//         document.write("5" + "x" + i + " = " + (5*i)+"<br>" )


//     }
// }




// QUESTION NO:6
// Take
//  a) Take three subjects name from user and store them in 3 different variables.
//  b) Total marks for each subject is 100, store it in another variable. 
//  c) Take obtained marks for first subject from user and stored it in different variable. 
//  d) Take obtained marks for remaining 2 subjects from user and store them in variables. 
//  e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table) 


// var sub1=prompt("Please enter a subject 1 name ")
// var sub2=prompt("Please enter a subject 2 name ")
// var sub3=prompt("Please enter a subject 3 name ")
// var total_marks_per_sub=100;
// var obt_marks_sub1=+prompt("enter a obtained marks")
// var obt_marks_sub2=+prompt("enter a obtained marks")
// var obt_marks_sub3=+prompt("enter a obtained marks")
// var total_marks=100*3;
// var total_obtain_marks= obt_marks_sub1 + obt_marks_sub2 + obt_marks_sub3;
// var total_percentage=( total_obtain_marks/total_marks)*100

// document.write('<body>'+'<table>' + '<tr>'+ '<th>'+ " Subject " +'</th>'+ '<th>'+ " Total Marks " +'</th>'+ '<th>' +"Obtained Marks  " +'</th>'+'<th>' +"Percentage" +'</th>'+  '</tr>' +
// '<tr>'+ '<th>'+ sub1 +'</th>'+ '<th>'+total_marks_per_sub +'</th>'+ '<th>' + obt_marks_sub1+'</th>'+'<th>' +obt_marks_sub1 + "%" +'</th>'+  '</tr>'+ 
// '<tr>'+ '<th>'+ sub2 +'</th>'+ '<th>'+ total_marks_per_sub+'</th>'+ '<th>' + obt_marks_sub2 +'</th>'+'<th>' + obt_marks_sub2 + "%"+'</th>'+  '</tr>' +
// '<tr>'+ '<th>'+ sub3 +'</th>'+ '<th>'+ total_marks_per_sub +'</th>'+ '<th>'+obt_marks_sub3 +'</th>'+'<th>' + obt_marks_sub3 + "%" +'</th>'+  '</tr>' +
// '<tr>'+ '<th>'+  +'</th>'+ '<th>'+ total_marks +'</th>'+ '<th>'+total_obtain_marks +'</th>'+'<th>' + total_percentage + "%" +'</th>'+  '</tr>' +
// '</table >' + 
// '<body>')



//            ______CHAPTER # 09-11_______


//QUESTION NO:01
// Write a program to take “city” name as input from user. 
// If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”

// var city = prompt('Enter city name')
// city1=city.toUpperCase();
// if (city1 === "KARACHI") {
//     alert("Welcome to city of lights")

// } else {
//     alert('You are live in Pakistan')

// }



//QUESTION NO:02
// Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. 
// If the user is female, give the message: Good Morning Ma’am.

// var gender = prompt('Enter your Gender')
// gender_D = gender.toUpperCase();
// if (gender_D === "MALE") {
//     alert("GUD MORNING SIR")

// } else {
//     alert("Good Morning Ma’am")

// }



//QUESTION NO:03
// Write a program to take input color of road traffic signal from the user &
//  show the message according to this table: 

// var color = prompt('Enter color of traffic signal')
// traffic_color = color.toUpperCase();
// if (traffic_color === "RED") {
//     alert("Must Stop")

// }
// elseif(traffic_color === "YELLOW"); {
//     alert("Ready to Move");
// }
// elseif(traffic_color === "GREEN"); {
//     alert("Move Now");
// } 
// else{
//     alert("enter correct color");
// }



//QUESTION NO:04
// Write a program to take input remaining fuel in car (in litres) from user.
//  If the current fuel is less than 0.25litres, 
// show the message “Please refill the fuel in your car” 

// var fuel=+prompt('Enter remaining fuel in car in litre')
// if (fuel<0.25){
//     alert("Please refill the fuel in your car")
// }
// else{
//     alert("Your fuel is OK..")
// }



//QUESTION NO:05
// Run this script, & check whether alert message would be displayed or not. Record the outputs. 

// var a = 4; 
// if (++a === 5){ 
//     alert("given condition for variable a is true");
//  } 
// This condition generate alert message.

// var b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is true");
// }
// this condition doesn't generate alert message.

// var c = 12;
// if (c++ === 13) {
//     alert("condition 1 is true");
// } if (c === 13) {
//     alert("condition 2 is true");
// } if (++c < 14) {
//     alert("condition 3 is true");
// } if (c === 14) { alert("condition 4 is true"); } 

// In this code condition 2 and 4 is true.

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");
// }
// This condition generate alert message because it is true.

// if (true){ alert("True"); }
//  if (false){ alert("False"); } 

//  / This condition generate alert message true.

// if ("car" < "cat") {
//     alert("car is smaller than cat");
// }
// This condition is true.



//QUESTION NO:06
// Write a program to take input the marks obtained in three subjects & total marks.
//  Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table: 

var mark1=+prompt('enter ur 1st subject obtained marks')
var mark2=+prompt('enter ur 2nd subject obtained marks')
var mark3=+prompt('enter ur 3rd subject obtained marks')


