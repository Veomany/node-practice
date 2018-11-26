console.log("Hello World!");

// imports students from students.js file
const students_import = require("./students");

// checking to see if import is working
console.log(students_import);

// for each iterates over an array. could not iterate over students as it was imported as an object.
students_import['students'].forEach(element => {
  console.log(element);
});