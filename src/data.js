function print2() {
    alert("hello hello");
}

// Comments in JS - Excluded by Interpreter 

// Single Line 
/* Multi Line */

// Other Programming lang - tightly couple data type with the variable

// JS - loosely coupled 

var myName;
myName = 2;

var a = 20;
typeof (a);    // Number 

a = "shubham";
typeof (a);     // String


// *******************************   Data Types   *************************************

/*  2 Types of DT

    > Primitive DT - Basic
    > Reference DT - refer the basic ones

    >>>>>>>>>>>>>>>>>>>>>   Primitive  >>>>>>>>>>>>>>>>>>>>>>>>>>>

        > Number
        > String
        > Boolean
        > Null 
        > Undefined 

    >>>>>>>>>>>>>>>>>>>>  Reference   >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

        > Array
        > Objects
        > Functions  */

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  Number >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

var a = 20;
var b = 20.555;

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> String >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

var FN = "Shubham";
var LN = 'Arora';

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>  Boolean   >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

var isVaccinated = true;
var isEligibleForDriving = false;

//  >>>>>>>>>>>>>>>>>>>>>>>>>   Undefined  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

var abc;
console.log(abc);     // undefined
typeof (abc);         // Undefined

// >>>>>>>>>>>>>>>>>>>>>>>>>>>  Null  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

var arr = [1, 2, 3];
arr = null;
arr;               //  null
typeof (arr);      // {} signifies empty 


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>  Undefined vs Null  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Undefined is default, NULL is explicitly given
// typeOf(undefined) = Undefined
// typeOf(Null) = Object like {}


//  >>>>>>>>>>>>>>>>>>>>>>>>   Reference DT  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//   >>>>>>>>>>>>>>>>>  Arrays  >>>>>>>>>>>>>>>>>>>>>>>>>>>

// Array - homogeneous DT 

var students = ["Shubham", "Sakshi", "Mayank"];   // Array of Strings 

var numbers = [1, 2, 3, 4, 5];  // Array of Numbers 

students[1]  // Sakshi

//   >>>>>>>>>>>>>>>>>  Objects  >>>>>>>>>>>>>>>>>>>>>>>>>>>

var student1 = {
    rollNo: 1,
    FN: "Shubham",
    LN: "Arora",
    address: "Delhi",
    age: 30,
    isVaccinated: true
};

student1.age
student1["FN"]

// Array of Objects 

var students = [{
    rollNo: 1,
    FN: "Shubham",
    LN: "Arora",
    address: "Delhi",
    age: 30,
    isVaccinated: true
}, {
    rollNo: 2,
    FN: "Sakshi",
    LN: "Arora",
    address: "Delhi",
    age: 26,
    isVaccinated: true
}, {
    rollNo: 3,
    FN: "Mayank",
    LN: "Arora",
    address: "Delhi",
    age: 28,
    isVaccinated: true
}];

var calculation = {
    sum: function (num1, num2) {
        return num1 + num2;
    },
    subtract: function (num1, num2) {
        return num1 - num2;
    }
}

calculation.sum();
calculation.subtract();

students[1].FN   // Sakshi

// *******************************  Functions  ************************************

// re-use the code wherever required

// Function Declaration 

function sum(num1, num2) {
    return num1 + num2;
}

// Arrow function syntax

sum = (num1, num2) => {
    return num1 + num2;
}


//*****************************  Function Overloading  ********************************

function sum(num1, num2) {
    return num1 + num2;
}


function sum(num1, num2, num3) { //this fn will override the previous fn with the same name from Global Execution Context and future fn calls will refer this fn
    return num1 + num2 + num3;
}

// Execution of the Function

sum(3, 5);  // NaN
sum(5, 8);  // NaN

sum(1, 2, 3); //6
 //------------------------------------------------------------------------------------------

 function sum(num1, num2, num3) { 
    return num1 + num2 + num3;
}

 function sum(num1, num2) {//this fn will override the previous fn with the same name from Global Execution Context and future fn calls will refer this fn
    return num1 + num2;
}

// Execution of the Function

sum(3, 5);  // 8 
sum(5, 8);  // 13

sum(1, 2, 3); //3


// ***************************   Advance Operations with Reference DT  ****************************


// ******************   Arrays   *****************************

// Array - LIFO 

var students = ["Shubham", "Sakshi", "Mayank"];

students.push("Prerna");  // ["Shubham", "Sakshi", "Mayank", "Prerna"];

students.pop();   // ["Shubham", "Sakshi", "Mayank"];

students.unshift("Trisha");  // ["Trisha", "Shubham", "Sakshi", "Mayank"];

students.shift();   // ["Shubham", "Sakshi", "Mayank"];



// ***********************   Iteration  **********************************

var arr = [1, 2, 3, 4, 5, 6, 7];

for (var i = 0; i <= arr.length; i++) {
    arr[i] * 3
}

//   *******************  map  ********************

var arr = [1, 2, 3, 4, 5, 6, 7];

arr.map((item) => { return item * 3 });  // [3,6,9,12,15,18,21]

var output = arr.map(item => item * 3);    // [3,6,9,12,15,18,21]

output  // [3,6,9,12,15,18,21]
arr     // [1, 2, 3, 4, 5, 6, 7];

//  *********************  filter  **************************

var arr = [1, 2, 3, 4, 5, 6, 7];

arr.filter((item) => { return item % 2 == 0 });   // [2,4,6]

var evenArr = arr.filter(item => item % 2 == 0);   // [2,4,6]

var oddArr = arr.filter(item => item % 2 != 0);   // [1,3,5,7]

arr.filter(item => item > 8);   // []

evenArr  // [2,4,6]
arr      // [1, 2, 3, 4, 5, 6, 7];


//  ****************************  Concatenation of Arrays ************************

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];

arr1.concat(arr2);   // [1,2,3,4,5,6]


// ****************************   find   ************************************

var arr = [1, 2, 3, 4, 5, 6, 7];

arr.find((item) => { return item % 2 == 0 });   // 2

arr.find(item => item % 2 == 0);   // 2

arr.find(item => item > 8);      // undefined

// **************************   Slice   ****************************************

var arr = [1, 2, 3, 4, 5, 6, 7];

arr.slice(3, 6);   // [4,5,6]

//  ***********************************   Sort   ******************************

var arr = [22, 13, 234, 555, 6, 87];

arr.sort((a, b) => a - b);  // Ascending Order
arr.sort((a, b) => b - a);  // Descending Order


// ****************************  Operators ************************************

/*      > Arithemetic
        > Assignment
        > Comparion
        > Logical
*/

// *****************************   Arithemetic   ******************************* 

var a = 3 + 6;
var a = 4 - 2;
var a = 5 * 4;
var a = 6 / 3;  // 2 
var a = 7 % 3;  // 1

// ************************  Assignment  ************************************ 

var a = 5;

var a = a + 3;    // 8 

a += 3;
a -= 3;
a *= 4;
a /= 3;
a %= 3;

var b = 5;

// Post Increment 

b++;   // 5
b;     // 6

// Pre Increment 

++b;   // 6
b;     // 6

// ****************  Comparion Operator -- Boolean Output  **************************

2 == 5   // False

2 === 5   // False

2 == '2'   //  True
2 === '2'  //  False

2 != 4  //  True

2 !== '2'  // False

2 !== 2   // False


4 > 3
5 >= 3
3 <= 4
3 < 9

// ***************   Logical Operators  ***********************

