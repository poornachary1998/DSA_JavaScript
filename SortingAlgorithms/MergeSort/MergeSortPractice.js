function MergeHelper(arr1, arr2){

    let  i =0;
    let j = 0;
    let results = [];

    while(i<arr1.length && j <arr2.length){
        if(arr1[i]<arr2[j]){
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j]);
            j++;
        }
    }

    while(i<arr1.length){
        results.push(arr1[i])
        i++;
    }
    while(j<arr2.length){
        results.push(arr2[j])
        j++;
    }
     return results;
}

// console.log(MergeHelper([10,20,30],[40,50]))

function Merge(arr){
if(arr.length<=1) return arr;

let mid = Math.floor(arr.length / 2);
let left =  Merge(arr.slice(0,mid))
let right = Merge(arr.slice(mid))

return MergeHelper(left,right)
}

console.log(Merge([12,3,4,1,8,2]))