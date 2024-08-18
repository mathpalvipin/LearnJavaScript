// 1 ***********************
// var a = 10 

// memory creation phase undefined is assign to variable a


//2 ************************888
// console.log(a)  // undefined
// var a= 10 
// console.log(a) // 10
// console.log(x)   // ReferenceError: x is not defined

// as value in memory creation variable a have value undefined 
// when we try to console.log(a) before initialization a have undefined value
// but x is not present in memory. as it is not encounter in memory phase 
// no memory is allocated for variable x 


// //3 ************************
// console.log(a)  // undefined
// var a;
// console.log(a) // undefined
// if(a=== undefined){  //true
//     console.log("a is undefined") 
// }else{
//     console.log("a is not undefined") ;
// }
// a=10 
// console.log(a) // 10