True && True       // True 
True && False     // False
False && True     // False
False && False    // False 

True || True   // True 
True || False  // True
False || True  // True
False || False  // False

!True     // False
!False    // True


2 != 2

    (3 > 9) && (4 < 9)   // False


// *****************************  I/O Operators **********************************

// **********************  Output  ****************************

/*    > innerHTML
      > document.write
      > console.log
      > alert
*/

// ********************  Input  *****************************

/*
    > prompt
    > confirm
*/

function printConsole() {
    console.log("Hi");
}

function printAlert() {
    alert("Hi");
}

function printHTML() {
    var element = document.getElementById("one");
    element.innerHTML = "Hi... Welcome to Edureka...";
}

function printWrite() {
    document.write("Hi... Welcome to Internship Program");
}

function enterName() {
    var name = prompt("Enter your Name");
    var element = document.getElementById("two");
    element.innerHTML = "Hi..." + " " + name + " " + "Welcome to Edureka...";
}

function enterConfirm() {
    var output = confirm(" Are you sure, you want to delete ?");
    var element = document.getElementById("two");
    if (output) {
        element.setAttribute('style', 'display:none');
    }
    else {
        alert("Data is not deleted ... please continue ");
    }
}

function Over() {
    var element = document.getElementById("three");
    element.setAttribute('style', 'background-color:green');
}

function Out() {
    var element = document.getElementById("three");
    element.setAttribute('style', 'background-color:red');
}


// *************************   Classes   ***********************************

// BluePrint of an Object 
// Class contains Data Members & Member Functions 


class array{
	stud = [1, 2, 3, 4, 5]
  
  print = () =>  this.stud.map(item => item)
}

let obj0 = new array()

console.log(obj0.print())

//-----------------------Static class---------------------

// class arr{
//     arr = [2, 4, 5]
//     static print = () => {
//       console.log('class is called')
//     }
//   }
//   arr.print()

// =======================================================
class Students {
    students = [{
        rollNo: 1,
        name: "Shubham",
        city: "Delhi"
    },
    {
        rollNo: 2,
        name: "Sakshi",
        city: "Delhi"
    },
    {
        rollNo: 3,
        name: "Shubhi",
        city: "Delhi"
    }];

    print = () => {
        return this.students.map(item => item.name);
    }

    getStudentByRollNo = (inputRollNo) => {
        return this.students.find(item => item.rollNo == inputRollNo);
    }
}

// Students.print();   // Private Members 

var studentObj = new Students();
studentObj.print();
studentObj.getStudentByRollNo(3);


//  constructor - initialize the DM of the class 

class Students {
    constructor(studentsList) {
        this.students = studentsList;
    }

    print = () => {
        return this.students.map(item => item.name);
    }

    getStudentByRollNo = (inputRollNo) => {
        return this.students.find(item => item.rollNo == inputRollNo);
    }
}

var obj1 = new Students([{
    rollNo: 1,
    name: "Shubham",
    city: "Delhi"
},
{
    rollNo: 2,
    name: "Sakshi",
    city: "Delhi"
},
{
    rollNo: 3,
    name: "Shubhi",
    city: "Delhi"
}]);
obj1.print();
obj1.getStudentByRollNo(3);



var obj2 = new Students([{
    rollNo: 1,
    name: "Afreen",
    city: "Delhi"
},
{
    rollNo: 2,
    name: "Mayank",
    city: "Delhi"
},
{
    rollNo: 3,
    name: "Ritu",
    city: "Delhi"
}]);
obj2.print();
obj2.getStudentByRollNo(3);

//======================================================================================================
class student{
	constructor(val){
  	this.stud = val;
  }
  
  print = () => this.stud.map(item => item)
}

let obj2 = new student([1, 2, 3, 4, 5])

console.log(obj2.print())
//  ******************************    Strings   ******************************************

// String - Array of Characters 

var FN = "Shubham";
var LN = "Arora";

FN.charAt(3);  // b

FN.slice(2, 5);   // ubh

FN.concat(LN);

FN.indexOf('b');      // 3
FN.lastIndexOf('h');   // 4

// Check the presence of a character in a string 

if (FN.indexOf('m') == -1) {
    alert("Character doesn't exists")
} else {
    alert("Character exists")
}

var key = 'Shubham_90';

key.split('');  // ['S', 'h', 'u', 'b', 'h', 'a' , 'm', '_' , '9' , '0'];

key.split('_');  // ["Shubham", "90"]

var key1 = 'Shubham_arora_90_bye';

key1.split('_');   // ["Shubham", "arora", "90", "bye"];

// Practical Use

var key3 = 'shubham_89';

key3.split('_')[1];   // 89

var name = "Shubham Arora";

name.split(' ')[0];  // Shubham

var FN = "Shubham";

FN.substr(2, 5);  // ubham //start from 2 and count 5 char

FN.substring(2, 5);  // ubh 


//  ******************************    Objects   *****************************************

var obj = {
    name: "shubham",
    age: 30,
    city: "delhi"
};

obj.age;

var keyName = "age";
obj[keyName];          // 30

Object.keys(obj);  // ['name', 'age', 'city'];

Object.values(obj);   // ['Shubham', '30', 'delhi'];



// *****************************  Assignment - 3 **********************************

// Question - 1 

class restaurantManager {
    restaurantList = [
        {
            name: "KFC",
            address: 'Shalimar, Bagh',
            city: "Delhi"
        },
        {
            name: "Dominos",
            address: 'Civil Lines',
            city: "Delhi"
        },
        {
            name: "Burger King",
            address: 'Chinchwadi',
            city: "Pune"
        }
    ];

    printRestaurants = () => {
        return this.restaurantList.map(item => item.name);
    }

    getRestaurantsByCity = (inputCity) => {
        return this.restaurantList.filter(item => item.city.toLowerCase() == inputCity.toLowerCase());
    }
}

var restaurantObj = new restaurantManager();
restaurantObj.printRestaurants();
restaurantObj.getRestaurantsByCity('delhi');


// Question - 2

var ordersData = {
    'Below 500': 50,
    '500-1000': 48,
    '1000-1500': 56,
    '1500-2000': 34,
    '2000-2500': 24,
    'Above 2500': 49,
};

// a.> 

var total = Object.values(ordersData).reduce((a, b) => a + b, 0);  // 261

// b.>

Object.keys(ordersData).length;   // 6

// c.>

Object.keys(ordersData).map((item, index) => {
    return {
        id: index + 1,
        order: item,
        'order percentage': ((ordersData[item] / total) * 100).toFixed(2),
        restaurant: "Punjabi Tadka"
    }
})

// ****************************   Looping Statements   ***********************************

for (var i = 0; i < 100; i++) {
    console.log("Shubham");
}

var i = 0;
while (i < 100) {
    console.log("Shubham");
    i++;
}
// -----------------------------------
let i = 1;
function recur(){


    setTimeout(() => {
    console.log(i)
    if(i<5) {
      i++
      recur()
    }
    
  }, i * 1000)
 
}
recur()

// ------------------------------------------
let sum = 0
function recur(n){
	if(n>0){
  	sum+=n
  	n--
  	recur(n)
    return sum
  }
}

console.log(recur(4))
// **********************   Conditinal Statements  ********************************

var age = 30;

if (age > 18) {
    alert("Eligible for Driving...");
}
else {
    alert("Not Eligible for Driving...");
}

var color = 'white';

