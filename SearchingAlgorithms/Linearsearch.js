//Given an array and num, find the index of the num in array and if not found return -1;

function LinearSearch (arr, num){

    let i = 0;
    for (let key of arr){
        if (key === num) return i; 
        else i++;
    }
return -1
}

console.log(LinearSearch([10,23,12,11,33,5],111))