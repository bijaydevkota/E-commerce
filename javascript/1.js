//1.Javascript defination:
//-->javascript is the object oriented client side scripting language used to add the functionality.
//-->In early days javascript was only used in browser for interactivity. Later Js was used in server side also after the       introduction of node js.

//Variables in Js:
//--> Variables are the containers used to store the data.
//--> In js we declare variable using var, let, const.

//2. VAR:
//--> It is old way of declaring variables (Don't use it in modern Js)

var a= 5;
console.log(a);

//Redeclaration:
var b= 4;
var b=6;
console.log(b);

//Reassigning:
var c=30;
c=40;
console.log(c);


//LET:
//--> It is recommended way of declaring variables in modern js
//--> It doesnot support re-declaration but supports re-assigning

//Re-declaring the variables is not possible
//for eg:
// let d=60;
// let d=70;
// console.log(d);

//Re-assigning:
//for eg:
let e=30;
e=50;
console.log(e);


//CONST:
//--> It is highly recommended way of declaring variables in modern js.
//--> Both re-declaration and re-assigning is not supported.

//Re-declaration is not possible:
// const f=40;
// const f=50;
// console.log(f);

//Re-assignning:
// const f=22;
// f=33;
// console.log(f)


//3. UNDEFINED AND NULL
//UNDEFINED:
//--> When we declare variable and not assigned any value to it is known as undefined.
var myname;
let surname;
console.log(myname)
console.log(surname)

//NULL:
//Value is assinged but is empty
let abc=null;
var xyz = null ;
console.log(abc);
console.log(xyz);



//4. Operators in javascript:
//--> operators are used to perform logical & mathematical computations.

//Assignment operator
//--> Used to assign the value of variable
const bijaydevkota = 20;
const lokendra = "chaulagain";

//Comparison operator
const bijay=5;
const loki=6;

// Greater than (>)
console.log(loki > bijay);
//Less than (>)
console.log(loki<bijay);

//Addition operator
console.log("Sum =",loki+bijay);

//Subtraction operator
console.log("Sub =", loki-bijay);

//Multiplication operator
const z=loki*bijay
console.log("Mul =",z);

//Division operator
const div = loki/bijay
console.log("divison =",div)

//value equal to operator (==)
//It only checks the value
const value1= 10
const value2="10"
console.log(value1 == value2)

//Type equal to operator (===)
console.log(value1 === value2)

//Value not equals to operator (!=)
console.log(value1 != value2)

//Type not equal to operator (===)
console.log(value1 !== value2)

//Greater than equals to operator (>=)
const ab=5
const bc=10
console.log(ab>=bc)

//Less than equals to operator (<=)
console.log(ab<=bc)


//Conditional Operator (? :) (short form of "if else" condition)
const age = 17;
const requiredage = 18;
console.log(age > requiredage ? "you are eligible" : "You are kid mf")

//Increment Operator (++) (It increases the value by 1)
let bbb = 10
bbb++
console.log(bbb)

//Decrement Operator (--) (It decreases the value by 1)
bbb--
console.log(bbb)