if (color == "red") {
    alert('Color is Red');
} else if (color == "green") {
    alert('Color is Green');
} else if (color == "blue") {
    alert('Color is Blue');
} else if (color == "White") {
    alert('Color is White');
} else {
    alert('Color is UnMatched');
}

var color = 'white';

switch (color) {
    case 'red':rr
        alert('Color is Red');
        break;
    case 'green':
        alert('Color is Green');
        break;
    case 'blue':
        alert('Color is Blue');
        break;
    case 'white':
        alert('Color is White');
        break;
    default:
        alert('Color is UnMatched');
}

// **************************  Math  ***********************************************

Math.random();
Math.sqrt(9);    // 3
Math.pow(3, 10);
Math.max(2, 3, 2, 90, 23, 566);

var r = 3;
var Area = Math.PI * Math.pow(r, 2);

// ****************************  Date  ***************************************************

var dateObj = new Date();
dateObj.getDate();
dateObj.getDay();
dateObj.getMonth();
dateObj.getSeconds();

// ***********************************  EcmaScript  *************************************

// EcmaScript - Community of Developer which comes up with Rules & Regulations for JS

// 2005 - ES5 - Standards of JS 
// 2015 - ES6

// Transpilers - ES6 to ES5

/* ****************  ES6 Features  ***************************

        > Template String
        > Ternary Operator
        > Let & Const
        > Classes
        > This keyword
        > Arrow functions
        > Default Params
        > IIFE
        > Query String
        > Object Destructuring
        > Call, Apply & Bind
        > Hoisting
        > Callback Functions
        > Promises
        > Async/Await
        > Concise Functions
        > Spread Operator
        > Rest Operator
*/

// ****************************  Template String  *****************************

// String Concatenation
// Multi Line String

var FN = "Shubham";
var LN = "Arora";

var output = "My name is" + " " + FN + " " + LN + ", " + "I am fullstack developer" + ".";

var output = `My name is ${FN} ${LN}, I am fullstack developer.`;

<div>{`Shubham
    Arora`}</div>


// **********************************  Ternary Operator  **************************

var age = 30;

var isEligibleForDriving;

if (age >= 18) {
    isEligibleForDriving = true;
} else {
    isEligibleForDriving = false;
}

// ------------------------------------------------------------------

var age = 30;

var isEligibleForDriving = age >= 18 ? true : false;


// -----------------------------------------------------------


var age = 22;

var output;

if (age >= 18) {
    output = "Eligible";
} else if (age >= 25) {
    output = "Perfectly Eligible";
} else {
    output = "Not Eligible";
}

// ------------------------------------------------------------------

var age = 22;

var output = age >= 18 ? (age >= 25 ? "Perfectly Eligible" : "Eligible") : "Not Eligible";



//   *********************************   Arrow Functions  ***************************

function sum(a, b) {
    return a + b;
}

sum = (a, b) => a + b;

// ****************************  Query String  *******************************

// www.flipkart.com/home?selection="mobiles"&price="less than 5000"

// selection="mobiles"&price="less than 5000"


// ****************************  Object Destructuring ******************************

var student = {
    name: 'shubham',
    age: 30,
    city: "Delhi"
};

var name = student.name;
var age = student.age;

var { name, age } = student;

console.log(age);  // 30


var { name, age, address } = student;

console.log(address);   // undefined

// *******************  Assignment - 4  *****************************

var ratingData = [
    { restaurant: "KFC", rating: 4 },
    { restaurant: "BK", rating: 3 },
    { restaurant: "Dominos", rating: 5 },
    { restaurant: "KFC", rating: 2 },
    { restaurant: "BK", rating: 1 },
    { restaurant: "BK", rating: 5 },
    { restaurant: "Pizza Hut", rating: 5 }
];

// Hint - 

// Step - 1 : Compute an Array of Unique Restaurants like ["KFC", "BK", "Dominos", "Pizza Hut"]
// Step - 2 : Iterate this Array ["KFC", "BK", "Dominos"] and then calculate the Avearge 


// Step 1 : Get Unique Restaurants  

var uniqueRestaurants = ratingData.map(item => item.restaurant).filter((item, i, ar) => ar.indexOf(item) === i);

// Step - 2 : Calculate the Average 

uniqueRestaurants.map(unique => {
    var filteredRestaurants = ratingData.filter(item => item.restaurant == unique);
    var sum = filteredRestaurants.reduce((a, b) => a + b.rating, 0);
    return {
        restaurant: unique, averageRating: sum / filteredRestaurants.length
    }
}
)

// Expected Output ---> 

[{
    averageRating: 4.5,
    restaurant: "KFC"
}, {
    averageRating: 3,
    restaurant: "BK"
}, {
        averageRating: 3,
        restaurant: "Dominos"
    }]


// **************   Rest Operator  *****************

// usage - function params

function sum(a, b) {
    return a + b;
}

function sum(a, b, c) {
    return a + b + c;
}

sum(2, 3, 3);

function sum(a, b, ...c) {
    return a + b + c.reduce((x, y) => x + y);
}

sum(2, 3, 4, 5, 7, 8, 9, 3, 4, 324, 34, 34)


// **********************  Spread Operator  ************************************

/* usage - 

    > Copy/Replica of Reference Data Types
    > Concat Reference Types

*/

var arr = [1, 2, 3, 4, 5];

var copyArr = arr;

copyArr.push(6);[1, 2, 3, 4, 5, 6];
arr[1, 2, 3, 4, 5, 6];

//  ********   Copy/Replica of Reference Data Types   ************

var arr = [1, 2, 3, 4, 5];

var copyArr = [...arr];

copyArr.push(6);[1, 2, 3, 4, 5, 6];
arr[1, 2, 3, 4, 5];

var obj = { name: "shubham" };

var copyObj = { ...obj };
//======================================================================
var student = {
    name: 'shubham',
    age: 30,
    city: "Delhi"
};


var newstudent = {
...student,
age: 40
}

console.log(newstudent)
// ===================================================================
let arr = ['a', 'b', 'c'];

function names(n1, n2, n3){
	console.log(n1, n2, n3)
}

names(arr[0], arr[1], arr[2])
names(...arr)

// ************  Concat Reference Types   ***************

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];

var arr = [...arr1, ...arr2];  // [1,2,3,4,5,6]

//  -------------------  Object  --------------------

var obj = { FN: "shubham", age: 30 };

var updatedObj = { ...obj, LN: "Arora" };

var updatedObj = {
    FN: "shubham",
    age: 30,
    LN: "Arora"
};

// ********************   Async Programming in JS  ***********************************

// JS is Synchronous 

// Next block of code to wait for previous response

// Logic - 10 sec waiting 

// Example - Payment Gateway , API Call's etc

    

//  ********************************  Ways to Implement Async Programming in JS  **************************************

/*   	> Callback Methods
    > Promises
    > Async Await 
*/

function a() {
    console.log("Hi");
}

function b(xyz) {
    xyz();
}

b(a); // Hi

// a -> Callback Function
// b -> Higher Order Function(HOF)

arr.reduce((a, b) => { return a + b });



// **********************************  Practically Async Behaviour  ************************************

async function API_CALL(callback) {
    await response;
    response = fetch(); // API Call;
    if (response) {
        callback();
    }
}

function Bind_Data() {
    // Logic of binding the data in UI 
}


API_CALL(Bind_Data);



// Callback executes once the functionality of HOF is completed 


// **********************************************  Promises  *******************************************

// After 4 months 
if (marks > 90) {
    // gift him/her car 
}
else {
    // no gifts 
}

