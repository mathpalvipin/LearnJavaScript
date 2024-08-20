// const cart = ["shows", "pants","kurt"];

// want to achieve

// const orderId = createOrder (cart); //orderId

// proceedToPayment(orderId);

// //  ***************using callback *******

// const orderId = createOrder (cart ,function(orderId){
//     proceedToPayment(orderId);
// }); //orderId

// // issue is inversion of control
// // we given the controll to creatOrder to execute the processToPayemnt

// // using promies

// const promise = creatOrder (card);

// promise.then(orderId =>{
//     proceedToPayment(orderId);
// })
// // no inversion of control - as we have control to proccesstopayment when order creation completed

// const promise = creatOrder(card)
//   .then((orderId) => {
//     return proceedToPayment(orderId);
//   })
//   .then((id) => {
//     return showsummary(id);
//   })
//   .then((id) => {
//     return udpatedb(id);
//   });
// // no inversion of control - as we have control to proccesstopayment when order creation completed

// //*************************************

// const url = "https://api.github.com/users/mathpalvipin";

// //initial the user is undefined but on line 34 a promise object is assign to user
// const user = fetch(url); //initial the promise is in pending state
// // promise data is immutable . resolve or reject but just once either resolve  or reject
// //placeholder
// //container for future value
// // is an object representing the eventual completion  orfailure of asynchronous operation

// console.log("user", user); //pending
// user.then((data) => console.log(data)); // success
// user.catch((error) => console.log(error)); // fail

// /// create promise

// const cart = [
//   "shoes",
//   "pants",
//   "pants",
//   "pants",
//   "pants",
//   "pants",
//   "pants",
//   "pants",
//   "pants",
//   "pants",
// ];
// const promise = createOrder(cart);

// promise.then(function(orderId) {
//     console.log("order Id " ,orderId);

// }).catch(function(err){
//     console.log("Failed to create order:", err.message);
// });

// function createOrder(cart) {
//   return new Promise((resolve, reject) => {
//     //validate cart

//     //create order

//     //send either resolve or reject
//     if (cart[0] === "shoes") { //not real logic
//       setTimeout(() => {
//         resolve(1);
//       }, 3000);
//     } else {
//         const err= new Error("cart is not valid");
//       reject(err);
//     }
//   });
// }

// /// create promise chaining

// const cart = [
//   "shoes",
//   "pants",
//   "pants",
//   "pants",
//   "pants",
//   "pants",
//   "pants",
//   "pants",
//   "pants",
//   "pants",
// ];
// createOrder(cart)
//   .then(function (orderId) {
//     console.log("order Id ", orderId);
//     return orderId;
//     //   proceedToPayment(orderId);
//   })
//   .then(function (orderId) {  
//     return proceedToPayment(orderId);
//   })
//   .then(function (payemntId) {
//     console.log("Payemnt Id ", payemntId);
//   })
//   .catch(function (err) {
//     // even single then have error all the then will skip till the next catch 
//     ///catch method catch the eror on top of it  in chain
//     console.log("ordering is failed", err.message);
//   });

// function createOrder(cart) {
//   return new Promise((resolve, reject) => {
//     //validate cart

//     //create order

//     //send either resolve or reject
//     if (cart[0] !== "shoes") {
//       //not real logic
//       setTimeout(() => {
//         resolve(1);
//       }, 3000);
//     } else {
//       const err = new Error("cart is not valid");
//       reject(err);
//     }
//   });
// }

// function proceedToPayment(orderId) {
//   return new Promise((resolve, reject) => {
//     //send either resolve or reject
//     if (orderId === 1) {
//       //not real logic
//       setTimeout(() => {
//         resolve(1000);
//       }, 3000);
//     } else {
//       const err = new Error("payemnt failed");
//       reject(err);
//     }
//   });
// }


// /// create promise chaining

// const cart = [
//     "shoes",
//     "pants",
//     "pants",
//     "pants",
//     "pants",
//     "pants",
//     "pants",
//     "pants",
//     "pants",
//     "pants",
//   ];
//   createOrder(cart)
//     .then(function (orderId) {
//       console.log("order Id ", orderId);
//       return orderId;
//       //   proceedToPayment(orderId);
//     }) .catch(function (err) {   ///catch method catch the eror on top of it  in chain
//         console.log("error in create order ",err.message);
//       })
//     .then(function (orderId) {   //if  above catch catch some error the chain again start from this then 
//         // as catch catched in above catch all below then will called then
//       return proceedToPayment(orderId);
//     })
//     .then(function (payemntId) {
//       console.log("Payemnt Id ", payemntId);
//     })
//     .catch(function (err) {
//       // even single then have error all the then will skip till the next catch 
//       ///catch method catch the eror on top of it  in chain
//       console.log("ordering is failed", err.message);
//     }).finally(()=>{
//         console.log("Finally block alway called", );
//     });
  
//   function createOrder(cart) {
//     return new Promise((resolve, reject) => {
//       //validate cart
  
//       //create order
  
//       //send either resolve or reject
//       if (cart[0] !== "shoes") {
//         //not real logic
//         setTimeout(() => {
//           resolve(1);
//         }, 3000);
//       } else {
//         const err = new Error("cart is not valid");
//         reject(err);
//       }
//     });
//   }
  
//   function proceedToPayment(orderId) {
//     return new Promise((resolve, reject) => {
//       //send either resolve or reject
//       if (orderId === 1) {
//         //not real logic
//         setTimeout(() => {
//           resolve(1000);
//         }, 3000);
//       } else {
//         const err = new Error("payemnt failed");
//         reject(err);
//       }
//     });
//   }
  



//promis API
 
// Promis.all  //fail fast
//promise.all([ p1 ,p2 ,p3, p4])
// it take array of promised and 
//                  3s , 1s ,2s
//                  (all sucess)
// return in 3 second wait for all to finish 
// return array of result [ val 1, val 2 ,val3];  


//                3s , 1s , 2s 
//              resolve, reject ,resolve 
//           immediatly throw error when  any  of promise is rejected  
// return error of promise rejected


// Promis.allSettled   //
//promise.allSettled([ p1 ,p2 ,p3, p4])
// it take array of promised and 
//                  3s , 1s ,2s
//                  (all resolve)
// return in 3 second wait for all to finish 
// return array of result [ val 1, val 2 ,val3];  


//                3s , 1s , 2s 
//              resolve, reject ,resolve 
// it will wait for all promise to settle either resolve or reject
// return array  [ val1 , err2 ,val3 ] after 3 sec 
//  alway be the array of same number of promises;


          //promie.race
//promise.race([ p1 ,p2 ,p3, p4])
// it take array of promised and 
//                  3s , 1s ,2s
//                  (all resolve)
// return val of promise who settle first (P2)
// return a single value  

//                3s , 1s , 2s 
//              resolve, reject ,resolve 
// if first settle  is rejected  it will return the error in value 
// reutrn single error
//  will not wait for other to settle

   //promie.any
//promise.any([ p1 ,p2 ,p3, p4])
// it take array of promised and 
//                  3s , 1s ,2s
//                  (all resolve)
// return val of promise who success(resolve) first (P2)
// return a single value  

//                3s , 1s , 2s 
//              resolve, reject ,resolve 
//if p2 is reject it will wait for first succes 
//   it will return the value  of first success
// reutrn value 
//  will  wait for first success

//  if all fail return will be agrregrate error 
  //  [error1 , error 2, error 3];
//   console.log(err.errors)    errors array inside err(aggregate error) 


