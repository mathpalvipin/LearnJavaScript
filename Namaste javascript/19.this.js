// this  keyword work  different in strict mode

'use strict';

// global space
 
console.log("global this ",this); //window object || global object
 
// as javascript can be run on nay environment 
// as  for react it is running on browser and backend it is running on node.js (runtime environment)
// in case of browser  this is window
// in case of node this is global



// inside function 
function x(){
    console.log("function this ",this)
    //  in strict mode it is "undefined"
    // in non strict mode it is global (window)
    // because if the value of this is not given ie null or undefined 
    // in non strict mode javascript assign global object to it
}

//  value of this is based on how function is called
x();  // this is undefined here 
window.x()  // this is global object here 
 // now function is called with window object  reference 

// this  keyword work  different in strict mode
// this is called this substitution 
// if the value of this keyword is undefined  or null
// this will be replace with global object
// only in not strict mode
// this is called this substitution 


// **********************
// x is function 
// printName is method as it it defined inside object
const student = {
    name:"me hu don",
    printName:function(){
 console.log("methods this ", this , this.name);
    }
}

student.printName()  // this is obj object here

const student2={
    name:" koi to hai "
}
// student2.printName() 
//student2.printName is not a function
//  throw error as printName is not in student2 object

// now i want to use printname function fro student2


// value of this could be modified using call apply and bind
student.printName.call(student2);  
//  value of this shoule be student but as we are overwriting the value using call methods
// now it is student2 


// *****************************
 
// arrow function do not provide own this 
// value of this is value of lexical  context

const obj = {
    a:10,
    b: ()=>{ 
        // this inside arrrow function  is depend upon where the function is present in the code (enclosing lexical context)
      // lexical context is global space.
        console.log("arrow function inside object (enclose in global lexial context) ", this);
    }
}
obj.b();


const obj2 = {
    a:10,
    b: function(){
         const y = ()=>{ 
        // this inside arrrow function  is depend upon where the function is present in the code (lexical context)
      // lexical context is global space.
        console.log("arrow function enclose in object lexical context ", this);
    }
    y();
}
}
obj2.b();





//**********************8 */
//  inside DOM - this refer to html element


//****************************** */

// this work different in class
