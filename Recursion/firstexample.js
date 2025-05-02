function decrement(n) {
if(n<=0){
    console.log("Completed");
    return;
}
console.log(n);
n--;
decrement(n);
}

decrement(5);