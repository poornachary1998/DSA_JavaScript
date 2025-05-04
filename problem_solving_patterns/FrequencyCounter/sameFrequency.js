// Write a function called sameFrequency. Given two positive integers, 
// find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

// Sample Input:

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

function sameFrequency ( num1, num2){
let str1 =  num1.toString();
let str2 = num2.toString();
if(str1.length !== str2.length){
    return false;
}

let strFreqCounter1 = {};
let strFreqCounter2 ={};

for(let val of str1){
strFreqCounter1[val] =( strFreqCounter1[val] || 0) + 1
}

for (let val of str2){
    strFreqCounter2[val] = (strFreqCounter2[val]||0)+1
}

for( let cur in strFreqCounter1){
    if( !(cur in strFreqCounter2)) return false;
}
return true;
}

console.log(sameFrequency(142, 211))