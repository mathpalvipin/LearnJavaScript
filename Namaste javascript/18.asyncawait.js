// //async function always return a promise
// // if it already return promise not will  happen
// //if it reutrn value it wraps it in promise

//return value
// async function getData(){
//     return "hello world";
// }

// const data = getData();
// console.log(data); //Promise {<fulfilled>: 'hello world'}

// //  as data is promise not value to getdata
// data.then(function(data){ console.log(data)}); //hello world

//  //// return promise

//  const p = new Promise(function(resolve, reject) {
//     setTimeout(()=>{
//         resolve("resolve after 2 sec")
//     },2000)
//  });

//  async function getData(){  // if it return then it will not again wrap inside promise
//     return p;
//  }

// const data = getData();
// console.log(data); //Promise {<pending>}

// //  as data is promise not value to getdata
// data.then(function(data){ console.log(data)}); //resolve after 2 sec

//async and wait is used to handle promises

// //

//  const p = new Promise(function(resolve, reject) {
//     setTimeout(()=>{
//         resolve("resolve after 2 sec")
//     },2000)
//  });

// //   older way//
// //function getData(){
////     p.then(result => console.log(result));
//// }

// getData();

// async function handlepromise (){
//     const data = await p;
//     console.log(data);
// }

// handlepromise();

// //  example

// const p = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve("resolve after 2 sec");
//   }, 2000);
// });

// async function handlepromise() {
//     console.log( "hellow world");
//   const data = await p; // will wait over here till promise is not settled
//   console.log(data);
//   console.log("namaste javascript"); // namaste javascript print second as  await block the execution till the promise settled
  
  
// }

// handlepromise();

// // ////older way//
// // function getData() {
// //     console.log( "hellow world");
// //   p.then((result) => console.log(result)); // resolve after 2 sec (print after the namaste javascript)
// //   // js engine will nto wait to promise to settle
// //   console.log("namaste javascript");
// //   //namaste javascript print first as  this is not block the execution
// // }

// // getData();



// //  example 2 

// const p = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve("resolve after 2 sec");
//   }, 2000);
// });


// async function handlepromise() {
//     console.log( "hellow world"); // it prin the hello world 
//     // and the after 2 sec it will print  below 4 linetogether 
//     // resolve after 2 sec
//     // namaste javascript
//     // resolve after 2 sec
//     // namaste javascript

//     // it show that the javascript is not waiting on await
//     // it look like it waiting but it is not waiting 
//     // as if this is case handlepromise function should be in call stack 
//     // it this is the case the the app freze 
//     // as untill the call stack is emplty  eventloop will not check callback queue

//   const data = await p; 
//   console.log(data);
//   console.log("namaste javascript"); 

//   const data1 = await p; 
//   console.log(data1);
//   console.log("namaste javascript"); 
  
  
// }

// handlepromise();

// // what happpen

// // handlepromise is register to call stack 
// // when the await comes it will suspend the functin handlepromise from the call stack
// //  and store the line wheerethe functin is execution  
// //after the promise resolve the handlepromise function again come in call stack
// // and start executing from it suspend;

// // till time it reache the second p it was resolved ( its already 2 second happen and second p is also resolve )
// // but still it suspend the handlepromise and continue its execution as that p is already resolved
// // anf print he send 2 line immediately after 




// //  example 2 

// const p1 = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       resolve("resolve after 20 sec");
//     }, 20000);
//   });
  
//   const p2 = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       resolve("resolve after 40 sec");
//     }, 40000);
//   });
  
//   async function handlepromise() {
//       console.log( "hellow world"); // it prin the hello world 
//       // and the after 20 sec it will print   
//       // resolve after 20 sec
//       // namaste javascript
//       // and the after next 20 sec it will print  
//       // resolve after 40 sec
//       // namaste javascript
  
      
//     const data = await p1;  // here the handlepromise is suspended until p1 is resolve
//     // to empty the call stack, to other proccess.
//    // start again from here after 20 seconds
//     console.log(data);
//     console.log("namaste javascript"); 
  
//     const data1 = await p2; // here the handlepromise is suspended  until p1 is resolve
//     // // start again from here after next 20 seconds as 20 second is already happen as they both register 
//     console.log(data1);
//     console.log("namaste javascript"); 

//   }
  
//   handlepromise();
  
  //remember both the promise timer start after the memory phase





//   // in case of fetch all 

// //   fetch will reutrn the promise they are not there already 


//  const url= "https://api.github.com/users/vipinmathpal"
//  async function getUser(url){
//  const data = await fetch(url); //promise will return by fetch //// as promise is not there already as in previous example so timer will not start yet
//  const user = await data.json(); // this also return promise
//  console.log(user);
//  }
//  getUser(url);

//  //fetch will suspend the getUser function from call stack and remembet it execution row 
// //  and start executing from same row  after the promise resolve
// // same with promise return from data.json();
// // this will make the call stack empty for other use
  
  
  

// // error handling 

//  const url= "https://api.githu.com/users/vipinmathpal"
//  async function getUser(url){
//  try {const data = await fetch(url); 
//  const user = await data.json();
//  console.log(user);
//  }
//  catch(e){
//     console.log(e.message);
//  }

//  }
//  getUser(url);


//  // error handling 

//  const url= "https://api.githu.com/users/vipinmathpal"
//  async function getUser(url){
// const data = await fetch(url); 
//  const user = await data.json();
//  console.log(user);


//  }
//  getUser(url).catch(e => console.log(e.message));
  


  
  