// Waiting 


/* 3 States of Promises 

    > Resolved - then 
    > Rejected - catch
    > InProgress  
*/

// API CALL 

// 10ms for the Response

axios()
    .then( // Binding the Response in UI 
    )
    .catch( // Show the Error 
    )



// -----------------------------------------   Loader in UI  ----------------------------------------------

function onClick() {
    loader = true;
    axios()
        .then( // loader = false && Binding the Response in UI 
        )
        .catch( // loader = false && Show the Error 
        )
}

// **************************  Concise Functions  ********************************

var obj = {
    name: "Shubham",
    getAverage: function (x, y) {
        return x + y / 2
    }
}

obj.getAverage();


var obj = {
    name: "Shubham",
    getAverage(x, y) {
        return x + y / 2
    }
}

obj.getAverage();

// *************************   Function Overloading ************************

function sum(a, b, c) {
    return a + b + c;
}

function sum(a, b) {
    return a + b;
}

sum(2, 3, 4);

sum(2, 3);


// ********************************  Default Params  ************************************

function sum(a, b, c) {
    return a + b + c;
}

sum(2, 3);      //  Error : In Other Prog Lang 

// In JS - 

c = undefined;

sum(2, 3);  // NaN

// output : NaN

// -------------------------------------------------------

function sum(a = 0, b = 0, c = 0) {
    return a + b + c;
}

sum(2, 3);    //  5

sum();      // 0

function multiply(a, b, c = 1) {
    return a * b * c;
}

multiply(1, 2, 3);  // 6
multiply(1, 2);     // 2

multiply(1);       //  NaN

// ******************************  Web Storage Methods **************************

document.cookie = "name='shubham'; age=30; profession='trainer'";

document.cookie.split(';')[1].split("=")[1];  // 30

//  LocalStorage
//  SessionStorage 


sessionStorage.setItem('userName', 'Shubham');
sessionStorage.getItem('userName');  // Shubham
sessionStorage.clear();


localStorage.setItem();
localStorage.getItem();
localStorage.clear();

// **********************************   Event Handling  *******************

onclick();
onmouseover();
onmouseout();
onchange();

// *******************************  Exception Handling  **************************

// Exception - Runtime Error

try {
    // Vulnerable Code 
}
catch (e) {
    console.log(e);
}
finally {
    // Alawys Run 
}

// **********************************  Scheduling Methods  ***************************

// SetTimeOut
// SetInterval

function sum(a, b) {
    return console.log(a + b);
}

sum(2, 3);

setTimeout(sum, 1000, 3, 4);     // 1000 ms = 1 sec 

setInterval(sum, 5000, 3, 6);

clearInterval(); // to stop the execution of setInterval method

// setTimeOut executes once after given time frame
// setInterval keeps on executing after the given interval timeframe 

// ***********************************  Let, Var & Const   *********************************

// var in ES5

// Drawbacks of working with var

// 1>  var is a global scoped variable 
// 2>  var followed hoisting 

if (true) {
    var interval = 10;
    // using the variable 
}
// access the variable - applicable

// ----------------------------------------

var a = 10;

if (true) {
    a = 20;
    console.log(a);   // 20
}
console.log(a);    // 20

// ---------------------------------------

if (true) {
    var a = 20;
    console.log(a);   // 20
}
console.log(a);    // 20

if (true) {
    let a = 20;
    console.log(a);   // 20
}
console.log(a);    // Error

// ******************************  Hoisting  **********************************

// bottom to top 

console.log(a);  // Error - In all Programming lang except JS 

var a = 20;

// ---------------------------------------------------------------------

// Hoist the declaration of the variable 

console.log(a);   //  undefined

var a = 20;

// ---------------------------------------------------

console.log(a);                 // undefined
if (true) {
    var a = 20;
    console.log(a);              // 20
}
console.log(a);                  //  20

// ----------------------------------------------------

var a = 20;
if (true) {
    const a = 10;
    console.log(a);   // 10
}
console.log(a);       // 20

// var is functional scope & mutable
// let is block scope & mutable
// const is block scope & unmutable

// *******************************  const ******************************

const b = 20;
b = 30;          //  Error : Assignment to constant variable

// const c;          // Missing initializer in const declaration
c = 30;

const abc = 30;

//--------------------------------------------------------------------


let x = 20;

if (true) {
    x = 40;
    console.log(x);  // 40
}
console.log(x);  // 20

// *****************************************  this ************************************

// this points to the current context 

class ABC {
    a = 20;

    b = () => {
        console.log(this.a);
    }
}

var obj1 = new ABC();
obj1.b();                      //  20


// *************************************  IIFE *************************************

// Immediately Invokable Function Expressions

(function (a, b) {
    return a + b;
})(2, 3);                 // 5









//%%%%%%%%%%%%%%%%%%%%%%%% Technical Suneja %%%%%%%%%%%%%%%%%%%%%

//====================REst and Spread=============================
// // Rest operator ...

// function restOp(a, b, c, ...other){
//   console.log(other)
//   // console.log(other[0])
//   // console.log(arguments)
//   // return a + b + c
//   return a + b + c + other.reduce((a, b) => a + b)
// }

// const res = restOp(2, 4, 5, 8 , 6, 6)
// console.log(res)

// rest with object

// let obj = {
//   name: "Prashant",
//   age: 24,
//   city: "Mumbai"
// }

// let {name, age} = obj //Object Destructuring
// console.log(name, age)

// let {name, ...remain} = obj
// console.log(remain)

// let {...remain} = obj
// console.log(remain)


// //Spread Operator ...

// let names = ['a', 'b', 'c']

// // let copya = [...names]
// // console.log(copya)

// function retNames(n1, n2, n3){
//   console.log(n1, n2, n3)
// }

// retNames(names[0], names[1], names[2])
// retNames(...names) //best

// let obj = {
//   name: "Prashant",
//   age: 24,
//   city: "Mumbai"
// }

// var newObj = {
//   ...obj,
//   age: 28
// }

// console.log(newObj)


//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// Async JS //callback, Promises, Async & await

//Problem statement
let datas = [
    {name: "Ajay", profession: "Engr"},
    {name: "Vivek", profession: "Engr"}
    ]
    
    function getdatas(){
        setTimeout(()=>{
          datas.forEach(data => console.log(data.name))
      }, 500)
    }
    
    // function createdata(newdata){
    //     setTimeout(()=>{datas.push(newdata)}, 1000)
    // }
  
    // getdatas()
    // createdata({name: "Prash", profession: "Engr"})
  
    //op
    // AjayVivek
  
  
  // ====================  Callback  ============================
   
    // function createdata(newdata, callback){
    //     setTimeout(()=>{
    //       datas.push(newdata); 
    //       callback()
    //     }, 1000)
    // }
    
    // createdata({name: "Prash", profession: "Engr"}, getdatas)
  
  //====================== Promises ==============================
  
  // let myPromise = new Promise((resolve, reject)=>
  // {	if (0){
  // 	resolve("Successful")
  // }
  // else{
  // 	reject("Failure")
  // }
  // 	})
  
  // myPromise.then(val => console.log(val)).catch(err => console.log(err))
  
  //-------------------------------------------------------------
  
  // function createdata(newdata){
  // 	return new Promise((resolve, reject) => {
  //   	setTimeout(()=>{
  //     if(1){
  //     	datas.push(newdata);
  //     	resolve()
  //     }
  //     else{
  //     	reject("Failure")
  //     }
        
  //   }, 1000)
  //   })
      
  // }
  
  // createdata({name: "Prash", profession: "Engr"}).then(getdatas).catch(err => console.log(err))
  
  
  
  //======================== Async Await =========================
  
  
  // function createdata(newdata){
  // return new Promise((resolve, reject)=>{
  //   if(1){
  //     setTimeout(()=>{
  //     datas.push(newdata)
  //     resolve()
  // }, 2000)
  //   }
  //   else{
  //     reject(console.log("Failure"))
  //   }
  // })
    
  // }
  
  // async function start(){
  // await createdata({name: "Prashant", profession: "Engr"});
  // getdatas();
  // }
  
  // start()
  

  //   async function start(){
