// Frequency Counter / Multiple Pointers - areThereDuplicates
// Implement a function called, areThereDuplicates which accepts a variable number of arguments,
//  and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Examples:

// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true 
// areThereDuplicates('a', 'b', 'c', 'a') // true 

function areThereDuplicates() {
    let valFrequencyCounter = {};
let allDuplicates =[]
    for (let val of arguments) {
        valFrequencyCounter[val] = (valFrequencyCounter[val] || 0) + 1
    }
    for (let key in valFrequencyCounter) {
        

        if (valFrequencyCounter[key] > 1) {
            allDuplicates.push(Number(key))
        }
    }
    return allDuplicates;
}

console.log(areThereDuplicates(1, 4, 4, 3))