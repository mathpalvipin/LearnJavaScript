
//

// function x(){
//     var a= 7;
//      function y(){
//         console.log(a)
//      }
//      y()
// }
// x();


// // 2 ***************

// function x(){
//     var a= 7;
//      function y(){
//         console.log(a)
//      }
// return y;   
// //return function it will take closure with them .
// //closure create only if a  variable is used inside y 
// //  and  y called in program  
// }
// const z= x();
// //x is remove from context after the exection is complete 
// // but as it return y and y using variable a from x 
// //  it will create a closure which have reference of variable a with function


// console.log(z);

// z();

// // 3 ***************

// function x(){
//     var a= 7;
//      function y(){
//         console.log(a)
//      }
//      a= 100; // as in closure only a reference is therer
//     //   so a console.log(a) in y from program will print 100
// return y;   
// //return function it will take closure with them .
// //closure create only if a  variable is used inside y 
// //  and  y called in program  
// }
// const z= x();
// //x is remove from context after the exection is complete 
// // but as it return y and y using variable a from x 
// //  it will create a closure which have reference of variable a with function


// console.log(z);

// z();


// // 4 ***************
// function q()
// {
//     var t= 40;
//     function x(){
//     var a= 7;
//      function y(){
//         console.log(a ,t) ///closure for x and q is created as their variable is in use 

//      }
// return y;   
// }
// const z= x();
// z();
// console.log(z);
// }
// q();



//5 **************8888

// function x(){

//     var i=1 ;
//     setTimeout(function(){
//         console.log(i);
//     },3000);
//     console.log("hellow world");
// }
// x();


// //6 **************88
// function x(){

  
//     for(var i=0;i<5;i++){
//     setTimeout(function(){
//         console.log(i); //print 5 5 time as in closure we have i reference and in last i value is 5
//     },i*1000);
// }
//     console.log("hellow world");
// }
// x();


// //6 **************88
// function x(){

  
//     for(let  i=0;i<5;i++){ // it is blocked scoped so each block have its own i 
//     setTimeout(function(){
//         console.log(i);
//     },i*1000);
// }
//     console.log("hellow world");
// }
// x();

//7 **************88
// function x(){

  
//     for(var i=0;i<5;i++){ 
//         function close(x){
//             setTimeout(function(){
//                 console.log(x);
//             },x*1000);
//         }
//         close(i);
       
// }
//     console.log("hellow world");
// }
// x();