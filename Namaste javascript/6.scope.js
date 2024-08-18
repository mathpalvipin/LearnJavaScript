// 1 *************
// function a(){
//     console.log(b) // 10 
// }
// var b=10;
// a();


//2 ***************

// function a(){
//      c();
//     function c(){
//     console.log(b) // 10  
//     } 
// }
// var b=10;
// a();

// we can still accesss b inside nested function 


//3 ***************

// function a(){
//     var b=10;
//     c()
//    function c(){
//    console.log(b); // 10  
//    } 
// }

// a();
// console.log(b) // b is not defined  


//3 ***************

// function a(){
//     var x=10;
//     b()
//    function b(){
//     var z=20
//     c();
//      function c(){
//         console.log("inside c","x=",x ,"z=",z); 
//      }
//      console.log("inside b","x=",x ,"z=",z); 
    
//    } 
// console.log("inside a","x=",x ,"z=",z);
// // ReferenceError: z is not defined
// //z is not in lexical envi of a as 
// // it is inside b and b is on top of a in call stack  
// //  when the console.log execute b remove from call stack 
// }

// a();
// console.log("inside global","x=",x ,"z=",z); 
//  //same will happend here x and z is not in lexical envi of global


 //4 ***************

// function a(){
//     var x=10;
//     b()
//    function b(){
//     var z=20
//     c();
//      function c(){
//         console.log("inside c","x=",x ,"z=",x); 
//      }
//      console.log("inside b","x=",x ,"z=",z);  
//      // closure of  a is create  as x variable use inside function bu
//      // but closure of b is note create as z variable  not use  in inside function
// //  The closure scope only needs to be maintained if the 
// // inner function accesses any variables from the outer function.
// //  If no variables are used, there's no need for the JavaScript engine 
// // to create or keep track of the closure.


//    } 
// console.log("inside a","x=",x ,"z=",z);
// // ReferenceError: z is not defined
// }

// a();
// console.log("inside global","x=",x ,"z=",z); 
//  //same will happend here x and z is not in lexical envi of global

 


