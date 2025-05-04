// Frequency Counter - constructNote
// Write a function called constructNote, which accepts two strings, a message and some letters. The function should return true if the message can be built with the letters that you are given, or it should return false.

// Assume that there are only lowercase letters and no space or special characters in both the message and the letters.

// Bonus Constraints:

// If M is the length of message and N is the length of letters:

// Time Complexity: O(M+N)

// Space Complexity: O(N)

// Examples:

// constructNote('aa', 'abc') // false
// constructNote('abc', 'dcba') // true
// constructNote('aabbcc', 'bcabcaddff') // true


function constructNote(message, letters){
if( message.length > letters.length) return false;

let letterCounter = {}

for ( let val of letters){
    letterCounter[val] = ( letterCounter[val] || 0 ) +1
}

console.log( letterCounter)
 for ( let key of message){
    if(!letterCounter[key]){
        return false;
    }
    letterCounter[key]--;
 }
return true;
}
console.log(constructNote('aabbccz', 'bcabcaddff'))