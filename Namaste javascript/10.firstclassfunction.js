// // 1 ********************
// console.log(a) //{
// //     console.log("a called");
// // }
// console.log(b); //undefined

// // function statement   and fucntion  declaration 
// function a(){
//     console.log("a called");
// }
// a();
// //function expression
// var b =function (){
//     console.log("b called");
// }
// b();

// // difference betweeen statement and expression 
// // is hoisting  
// // a is hoist as function  ( assign full function to a)
// // b is hoind as varaible  (assign undefined to b)


// // 2******************

// // anonymous function
// // function (){    // function statement require a function name
// //     console.log("anonymous function");
// // }
 
// // as function statement require a function name so we use anonymous function for function expression

// var d = function () {
//     console.log("anonymous function");
// }
// d();

// //anonymous function is used whne function used as value 
// // used to assign into some variables


//  // 3 *******************


// // Name function expression
// var c= function cyx(){
//     console.log("Name function  expression");
// }
// c(); 
// // cyx(); //not defined 


// // 4 *******************

// // parameter  & argument
// const e = function(x){ // x is parameter
//     console.log("x=",x);
// }
// const str= "hellow world";
// e(str) // str is argument


// // 5 *******************
// // First Class Function
// // the ablility to passed as value  to function  and return as value from function
// // we can send function inside function as arguments
// // we can return function from function

// var q = function ( x){
// console.log(x);
// return function xt(){
//     console.log("return from function");
// }
// }

// var qt =function(){
//     console.log("passed as value");
// }
// console.log(q(qt));    //qt is function passed as value 
// // and xt function return from function 



// // 6 *******************



