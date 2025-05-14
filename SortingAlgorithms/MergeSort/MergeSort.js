
function Merge(arr1, arr2) {
    let i = 0;
    let j = 0;
    let res = [];

    while ((i < arr1.length) && (j < arr2.length)) {
        if (arr1[i] < arr2[j]) {
            res.push(arr1[i])
            i++;
        }
        else {
            res.push(arr2[j]);
            j++
        }}
        while (i < arr1.length) {
            res.push(arr1[i])
            i++
        }
        while (j < arr2.length) {
            res.push(arr2[j]);
            j++
        }
        return res
    }

function MergeSort(arr) {
    if (arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2)

    let left = MergeSort(arr.slice(0, mid));
    let right = MergeSort(arr.slice(mid));

    return Merge(left, right)
}


console.log(MergeSort([12, 1, 3, 572, 1, 4, 2, 7]))