//   try{await createdata({name: "Prashant", profession: "Engr"});
//   getdatas();}
//   catch{(e) => console.log(e)}
//   finally{console.log('Finally')}
  //&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// Closure

// function sum(a){
//     console.log(a)
//     let c = 4
//     return function(b){
//   	    return a + c + b
//   }
// }

// let store = sum(3)
// console.log(store(2))

//scope of a and c is called as lexical scope as it is accessible by inner function. The value of a and b is not lost and it is retained for inner fn is called as closure. A closure is a function having access to the parent scope.

//-------------------------------------------------------------
// var sum = function(a, b, c){
// 	return {
//   getSumTwo: function(){
//   	return a + b
//   },
//   getSumThree: function(){
//   	return a + b + c
//   }
//   }
// }
// console.log(sum(2, 4, 6))
// let store = sum(2, 4, 6)
// console.log(store.getSumTwo())
// console.log(store.getSumThree())
  
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// Call, Apply & Bind

//Call
//scenerio 1
// let userDetails1 = {
//   name: "Prash",
//   age: 24,
//   prof: "Engr",
//   printDetails: function(){
//     console.log(this) //this is used for self refrencing. 
//     console.log(this.name)
//   }
// }

// userDetails1.printDetails()

// let userDetails2 = {
//   name: "Akash",
//   age: 22,
//   prof: "Not Engr"
// }

// userDetails1.printDetails.call(userDetails2) //fn borrowing

//scenerio 2
let userDetails1 = {
    name: "Prash",
    age: 24,
    prof: "Engr"
  }
  
  let userDetails2 = {
    name: "Akash",
    age: 22,
    prof: "Not Engr"
  }
  
  //Generic fn written outside of an object. To use for every object.
  printDetails = function(){
    console.log(this) //this is used for self refrencing. 
    console.log(this.name)
  }
  
  // printDetails.call(userDetails1)
  // printDetails.call(userDetails2)
  
  //with parameter
  printDetails1 = function(state, country){
    console.log(this) //this is used for self refrencing. 
    console.log(this.name, state, country)
  }
  
  // printDetails1.call(userDetails1, "Mumbai", "India")
  // printDetails1.call(userDetails2, "Delhi", "India")
  
  // // Apply //pass parameter as an array
  // printDetails1.apply(userDetails1, ["Mumbai", "India"])
  // printDetails1.apply(userDetails2, ["Delhi", "India"])
  
  //Bind // first store the value in a variable and use it later //create copy of a fn and invoke later
  let newfun = printDetails1.bind(userDetails1, "Mumbai", "India")
  // console.log(newfun)
  newfun()

  //&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
  // Map, Reduce, Filter, Sort, Reduce

// const companies = [
//     {name: "a", category: "pb", start: 1968},
//     {name: "h", category: "sb", start: 1952},
//     {name: "c", category: "pb", start: 1998},
//     {name: "g", category: "sb", start: 1943},
//     {name: "b", category: "sb", start: 1978}
//   ]
  
//   const ages = [3, 4, 67, 98,87,56,34,43,54,6,9, 234, 657, 0]
  
  //forEach
  // companies.forEach(function(company, index){
  //   console.log(index, company)
  // })
  
  // companies.forEach((company, index) => console.log(company))
  
  //filter
  // const filtered = ages.filter(function(age){
  //   return age >= 50
  //   // if(age >= 50){
  //   //   return true
  //   // }
  // })
  
//   const filtered = ages.filter(age => age>=50)
  
  // console.log(filtered)
  
  // const forCompany = companies.filter(company => company.category == "pb")
  
  // const forCompany = companies.filter(function(company){
  //   // return company.category == "pb"
  //   if(company.category == "pb")  return true
  // })
  // console.log(forCompany)
  
  
  //---------------------------  map(HOFn)  -------------------------
  
  // companies.map(function(company){
  //   console.log(company)
  //   // console.log(company.name)
  // })
  
  
  // let res = companies.map(function(company){
  //   // console.log(company)
  //   // console.log(company.name)
  //   return company
  // })
  
  // console.log(res)
  
  // companies.map(company => console.log(company)) //Higher Order Function
  
  // const mapped = companies.map(company => {return `${company.category} ${company.name}`})
  // console.log(mapped)
  
  // companies.map(company =>  console.log(`${company.category} ${company.name}`))
  
  //-------------------------sort----------------------------------
  
  // const sorted = companies.sort(function(c1, c2){
  //   if(c1.start > c2.start){
  //     return 1
  //   }else{
  //     return -1
  //   }
  // })
  
  // const sorted = companies.sort((c1, c2) => c1.start < c2.start ? 1 : -1)
  
  // const sorted = companies.sort(function(c1, c2){
  //   return c1.start - c2.start
  // })
  
  // const sorted = companies.sort((c1, c2) => c1.start - c2.start)
  
  // console.log(sorted)
  
  // const sortedAges = ages.sort((a, b) => a - b)
  
  // console.log(sortedAges)
  
  //--------------- reduce -----------------------------------------
  
  // let sum = ages.reduce(function(total, age){
  //     return total + age
  // })
  
  // let sum = ages.reduce(function(a, b){return a + b})
  
  // let sum = ages.reduce((a, b) => a + b)
  
  // console.log(sum)


//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// undefined and not defined

console.log(a)
if(a===undefined){
  console.log("undefined")
}else{
  console.log("not defined")
}
var a = "Prash"
console.log(a)
var a = 4
console.log(a)

(obj !== undefined || obj !== null ? obj.name : "")

//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
//Prototype

// const obj = new Object({
//   name: "Prashant"
// })

// const obj = new obj()

// const obj = {
//   name: "Prash"
// }
// console.log(obj) //check Protoype under console in browser

// const obj2 = {
//   age: 24,
//   __proto__: obj
// }

// console.log(obj2) //check Protoype under console in browser

//-----------------------------------------------------------------

// const obj = {
//   name: "Prash",
//   getName: function(){
//     return this.name
//   }
// }
// console.log(obj) //check Protoype under console in browser

// const obj2 = {
//   age: 22,
//   name: "Akash",
//   __proto__: obj
// }

// console.log(obj2.getName()) //check Protoype under console in browser

//-----------------------------------------------------------------

const obj = {
    name: "Prash",
    age: 24,
    getName: function(){
      return this.name
    },
    getAge: function(){
      return this.age
    }
  }
  // console.log(obj) //check Protoype under console in browser
  
  const obj2 = {
    age: 22,
    name: "Akash",
    __proto__: obj
  }
  
  // console.log(obj2.getName()) //check Protoype under console in browser
  // console.log(obj2.age)
  
  const obj3 = {
    prof: "Engr",
    __proto__: obj2
  }
  
  // console.log(obj3)
  // console.log(obj3.name)
  
  // const arr = ["Prash"]
  // console.log(arr) //check prototype/properties in browser
  
