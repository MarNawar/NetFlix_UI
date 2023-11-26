// a(); // "Hello A"
// b(); // TypeError
// function a() {
//   console.log("Hello A");
// }
// var b = function() {
//   console.log("Hello B");
// }
// // Why? During mem creation phase a is created in memory and function assigned to a. But b is created like a variable (b:undefined) and until code reaches the function()  part, it is still undefined. So it cannot be called.