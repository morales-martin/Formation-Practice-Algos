/*

The decimal system uses the digits 0-9, the binary system uses the digits 0 and 1, and the hexadecimal system uses the digits 0-9 and the letters A-F. The ternary system is a base-3 numeral system that uses the digits 0, 1, and 2.

Given an integer, write a function that converts the number into its base-3 representation. Return the result as a string.

Example(s)
convertToBase3(0) === "0"
convertToBase3(1) === "1"
convertToBase3(2) === "2"
convertToBase3(3) === "10"
convertToBase3(4) === "11"
convertToBase3(-5) === "-12

*/

const convertToBase3 = (num) => {
  return num.toString(3);
};

// console.log(convertToBase3(0)); //=== "0");
// console.log(convertToBase3(1)); //=== "1");
// console.log(convertToBase3(2)); //=== "2");
// console.log(convertToBase3(3)); //=== "10");
// console.log(convertToBase3(4)); //=== "11");
// console.log(convertToBase3(-5)); //=== "-12");
