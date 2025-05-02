function multinumber( num){
let total = 1
for( let i = num; i>1; i--){
total = total * i;
}
return total;
}
console.log('Recursion/factorialiterative.js:7', multinumber(10));

