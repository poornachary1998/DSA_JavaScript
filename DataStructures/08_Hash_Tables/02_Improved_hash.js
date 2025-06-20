function hash(key, arrayLen) {
  let total = 0;
  let WEIRD_PRIME = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96
    total = (total * WEIRD_PRIME + value) % arrayLen;
  }
  return total;
}

console.log(hash("pink", 10)) 
//0
console.log(hash("blue", 10)) 
/0
console.log(hash("black", 10)) 
//9
console.log(hash("orange", 10)) 
//0
console.log(hash("purple", 10)) 
//8
console.log(hash("cyan", 10)) 
//3
//the above one will be in same place because they got stored in basis hash and wopnt get changed.


console.log(hash("red", 10)) 
//7
console.log(hash("white", 10)) 
//5
console.log(hash("skyblue", 10)) 
//5
console.log(hash("teal", 10)) 
/8
console.log(hash("green", 10)) 
//9
console.log(hash("offwhite", 10)) 
//2
