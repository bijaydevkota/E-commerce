//Javascript defination:
//-->javascript is the object oriented client side scripting language used to add the functionality.
//-->In early days javascript was only used in browser for interactivity. Later Js was used in server side also after the       introduction of node js.

//Variables in Js:
//--> Variables are the containers used to store the data.
//--> In js we declare variable using var, let, const.

// VAR:
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


//UNDEFINED AND NULL
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