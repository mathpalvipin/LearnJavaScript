// // setimeout  callback does not allways called after 5 sec


// console.log("start");

// function cb(){
//     console.log("callback called");
// }

// setTimeout(cb, 0);  //used to defer the code 
// cb sent to api zone and then at  time occcur i.e 0m sec 
// // the cb is push into the callback queue
// //once the call back is empty i.e the global context it remove from call stack
// // the cb from call back queue push to call stack and execute

// // so each setimeout is 0 sec but still end console.log first 
// console.log("end");


// // //  output
// // start
// // end
// // callback called


// // setimeout  callback does not always called after 5 sec


// console.log("start");

// function cb(){
//     console.log("callback called");
// }

// setTimeout(cb, 5000); 
// console.log("end");

// let startDate = new Date().getTime();
// let endDate = startDate; 

// // block the main thread for 10 sec 
// // in 5 sec cb entry into the callback queue
// //after the 10 send when the callstack is empty 
// // eventloop push the cb to call stack and remvoe from callback queue

// while(endDate <= startDate+10000){
// endDate = new Date().getTime();
// }
// console.log("while expires");

// //  output
// start
// end
//while expires
// callback called



