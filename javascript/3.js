//ARRAY
//--> Collection of similar data types under the same name.
//Example :
const students = ["ram", "shyam", "hari","mohan","sohanji"];//Array of strings
const teachers = [
  {
    name: "ram",
    subject: "math",
  },
  {
    name: "shyam",
    subject: "sceience",
  },
];//Arrray of objects
console.log(students)
console.log(teachers)

//Methods of array
//1. At

console.log(students[2]);
console.log(teachers[0].subject);

//2.Length
console.log(students.length);
console.log(teachers.length);

//3.Push
students.push("bijay")
console.log(students);

teachers.push({name:"loki",subject:"English"});
console.log(teachers)

//4.Slice
// console.log(students.slice(1,3));


//5.Splice
// console.log(students.splice(1,3))

//6.Filter
const response = students.filter((student) => student === "ram");
console.log(response);

const response1 = students.filter((student)=>{
    return student.length > 5;
})
console.log(response1)


const res = teachers.filter((teacher)=> 
{
    return teacher.name === "ram";
}
)
console.log(res)