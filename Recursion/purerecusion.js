function odds(arr){
let newArr = []

if((arr.length) === 0) {
    return []
}
if(arr[0] % 2 !== 0){
    newArr.push(arr[0])
}
// console.log(odds(arr.slice(1)))
newArr = newArr.concat(odds(arr.slice(1)))
// console.log(newArr)
 return newArr;
}

odds([1,2,2,342,45,45,23,233,3,3,4,12,343,31,3132,4,13,12,233,434,13112124343,2,122,12])