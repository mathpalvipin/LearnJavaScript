// const arr = [5 ,1 ,2, 3,4 ];
// //sum or max

// function sum(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }
// console.log(sum(arr));


// const output = arr.reduce
// ( function (acc , current)// accumulate and current
// {
//     acc +=current;
//     return acc;
// }
// ,
// 0   // initial value of accumulator 
// )
// console.log(output);
// const initialmax = arr[0];
// const maxvalue = arr.reduce(function (max, current ){
//  return  max > current? max:current;
// }
// ,initialmax
// )
// console.log(maxvalue);



//
// const arr = [25, 21, 23 ,15 ,21 ,21, 23 ,24];

// const output = arr.reduce (function( fre, cur){
//    if(fre[cur]){
//     fre[cur]= fre[cur] + 1;
//    }
//    else{
//     fre[cur]=1;
//    }
//    return fre;
// },{})
// console.log(output)