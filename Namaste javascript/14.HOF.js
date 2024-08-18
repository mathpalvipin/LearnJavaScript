// // higher order function 
//  take function as input and send function as output

// function x(){  // x - callback
//     console.log("callback") 
// }

// function y(x){   //y is HOF
    
//     console.log("HOF")
//     x();
// }
// y(x);



// const radius = [1,2,3,4];

// const calculateArea = function (radius){
//     const output = [];
//     for(let i =0;i <radius.length;i++){
//         output.push (Math.PI* radius[i] +(radius[i]));
//     }
//     return output;
// }
// console.log(calculateArea(radius));

// const calculateCircumference = function (radius){
//     const output = [];
//     for(let i=0; i<radius.length ;i++){
//         output.push (2 *MATH.PI * radius[i]);
//     }
//     return output;
// }

// console.log(calculateArea(radius));

// const calculateDiameter = function (radius){
//     const output = [];
//     for(let i=0;i <radius.length;i++){
//         output.push (2 *radius[i]);
//     }
//     return output;
// }
// console.log(calculateDiameter(radius));


// //   HOF 

// const radius = [1,2,3,4];

// const area =function(radius){
//     return Math.PI * Math.pow(radius, 2);
// }
// const circumference =function (radius ){
//     return 2 * Math.PI * radius;
// }
// const diameter = function (radius){
//     return 2*radius;
// }
// const calculate = function (radius,logic){
//     const output = [];
//     for(let i =0;i <radius.length;i++){
//         output.push(logic(radius[i]));
//     }
//     return output;
// }


// console.log(calculate(radius,area));
// console.log(calculate(radius,circumference));
// console.log(calculate(radius,diameter));



// // //   map

// const radius = [1,2,3,4];

// const area =function(radius){
//     return Math.PI * Math.pow(radius, 2);
// }
// const circumference =function (radius ){
//     return 2 * Math.PI * radius;
// }
// const diameter = function (radius){
//     return 2*radius;
// }
// const calculate = function (radius,logic){
//     const output = [];
//     for(let i =0;i <radius.length;i++){
//         output.push(logic(radius[i]));
//     }
//     return output;
// }


// console.log(radius.map(area));
// console.log(calculate(radius,area));
// console.log(calculate(radius,circumference));
// console.log(calculate(radius,diameter));

// //   map

// const radius = [1,2,3,4];

// const area =function(radius){
//     return Math.PI * Math.pow(radius, 2);
// }
// const circumference =function (radius ){
//     return 2 * Math.PI * radius;
// }
// const diameter = function (radius){
//     return 2*radius;
// }

// //polyfill for map 
// Array.prototype.calculate = function (logic){  //make calculate avaible for all arrrays 
//     const output = [];
//     for(let i =0;i <this.length;i++){  //this is poointed  of radius on which it it called
//         output.push(logic(this[i]));
//     }
//     return output;
// }


// console.log(radius.map(area));

// console.log(radius.calculate(area));  //
