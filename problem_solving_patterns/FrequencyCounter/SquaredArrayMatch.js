// Write a function caled same, which accepts 2 arrays.
// The function should return true if every value in the arraty has it s corressponding value in squared in second array.
// The frequency of values must be same,.


function same(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;

    let frequencyCounter1 = {}

    let frequencyCounter2 = {}

    for (let val of arr1) {
        //  console.log(val);
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }

    for(let val in frequencyCounter1){
       if(!(val ** 2 in frequencyCounter2)){
        return false
       }
    
        if(frequencyCounter2[val ** 2] !== frequencyCounter1[val]){
            return false;
        }
    }
    return true
}

console.log(same([2, 4, 2], [16, 4, 4]) )