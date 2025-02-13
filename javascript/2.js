//DATA TYPES IN JAVASCRIPT
//--> Classification of data into different datatypes.
//--> In JS datatypes are classified into two types:
//1.Primitive data types
//2.Non-Primitive data types

//1. Primitive Data Types:
//--> Those having single value.
//Eg, const a = 10;
//There are 6 primitive datatypes:
//1.number
//2.string
//3.Boolean
//4.Null
//5. Undefined
//6.BgInt -> above 15 digits

//2. Non-Primitive Data Types:
//--> Those having multiple value.
//Eg, const student = ["ram","shyam","hari"];
//--> There are 3 non-primitive datatypes:
// Object (object,array,function)
//1. Object
//2. Array
//3. Function

//Primitive
//1. Number
const a = 10;
const b = 10.54546236;
console.log(a);
console.log(typeof a);
console.log(b);

// Methods in Number (toString(),to Fixed())
const c = a.toString();
console.log(typeof c);

const d = b.toFixed();
console.log(d);

//2. String
const username = "bijay";
const surname = "bijay-devkota";
console.log(username);

//Methods in String (toUpperCase(), toLowerCase(),length)
const e = username.toUpperCase();
console.log(e);

const f = username.toLowerCase();
console.log(f);

console.log(username.length);

console.log(username.charAt(3));

console.log(username.slice(0, 4));

console.log(surname.split("-"));

console.log(surname.split("-")[0]);
console.log(surname.split("-")[1]);

//3. Boolean
//--> It always returns true or false
const g = 4;
const h = 5;
console.log(g > h);

//BgInt
const i = 2343276487253498278125498236485146982n;
console.log(i);
console.log(typeof i);

//Non-primitive
//Object
//--> Collection of key value pairs under the same name .
const person = {
  name: "lokichaulagain",
  age: 20,
  college: "NCIT",
  address: "KTM",
};

console.log(person);

//Method of object (Object.keys(), object.values(), object.entries())

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

console.log(Object.keys(person)[0]);
console.log(Object.values(person)[1]);
console.log(Object.entries(person)[1][1]);

//Array
//--> Collection of similar data types under the same name.
//Example : const student =["ram", "shyam","hari"];
//Array can be further classified into two types:
//1. Array of string
//2. Array of object

//1. Array of string
//--> Array made from collection of string.
const students = ["ram", "shyam", "hari"];
console.log(students);
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers);

//2. Array of object
//--> Collection of object under the same name.
const people = [
  {
    name: "Ram",
    age: 13,
  },
  {
    name: "hari",
    age: 23,
  },
  {
    name: "shyam",
    age: 33,
  },
];
console.log(people);
console.log(people.length);
console.log(people[0]);
console.log(people[0].name);
console.log(people[0].name.toUpperCase());
