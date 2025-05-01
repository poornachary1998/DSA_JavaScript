// //sliding window
// function sumOfSubArray(arr, num){
// let maxSum = 0;
// let tempSum = 0;

// if(num> arr.length) return null;

// for( let i = 0 ; i<num; i++){
//     tempSum = tempSum + arr[i]
// }
// maxSum = tempSum

// for( let  i = num; i<arr.length; i ++){
//     tempSum = tempSum - arr [i- num] + arr[i]
//     maxSum= Math.max(maxSum, tempSum)
// // console.log( maxSum, tempSum)
// }
// return maxSum;
// }
// //                     i
// console.log(sumOfSubArray([11,22,3,4,45,56,4,3,42,32,33],15))
//                 //   j

function sumOfSubArray(arr, num){
    if (num> arr.length) return null;

    let maxSum = 0;
     let tempSum = 0;

     for (let i =0; i<num; i++){
        maxSum = maxSum + arr[i];
     }
tempSum = maxSum
     for(let i=num; i<arr.length; i++){
tempSum = tempSum - arr[i - num ] + arr[i]
maxSum =  Math.max(tempSum, maxSum)
     }
     return maxSum
}


console.log(sumOfSubArray([11,22,3,4,45,56,4,3,42,32,33],5))