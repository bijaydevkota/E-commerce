//Spread Operator
// It helps to make the new object or array from existing object or array.
const bijay = {
  username: "bijay_devkota",
  age: 23,
  address: "Tikapur",
  phone: 9866338344,
};

// const newbijay = {...bijay, qualification:"bachelor"};
const newbijay = {...bijay, age : 25};
console.log(newbijay)