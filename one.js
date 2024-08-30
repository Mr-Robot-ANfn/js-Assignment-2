// CHAPTER 3

// QUESTION 1

// var age;
// age=21;
// alert(age)


// QUESTION 2

// var visit=1
// alert("You Have Visited "+visit+" times")
// visit++;


// QUESTION 3

// var birthYear=2004;
// document.write("<p>"+"My Birth Year is "+birthYear+"</p>")
// document.write("<p>"+"data type of my declared variable is number"+"</p>")


// QUESTION 4

// var visitorsName="John Doe";
// var productTitlle="5 T-shirt(s)"
// var quantity="XYZ Clothing store";
// document.write(visitorsName+" ordered "+productTitlle+" on "+quantity);


// CHAPTER 4

// QUESTION 1

// var name;
// var $age;
// var country0;

// QUESTION 2

// LEGAL VARIABLE
// var name;
// var $age;
// var country0;
// var x9yz;
// var _12c;

// ILLEGAL VARIABLES
// var 1name;
// var &name;
// var @namell;
// var 9oc;
// var +34;

// QUESTION 3

// document.write("<h1>"+"Rules for naming JS variables"+"</h1>");
// document.write("<p>"+"Variable names can onky contain numbers, $ and _. For example $my_1stVariable"+"</p>")
// document.write("<p>"+"Variable must begin with a letter, $ or _.For Example : $name._name or name"+"</p>")
// document.write("<p>"+"Variable names are case sensitive"+"</p>")
// document.write("<p>"+"Variable names should not be JS Keywords"+"</p>")


// CHAPTER 5

// QUESTION 1

// var num1=+prompt("Enter num 1");
// var num2=+prompt("Enter num 2");
// var res=num1+num2;
// document.write(res);


// QUESTION 2

// FOR MULTIPLICATION
// var num1=+prompt("Enter num 1");
// var num2=+prompt("Enter num 2");
// var res=num1*num2;
// document.write(res);

// FOR SUBTRACTION
// var num1=+prompt("Enter num 1");
// var num2=+prompt("Enter num 2");
// var res=num1-num2;
// document.write(res);

// FOR DIVISION
// var num1=+prompt("Enter num 1");
// var num2=+prompt("Enter num 2");
// var res=num1/num2;
// document.write(res);


// QUESTION 3

// var v;
// document.write("<p>"+"Value after variable declaration is: ??"+"</p>");
// v=5;
// document.write("<p>"+"Initial value:"+v+"</p>");
// v++;
// document.write("<p>"+"Value after increment is: "+v+"</p>");
// v+=7;
// document.write("<p>"+"Value after Addition is: "+v+"</p>");
// v--;
// document.write("<p>"+"Value after Decrement is: "+v+"</p>");
// v%=3
// document.write("<p>"+"The Remainder is: "+v+"</p>");


// QUESTION 4

// var o=600;
// var forFive=o*5;
// document.write("<p>"+"Total cost to buy 5 tickets to a movie is: "+forFive+"PKR"+"</p>");

// QUESTION 5

// var num=2;
// for(var i=1;i<=10 ; i++){
//     document.write("<p>"+2+" X "+i+" = "+num*i+"</p>");
// }


// QUESTION 6

// var tInC=25;
// var cIntoF=(tInC*9/5)+32;
// document.write("<p>"+tInC+" Degree Centigrade is "+cIntoF+" in Degree Fahrenheit"+"</p>");

// var tinF=70;
// var fIntoc=(tinF-32)*5/9;
// document.write("<p>"+tinF+" Degree Fahrenheit is "+fIntoc+" in Degree Celcius"+"</p>");


// QUESTION 7

// var p1=650;
// var p2=100;
// var oqi1=3;
// var oqi2=7;
// var sc=100;

// var total=p1*oqi1 + p2*oqi2 +sc; 
// document.write("<p>"+"Price of item 1 is "+p1+"</p>");
// document.write("<p>"+"Quantity of item 1 is "+oqi1+"</p>");
// document.write("<p>"+"Price of item 2 is "+p2+"</p>");
// document.write("<p>"+"Quantity of item 1 is "+oqi2+"</p>");
// document.write("<p>"+"\nTotal cost of your order is "+total+"</p>");



// QUESTION 8

