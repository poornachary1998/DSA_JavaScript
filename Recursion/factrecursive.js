function recursiveFactorial(n) {
    if(n ===1) return 1;
return n * recursiveFactorial(n - 1);

}
console.log('Recursion/factrecursive.js:6', recursiveFactorial(5));