// const array = new Array()
// console.log(array)

// const object = new Object()
// console.log(object)

// const string = new String()
// console.log(string)

// function Function(){}

// const fun = new Function()
// console.log(fun)
  
  //==================polyfill===================================
  
  // Array.prototype.show = function(){
  // 	return this
  // }
  
  // let arr1 = ["Delhi"];
  // console.log(arr1.show())
  
  
  // [[Prototype]]: Array(0)
  // show: ƒ ()
  // at: ƒ at()
  // concat: ƒ concat()
  // constructor: ƒ Array()
  // copyWithin: ƒ copyWithin()
  // entries: ƒ entries()


//   let arr = [2, 4, 6]

// Array.prototype.add = function(){
//   return this.reduce((a, b) => a + b)
// }

// console.log(arr.add())

// Array.prototype.convertToString = function(){
//   return this.toString()
// }

// console.log(arr.convertToString())
// console.log(typeof(arr.convertToString()))

// Array.prototype.convertToObj = function(){
//   let obj = {}
//   this.forEach(item => {
//     obj[item] = item
//   })
//   return obj
// }

// console.log(arr.convertToObj())
  
  //--------------------------------------------------------
  
  // Array.prototype.convertToObj = function (){
  // 	let obj = {};
  //   this.forEach(item => {
  //   	obj[item]= item;
  //   })
  //   return obj;
  // }
  
  // let arr = ["Delhi"]
  // console.log(arr)
  // console.log(arr.convertToObj())
  
  //---------------------constructor-------------------------
  
  
// function myPrototype(name){
//     this.name = name;
// }

// myPrototype.prototype = obj  

//   //  object-------constructor
// let proto = new myPrototype("Priya")
// console.log(proto)


// console.log(proto.getName())
// console.log(proto.getAge())
  

//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
// Map, Set, WeakSet and WeakMap

//set It contains only unique values
//Object constructor

// let arr = [1, 3, 4, 5]
// let obj = new Set(arr)
// console.log(obj)//check Protoype under console in browser
// console.log(obj.size)

// obj.add(5)
// obj.add(5)
// console.log(obj)
// obj.delete(5)
// console.log(obj)

// var obj1 = {name: "Prash"}
// obj.add(obj1)
// console.log(obj)
// console.log(obj.has(2))
// console.log(obj.has(10))

// for(let new1 of obj){
//   console.log(new1)
// }

// obj.forEach(element => {
//   console.log(element)
// });

//-----------------------------map ->key and values pair

// let myMap = new Map([["a1", "Prash"], ["a2", "Akash"]])
// console.log(myMap)
// myMap.set("a2", "Ajay")
// console.log(myMap)
// myMap.delete("a2")
// console.log(myMap)
// console.log(myMap.get("a1"))
// for(let [key, value] of myMap){
//   console.log(`key ${key}, value ${value}`)
// }
// myMap.forEach((key, value) => console.log(key, value))

//----------------------------------------WeakSet

// let ws = new WeakSet();
// console.log(ws)//check Protoype under console in browser, It is not iterable, less properties, Is used to store only object

// var ob1 = {}
// var ob2 = {}
// ws.add(ob1)
// ws.add(ob2)
// ws.delete(ob2)
// console.log(ws)

//--------------------------------------------WeakkMap

// let wm = new WeakMap()
// console.log(wm)//check Protoype under console in browser, less properties

// var ob1 = {name: "Prash"}
// var ob2 = {}
// wm.set(ob1, "Private")
// wm.set(ob2, "Private DAta")
// // wm.delete(ob2)
// console.log(wm)

//weakset and weakmap works only for object related activity. Both are not iterable

//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
//Hoisting


// getName()
// console.log(a)

// var a = 5

// function getName(){
//   console.log("Print")
// }

// const user = () => {
//   console.log("user fn")
// }
// user()

//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
//Concept of Script, (Global Execution Context)Global & Local Scope, Closure & call stack

// //Script
// let name = "Prash"
// const age = 24

// //Global
// var city = "Delhi"

// //Global
// function a1() {
//   //Local
//   let name = "Akash"
//   let age = 22
//   let city = "Mumbai"
//   function a2() {
//     //Closure of a2 is a1 which contains name and city(Closure a1)
//     //Local
//     let age = 28
//     function a3() {
//       //Closure of a3 is a2 which contain age
//       //Local
//       let name = "Omkar"
//       let city = "Nav Mum"
//       function a4() {
//         //Closure of a4 is a3 contain city
//         //Local
//         let age = 20
//         let name = "Dinesh"
//         console.log(name, age, city)
//       }
//       a4()
//       console.log(name, age, city)
//     }
//     a3()
//     console.log(name, age, city)
//   }
//   a2()
//   console.log(name, age, city)
// }

// a1()
// console.log(name, age)



// let name = "Prash"
// const age = 24
// var city = "Delhi"

// function a1() {
//   let name = "Akash"
//   let age = 22
//   let city = "Mumbai"

//   function a2() {
//     let age = 28
//     function a3() {
//       let name = "Omkar"
//       let city = "Nav Mum"
//       function a4() {
//         let age = 20
//         let name = "Dinesh"
//         console.log(name, age, city)
//       }
//       a4()
//       console.log(name, age, city)
//     }
//     a3()
//     console.log(name, age, city)
//   }
//   a2()
//   console.log(name, age, city)
// }

// a1()
// console.log(name, age)

//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
//Event Bubbline, Capturing, Propagation(Stop, Immediate, Prevent Default)

//================Event Bubbling===========================

{/* <html>

<body>
    <div>
        <button>Bubbling</button>
    </div>
</body>
<script>
    var div = document.querySelector("div");
    var button = document.querySelector("button");

    div.addEventListener("click", () => {
        console.log("Div")
    })

    button.addEventListener("click", () => {
        console.log("Button")
    })
</script>

</html> */}
//===============Event Capturing============================
{/* <html>

<body>
    <div>
        <button>Capturing</button>
    </div>
</body>
<script>
    var div = document.querySelector("div");
    var button = document.querySelector("button");

    div.addEventListener("click", () => {
        console.log("Div")
    }, true)

    button.addEventListener("click", () => {
        console.log("Button")
    }, true)
</script>

</html> */}

//=====================Stop Propogation========================

{/* <html>

<body>
    <div>
        <button>Stop Propogation</button>
    </div>
</body>
<script>
    var div = document.querySelector("div");
    var button = document.querySelector("button");

    div.addEventListener("click", () => {
        console.log("Div")
    })

    button.addEventListener("click", (event) => {
        event.stopPropagation();
        console.log("Button")
    })
</script>

</html> */}

//===================Immediate Propogation======================

{/* <html>

<body>
    <div>
        <button>Immediate Propogation</button>
    </div>
</body>
<script>
    var div = document.querySelector("div");
    var button = document.querySelector("button");

    div.addEventListener("click", () => {
        console.log("Div")
    })

    button.addEventListener("click", (event) => {
        console.log("Button")
    })

    button.addEventListener("click", (event) => {
        event.stopImmediatePropagation()
        console.log("Button1")
    })
</script>

</html> */}

// ====================Prevent Default============================