// var totalMarks=980;
// var marksObtained=804;
// var per=marksObtained/totalMarks *100;
// document.write("<p>"+"Total Marks is "+totalMarks+"</p>");
// document.write("<p>"+"Obtained Marks is "+marksObtained+"</p>");
// document.write("<p>"+"Percentage is "+per+"</p>");


// QUESTION 9

// var usd=10;
// var sr=25;
// var usdToPkr=104.80*10;
// var srToPkr=25*28;
// var totalPkr=usdToPkr + srToPkr;
// document.write("<p>"+"Total Currenncy in PKR is "+totalPkr+"</p>");


// QUESTION 10

// var a=9;
// a+=5;
// a*=10;
// a/=2;
// console.log(a);


// QUESTION 11

// var cy=2024;
// var by=2004;
// var age=cy-by;
// document.write("<p>"+"Current Year "+cy+"</p>");
// document.write("<p>"+"Birth Year "+by+"</p>");
// document.write("<p>"+"YourAge Year "+age+"</p>");


// QUESTION 12

// var radius=20;
// var circumference=2 * Math.PI * radius;
// document.write("<p>"+"Circumference is "+circumference+"</p>");
// var areaOfCircle= Math.PI * (radius * radius);
// document.write("<p>"+"the area is "+areaOfCircle+"</p>");


// QUESTION 13

// var fs="kurleez";
// var age=15;
// var mage=65;
// var fspd=2;

// var total= (fspd*365)*(mage-age);
// document.write("<p>"+"Favourite Snack is "+fs+"</p>");
// document.write("<p>"+"Current Age is "+age+"</p>");
// document.write("<p>"+"Estimmated Maximum Age is "+mage+"</p>");
// document.write("<p>"+"Amount Of Snacks Per day is "+fspd+"</p>");
// document.write("<p>"+"You will need "+total+" snaacks to last you until the ripe old age of "+mage+"</p>");


// CHAPTER 6

// QUESTION 1
// var a=6;
// document.write("<p>"+"Result"+"</p>");
// document.write("<p>"+"The value of a is "+a+"</p>");
// document.write("<p>"+". . . . . . . . . .. . . . ."+"</p>");
// ++a ;
// document.write("<p>"+"The value of ++a is "+a+"</p>");
// document.write("<p>"+"NOW The value of a is "+a+"</p>");
// a++ ;
// document.write("<p>"+"The value of a++ is "+a+"</p>");
// document.write("<p>"+"NOW The value of a is "+a+"</p>");
// --a ;
// document.write("<p>"+"The value of --a is "+a+"</p>");
// document.write("<p>"+"NOW The value of a is "+a+"</p>");
// a-- ;
// document.write("<p>"+"The value of a-- is "+a+"</p>");
// document.write("<p>"+"NOW The value of a is "+a+"</p>");


// QUESTION 2

//OUTPUT = 3


// QUESTION 3

// var name=prompt("Enter Your Name");
// document.write("<p>"+"WELCOME! Dear "+name+"</p>");


// QUESTION 4

// var num=+prompt("Enter a number",5);
// for(var i=1;i<=10 ; i++){
//     document.write("<p>"+num+" X "+i+" = "+num*i+"</p>");
// }


// QUESTION 5

// var sub1=prompt("Enter Subject 1");
// var sub2=prompt("Enter Subject 2");
// var sub3=prompt("Enter Subject 3");
// var totalMarks=100;
// var stu1s1=+prompt("Enter marks in subject "+sub1);
// var stu1s2=+prompt("Enter marks in subject "+sub2);
// var stu1s3=+prompt("Enter marks in subject "+sub3);
// var TotalMarks=300;
// var obtTotalMarks=stu1s1 + stu1s2 + stu1s3;
// var per=(totalMarks/obtTotalMarks)*100;

// document.write("<h1>"+"SUBJECT Total Marks Obtained Marks Percentage "+"</h1>");
// document.write("<p>"+ sub1+"                "+TotalMarks+"                 "+stu1s1+"                 "+per+"</p>");
// document.write("<p>"+ sub2+"                "+TotalMarks+"                  "+stu1s2+"                "+per+"</p>");
// document.write("<p>"+ sub3+"                "+TotalMarks+"                 "+stu1s3+"                 "+per+"</p>");

