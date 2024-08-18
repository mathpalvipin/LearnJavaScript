// var x = 7 ;
// function getName(){
//     console.log("hellow world");

// }
// getName();
// console.log(x);

// output - hellow world
//          7



// 2 **************************

// getName();
// console.log(x);
// var x = 7 ;
// function getName(){
//     console.log("hellow world");

// }
 // output - hellow world
         //  undefined
   // memory is assign to x but not initialized in memory  creation phase 
   // so the x have value undefined



// 3  **************************
   
// getName();
// console.log(x);
// // var x = 7 ;
// function getName(){
//     console.log("hellow world");

// }
 
// output  - ReferenceError: x is not defined
//  x is not present in memory. so the x is not defined



// 4 ********************************



// console.log(x);
// console.log(getName);
// var x = 7 ;

// function getName(){
//     console.log("hellow world");

// }

// output - undefined
// [        Function: getName]

// we are getting undefined value of x
//  in case of fucntion we are getting the whole function 
//  as the function is whole function is store in memory in memory creation phase



//5 ******************************

//  what if the function is defined using the => arrow function 

// console.log(x);
// getName();
// console.log(getName2);
// getName2();

// var x = 7 ;

// function getName(){
//     console.log("hellow world");

// }
// var getName2=()=>{
//     console.log("hellow world");

// }


// output 
// undefined
// hellow world
// undefined
// TypeError: getName2 is not a function


// as the getName2 is not a function but variable
// so in memory creation phase the undefined value is assign to getName2
// and undefined is not a function.


// 6 **********************************************

//  what if the function is defined using function keyword and asign to variable 
// console.log(x);
// getName();
// console.log(getName2);
// getName2();



// var x = 7 ;

// function getName(){
//     console.log("hellow world");

// }


// output 
// undefined
// hellow world
// undefined
// TypeError: getName2 is not a function


// as the getName2 is not a function but variable
// so in memory creation phase the undefined value is assign to getName2
// and undefined is not a function.


// 7 **********************************************

// check call stack 

// var x = 7 ;

// function getName(){
//     console.log("hellow world");
// }
// console.log(x);
// getName();
// console.log(getName);


// output 
// 7
//  hellow world
//  ƒ getName(){
//     console.log("hellow world");
// }












 

 