{/* <html>

<body>
    <div>
        <button>Prevent Default</button>
        <a href="google.com">Google</a>
    </div>
</body>
<script>
    var div = document.querySelector("div");
    var a = document.querySelector("a");

    a.addEventListener("click", (event) => {
        event.preventDefault();
        console.log("a")
    })

</script>

</html> */}

//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
//==================================Currying fn================

// normal
function add1(a, b, c){
    return a + b + c
}

console.log(add1(2, 3, 4))

// currying
function add2(a){
    return function (b){
        return function (c){
            return a + b + c
        }
    }
}

console.log(add2(2)(3)(4))

// currying using arrow fn
let add3 = (a) => (b) => (c) => a + b + c;
console.log("Arrow fn: ", add3(2)(3)(4))

// currying in real life

let userObj = {
    name: "Prashant",
    age: 24
}

function userInfo(obj){
    return function(userParams){
        return obj[userParams]
    }
}

let res = userInfo(userObj)

console.log(res('name'))

console.log(userInfo(userObj)('age'))


//infinite currying

function infiniteCurrying(a){
    return function(b){
        if(b)   return infiniteCurrying(a + b)
        return a
    }
}

console.log(infiniteCurrying(2)(4)(3)())

//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
//==================Memoization===========================

// It is an optimization technique used to reduce the time-consuming calculations by saving previous input and output to something called cache and returning the result from cache.

//Memoization

// function sum(n){
//     let total = 0;
//     for(let i=0; i<=5; i++){
//         total += i;
//     }
//     return total;
// }

// console.time()
// console.log(sum(5))
// console.timeEnd()

// let sum = 0;
// const calc = (n) => {
//     for(let i=0; i<= n; i++){
//         sum += i;
//     }
//     return sum;
// }

// const memoize = (fun) => {
//     let cache = {};
//     return function(...args){
//         let n = args[0];
//         if(n in cache){
//             console.log("cache");
//             return cache[n];
//         }
//         else{
//             console.log("First time");
//             let res = fun(n);
//             cache[n]=res;
//             return res;
//         }
//     }
// }

// console.time()
// const eff = memoize(calc)
// console.log(eff(5))
// console.timeEnd()

// console.time()
// console.log(eff(5))
// console.timeEnd()

function sum(n){
    let total = 0;
    for(let i=0; i<=n; i++){
        total += i;
    }
    return total;
}

const memoize = (fun) => {
    let cache = {};
    console.log(cache)
    return function(n){
        if(n in cache){
            return console.log("From cache: ",cache[n]);
        }else{
            let res = fun(n);
            cache[n] = res;
            console.log(cache)
            return console.log("First Time: ", res)
        }
    }
}


console.time()
const eff = memoize(sum)
eff(5)
console.timeEnd()

console.time()
eff(4)
console.timeEnd()

console.time()
eff(3)
console.timeEnd()

console.time()
eff(7)
console.timeEnd()

console.time()
eff(5)
console.timeEnd()

console.time()
eff(4)
console.timeEnd()

console.time()
eff(3)
console.timeEnd()



// function memoize(n){
//     let cache = {}
//     console.log(cache)
//     if(n in cache){
//         return console.log("Cache: ", cache[n])
//     }
//     else{
//         let res = sum(n)
//         cache[n] = res
//         return console.log("First time: ", res)
//     }
// }

// console.time()
// memoize(5)
// console.timeEnd()

// console.time()
// memoize(5)
// console.timeEnd()

// console.time()
// memoize(5)
// console.timeEnd()

// console.time()
// memoize(4)
// console.timeEnd()

// console.time()
// memoize(4)
// console.timeEnd()

//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
//==================Debouncing================================
//The debounce() function forces a function to wait a certain amount of time before running again. The function is built to limit the number of times a function is called.
//The clearTimeout() method clears a timer set with the setTimeout() method.

// function App() {

//     let c=0;
//     function counter(){
//       console.log("Counter: ", c++);
//     }
  
//     function debounce(fn, delay){
//       let timer;
//       return function(){
//         if(timer){
//           console.log("Timer: ", timer)
//           // for(let i = 0; i <= timer; i += 10){
//           //   console.log("Timer: ", timer)
//           // }
//           clearTimeout(timer)
//         }
        
        
        
//         timer = setTimeout(() => fn(), delay)
//       }
      
//     }
  
//     const calledme = debounce(counter, 5000)
  
//     function Alert(){
//       alert('I will execute only after specified time')
//     }
  
//     function buttonDebounce(fn, d){
//       let timer;
//       return function(){
//       if(timer) clearTimeout(timer)
//       timer = setTimeout(() => fn(), d)
//       }
//     }
  
//     const callButton = buttonDebounce(Alert, 1000)
  
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <input type="text" onKeyUp={() => {calledme()}}/>
//           <button onClick={() => {callButton()}}>Debounce</button>
//         </header>
//       </div>
//     );
//   }



//advance
// function App() {

//     const debounce = (func, delay) => {
//       let debounceTimer
//       return function () {
//         const context = this
//         const args = arguments
//         clearTimeout(debounceTimer)
//         debounceTimer  = setTimeout(() => func.apply(context, args), delay)
//       }
//     }
  
//     const calledme = debounce(function () {
//       alert("Hello\nNo matter how many times you" +
//         "click the debounce button, I get " +
//         "executed once every 3 seconds!!")
//     }, 1000)
  
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <button id="debounce" onClick={() => { calledme() }}>Debounce</button>
//         </header>
//       </div>
//     );
//   }
  
//   export default App;

//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
//Constructor
// function Dog(name, breed, color){
//   return [name, breed, color]
// }

// const desc = Dog('Oscar', 'Begel', 'Black')
// console.log(desc)



// function Dog(name, breed, color){
//     this.name = name
//     this.breed = breed
//     this.color = color
//     this.bark = function(){
//       return 'Woof!'
//     }
//   }
  
//   const desc = new Dog('Oscar', 'Begel', 'Black')
//   console.log(desc)








//Event Loop


//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//@visualized

//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
//Generator Fn
// function* generatorfn(){
//     yield 
//     console.log('Its 1st')
//     yield 
//     console.log('Its 2nd')
//     return console.log("Done!")
//   }
  
//   const genObj = generatorfn()
//   genObj.next()
//   genObj.next()
//   genObj.next()



//prototypal inheritance
// function Dog(name, breed, color){
//   return [name, breed, color]
// }

// const desc = Dog('Oscar', 'Begel', 'Black')
// console.log(desc)



// function Dog(name, breed, color){
//   this.name = name
//   this.breed = breed
//   this.color = color
//   this.bark = function(){
//     return 'Woof!'
//   }
// }

// const dog1 = new Dog('Oscar', 'Begel', 'Black')
// const dog2 = new Dog('Daisy', 'Lab', 'White')

// console.log(dog1)
// console.log(dog2)
// console.log(desc)
// console.log(desc.Dog())
// console.log(desc.bark)
// console.log(desc.bark())
// console.log(desc.bark)
// console.log(Dog)
// console.log(Dog.prototype)
// console.log(Dog.prototype)


// class Dog {
//   constructor(name, breed, color) {
//   this.name = name
//   this.breed = breed
//   this.color = color
//   this.bark = function () {
//     return console.log(name, 'Woof!')
//   }
// }
// bark1 = function () {
//   return console.log(name, 'Woof!')
// }
// }

// class chi extends Dog{
//   constructor(name){
//     super()
//     this.name = name
//   }
//   bark2 = function(){
//     return console.log(name, "Don't woof!")
//   }
// }

