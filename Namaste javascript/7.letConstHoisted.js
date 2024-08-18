
/// 1 ***************88


// console.log(b); //undefined
// console.log(a); //ReferenceError: Cannot access 'a' before initialization
// let a=10
// var b =100


/// 2 ***************88

// let a = 10
// console.log(a) //10 
// var b =100


// Temporal deadzone
// Duration of variable "a:
//  when the it is created in memory and but not initialize is called Temporal deadzone
// not available for use


// /// 3 ***************88

// console.log(x) // not defined  
// let a = 10
// var b =100


// // /// 4 ***************88

// console.log(b) // undefined  
// let a = 10 
// var b =100


// // /// 5 ***************88

// console.log(a) // cannot access 'a' before initialization  
// let a = 10
// var b =100


// // /// 5 ***************88

// let a = 10
// var b =100

// console.log(window.a) //indefined 
// console.log(this.a) // undefined 
//  as let and const is not store on global scope thay have separate script scope 


//6  *************
// dif var ,const and let

 
//  // no tempporal dead zone 
//  // can declare again 
//  // can assign value again

// console.log(a); //undefined  
// var a= 10 
// console.log(a); //10 
// var a =20
// console.log(a) //20


// // // 7*************
   
// //  //temporal dead zone 
// //  // cannot declare  again
// //  // can assign value again


// //  //1. temporal dead zone
//  console.log(a); //cannot access 'a' before initialization  
//  let a=10 ;

// //  //2. cannot declare again
// //  // not even first line of  code execute give 
//  let a= 10;
//  let a= 20;  //Identifier 'a' has already been declared
 
// //  //3. can assign value again
// let a=20;
//  a=20;
//  console.log(a); //20




// // 8 ********************************

// //  //temporal dead zone 
// //  // cannot declare again
// //  // cannot assign value again


// //  //temporal dead zone 
//  console.log(x); //cannot access 'a' before initialization 
//  const x=10


// //  // cannot declare again
// //  // not even first line of  code execute give 
// const a=10;
//  const a=20; ////Identifier 'a' has already been declared


// //  // cannot assing value again

// const a= 10;
// a=20;  //TypeError: Assignment to constant variable.








