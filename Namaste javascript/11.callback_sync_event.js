// // call somewhere else in fucntion 

// function x(y){

//  y();
// }

// x(function(){
//     console.log("callback function")
// })

// // y is passed as agruement and called by x somewhere else i program



// // 2************************

// // provide asynchronous behaviour
// // dont't wait for setimteout , it will execcute the next line of code and 
// // execute function after 3 sec 

// setTimeout(function(){
//    console.log("timer function");
// }, 4000)
// function x(y){
//     console.log("x called")  
//     y();
//    }
//    x(function y(){
//        console.log("Y called")  
//    })
   
//     //.  first call stack have have  x and y 
//     //then the call  stack becomw empty 
//     // after 4 second call stack get eh setitmenout function 



// //event listeners **************

// function attachEventListeners(){
//     let count =0;
//     document.getElementById("clickme").addEventListener("click", function xyz(){
//     console.log("click me" ,++count);
//     })
// }
// attachEventListeners();

// the xyz function is calledback function and make closure with the parent function /
// xyz ahve closure in scope of attachEventListeners and global 
//  cloasure variable cannot be remove by grabage collector as we dont know if we need the count again or not



//grabage collection & remove eventlisteners


//  so it i necessary to remove the evenlisteners to free closure variables