// const dog1 = new Dog('Oscar', 'Begel', 'Black')
// const dog2 = new Dog('Daisy', 'Lab', 'White')
// const dog3 = new chi()

// console.log(dog1)
// console.log(dog2)
// dog1.bark()
// dog1.bark1()
// dog3.bark2()


// let obj = {
//   name: "Prash",
//   fun: function(){
//     return "Object created"
//   }
// }

// let me = Object.create(obj)
// console.log(me)





//%%%%%%%%%%%%%%%%%%%%  Tricky Quest  %%%%%%%%%%%%%%%%%%%%%%%%%%%%

console.log(2 + '2') //22
console.log(2 - '2') //0

//----------------------------------------------------------------

let nums = [2, 4, 5, 7, 7, 6, 4] //Remove duplicacy
console.log([...new Set(nums)]) //[2, 4, 5, 7, 6]

//----------------------------------------------------------------

console.log((function(a, b){return a + b})(2, 4)) //IIFE

//----------------------------------------------------------------

let func = function(){ 
    {
      let a = 'let';
      var b = 'var';
    }
    console.log(b) //var 
    console.log(a) //not defined
    
  }
  //var has functional scope, let has block scope
  func();

  //the var should not print value
//   let func = function(){

//     (function(){
//       let a = 'let';
//       var b = 'var';
//     })()
//     // {
//     //   let a = 'let';
//     //   var b = 'var';
//     // }
//     console.log(b) //var
//     console.log(a) //not defined
    
//   }
//   //var has functional scope, let has block scope
//   func();
  
//---------------------------------------------------------------

console.log(5 < 6 < 7); //true
console.log(7 > 6 > 5); //false

//--------------------------------------------------------------

let a = () => arguments;
console.log(a('Hi')) //arguments is not defined

function a () { return arguments }
console.log(a('Hi')) //Arguments ['Hi', callee: ƒ, Symbol(Symbol.iterator): ƒ]

//-------------------------------------------------------------

// let x = function(){
//     return  //;
//     {
//       msg: 'HI'
//     }
//   }
  
//   console.log(x()) //undefined

//---------------------------------------------------------------

let profile = {
    name: 'Prash'
  }

  profile.age = 24;

  console.log(profile) //prevent user from adding new property to object profile // {name: 'Prash', age: 24}



  let profile = {
    name: 'Prash'
  }
  Object.freeze(profile)
  profile.age = 24;
  console.log(profile) //{name: 'Prash'}



  let profile = {
    name: 'Prash'
  }
  Object.seal(profile)
  
  profile.name = 'Gupta'
  profile.age = 24;
  
  console.log(profile) //{name: 'Gupta'}

//----------------------------------------------------------------

console.log(Math.max()) //-Infinity //'coz it compares something to present value

//---------------------------------------------------------------
//https://www.youtube.com/watch?v=QCQVttjblRs
console.log([] + []) //nothing will print //convert to string

console.log({} + {}) //[object Object][object Object]

//---------------------------------------------------------------

// function y(){
//     console.log(this.length); //2
//   }
  
//   var x = {
//     length: 5,
//     method: function(y){
//       // console.log(arguments)
//       arguments[0]();
//     }
//   };
  
//   x.method(y, 1) 

//---------------------------------------------------------------

// const x = 'constructor'
// console.log(x[x](01)) //1 //type string

//---------------------------------------------------------------

console.log(0.1 + 0.2) //0.30000000000000004 
//precision error 'coz machine understands only base 2 and it's base 10(decimals are in base 10)

//---------------------------------------------------------------

console.log(('HI').__proto__.__proto__.__proto__) //null
//sting > Object > null // String is created by Object. Object is the final constructor in prototype object.

//---------------------------------------------------------------

// function returns total number of arguments without using loops

// let x = function(){
//     return [].slice.call(arguments).length
//   }
  
//   console.log(x(1, 4, 5 , 5, 6))

//---------------------------------------------------------------

var A = {
    x: function(){
      console.log('x')
    },
    y: function(){
      console.log('y')
    },
    z: function(){
      console.log('z')
    }
  }
  
  A.x().y().z()
  
  //should pring x, y and z

//   var A = {
//     x: function(){
//       console.log('x')
//       return A //or return this
//     },
//     y: function(){
//       console.log('y')
//       return A //or return this
//     },
//     z: function(){
//       console.log('z')
//     }
//   }
  
//   A.x().y().z()

//   x
//   y
//   z

//---------------------------------------------------------------


let a = true;

setTimeout(() => {
  a = false
}, 2000)

while(a){
  console.log('hello')
}

// hello will print for infinite times // code is stuck inside a while loops our settimout fn will not be able to execute

//---------------------------------------------------------------

let c = 0, a = true;

setTimeout(() => {
  a = false
  // clearInterval(id)
  console.log('End of Execution')

}, 2000)

// while(a){
//   console.log(c++)
// }

let id = setInterval(() => {
  if (a) console.log(c++)
}, 200)

//---------------------------------------------------------------

function foo(){
    return foo()
  }
  
  foo()

  //call stack will stack fn: foo() infinite times //Maximum call stack size exceeded

//---------------------------------------------------------------


// console.log('start')
// let c = 0
// function called(){
//   while(c>=0 && c < 30000)
//   console.log(c++)
// }
// console.log('fn will call')
// console.time()
// called()
// console.timeEnd()

// console.log('fn called and exec moved to settmeout')
// // console.time()
// setTimeout(function(){
//   console.log('There')
//   console.log('There')
//   console.timeEnd()
// }, 1000);
// // console.time()

// let cd = 0
// function called1(){
//   while(cd>=0 && cd < 30000)
//   console.log(cd++)
// }
// console.log('fn will call')
// console.time()
// called1()
// console.timeEnd()
// console.log('To soon to say bye')
// console.time()
// // console.timeEnd()

//---------------------------------------------------------------


console.log('hi')

setTimeout(() => {
  console.log('timeout')
}, 0)

console.log('there')


// hi
// code.js:9 there
// code.js:6 timeout
//---------------------------------------------------------------
// let c = 0
// function called(d){
//     // console.time()
//     setTimeout(() => {
//       console.log(++c, d)
//       d+=1000
//     //   console.timeEnd()
//       if(d<=10000){
//         called(d)
//       }
      
//     }, d)
//   }
  
//   called(1000)

//---------------------------------------------------------------

function logA() { console.log('A') }
function logB() { console.log('B') }
function logC() { console.log('C') }
function logD() { console.log('D') }

// Click the "RUN" button to learn how this works!
logA();
Promise.resolve().then(logC);
setTimeout(logB, 0);
Promise.resolve().then(logC);
Promise.resolve().then(logC);
Promise.resolve().then(logC);
logD();

//---------------------------------------------------------------

function listener1(){
    setTimeout(function () {console.log('1')})
    Promise.resolve().then(function(){console.log('2')})
    const promise = Promise.resolve()
    setTimeout(function () {console.log('3')})
    console.log(4)
    setTimeout(function () {console.log('5')})
  }
  
  function listener2(){
    setTimeout(function () {console.log('6')})
    Promise.resolve().then(function(){console.log('7')})
    const promise = Promise.resolve()
    setTimeout(function () {console.log('8')})
    console.log(9)
    setTimeout(function () {console.log('10')})
  }
  
  listener1()
  listener2()
  

//---------------------------------------------------------------



//---------------------------------------------------------------



//---------------------------------------------------------------



//---------------------------------------------------------------

  

























