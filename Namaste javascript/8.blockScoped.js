
// {
//     const x =10
//     console.log(x)
// }

// // use of block to combine mltiple statement in group
// // and use where the javascript expected one statement

// // if(true) // Unexpected end of input
//  //expect statement here 

//  if(true) true;  // this will also work

//  if(true){
//     const x =10
//     console.log(x)
// }
// //we group the statement and use where the javascript expected one statement



// //2 *****************8
// { 
//     var a=20   //global variable   
//     let b= 30   //block variable
//     const c=40   //block variable
//     console.log(a)    
//     console.log(b)     
//     console.log(c)
// }


// //3 *****************8
// { 
//     var a=20   //global variable   
//     let b= 30   //block variable
//     const c=40   //block variable
//     console.log(a)    //20
//     console.log(b)     //30
//     console.log(c)        //40
// }
// console.log(a)    ///20
// console.log(b)     // b is not defined  
// // as it is block scope and block is delete when it end
// console.log(c)


//3 *****************8
// var a= 10 //global scope
// { 
//     var a=20   //global variable    //shadowing the a here
//     let b= 30   //block variable
//     const c=40   //block variable
//     console.log(a)    //20    
//     console.log(b)     //30
//     console.log(c)        //40
// }
// console.log(a)    ///20 
// //as the variable a is global scope and value updated

//4 *****************8
// let b= 10 // script scope
// { 
//     var a=20   //global variable    
//     let b= 30   //block variable   //shadowing the a here
//     const c=40      //block variable
//     console.log(a)    //20    
//     console.log(b)     //30
//     console.log(c)        //40
// }
// console.log(b)    ///10
// first b is in script scope and
//  then second  in block scope.
//  value of script scope b is not update if we put value in block scope 
//as the variable a is global scope and value updated


// //5 *****************8
// let b= 10 // script scope
// { 
//     var a=20   //global variable    
//     let b= 30   //block variable   //shadowing the a here
//     const c=40      //block variable
//     { 
//         console.log(b); //30  // it will check inside block and then parentblock 
//     }
//     console.log(a)    //20    
//     console.log(b)     //30
//     console.log(c)        //40
// }



//6 *********************
// Shadowing 
// let using let 
// const using const 
// var using var
// var using let and const 

// var a= 10
//  {
//  var a=20 // it is legal and value of  global variable update
// }


// var a= 10
//  {
//  let a=20 
//  console.log(a)
//  // it is legal and  as a is in global scope
// //   can  create in block scope
// //  value of  global variable update
// }


// let  a= 10 
//  {
//  var a=20   //Identifier 'a' has already been declared
// console.log(a);
// // it is illegal and  as a is in script scope
// // //   cannot  create in global scope
// }