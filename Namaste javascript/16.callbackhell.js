// // //javascript don't wait for anything 
// // // execute it one by one 

// // console.log("first");

// // console.log("second");


// // console.log("third");

// // // //output 
// // // first 
// // // second 
// // // third


// // //if i want to implement the asynchronous operation 
// // // we use callback function
// // // asynchronous happen inn javascript because of callabck

// // console.log("first");


// //Now it is job of set time to execute the callback after 2 seconds
// // setTimeout(function(){
// //     console.log("second ");
// // },2000);


// // console.log("third");

// // ///output 
// // //first 
// // // third
// // // second



// //********************************* */
// // callback hell

// const cart = ["shows ","pants ","kurta"];

// API.creatorder(card ,function (){
//     API.processToPayment ( function(){
//         API.showSummary(function(){ 
//             API.Invoice()
//     });
//     });
// })

// // this type of code is unreadable and unmaintainable
// //this structure is know as pyramid of DOO<
// // check each api is depend upon the previous api 
// // we giving controll to previoud api to execute the next api once prvious one completed
// //this is call inversion of control and the chain to api is call callback hell



