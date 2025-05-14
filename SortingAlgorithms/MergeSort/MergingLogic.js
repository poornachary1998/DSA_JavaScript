function Merge(arr1, arr2){
let results = [];
let i =0;
let j =0;

while ((i<arr1.length) && (j<arr2.length)){
    if(arr1[i]<arr2[j]){
        results.push(arr1[i])
        i++;
    } else {
        results.push(arr2[j])
        j++
    }
}
while(i<arr1.length){
    results.push(arr1[i]);
    i++;
}
while (j<arr2.length){
    results.push(arr2[j]);
    j++;
}
return results
}

console.log(Merge([1,6],[1,61]));
// function mergeSort(array) {
//   console.log("Calling mergeSort on", array);

//   if (array.length <= 1) {
//     console.log("Base case hit with", array);
//     return array;
//   }

//   const mid = Math.floor(array.length / 2);
//   const left = mergeSort(array.slice(0, mid));
//   const right = mergeSort(array.slice(mid));

//   const merged = Merge(left, right);
//   console.log("Merging", left, "and", right, "=>", merged);

//   return merged;
// }

// function mergeSort(array){
//     if(array.length <=1) return array;

//     let mid  = Math.floor(array.length/2)

//     let left = mergeSort(array.slice(0,mid))
//     let right = mergeSort(array.slice(mid))

//     return Merge(left,right)
// }
// console.log(mergeSort([14, 12, 10, 11, 31, 5]))