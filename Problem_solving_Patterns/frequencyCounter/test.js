function areThereDuplicates() {
    // good luck. (supply any arguments you deem necessary.)
    
    let collections ={};
    console.log(arguments)
    for( let val in arguments){
  collections[arguments[val]] = (collections[arguments[val]] || 0) + 1;
    }
      console.log(collections)
  
    for( let key in collections){
        if (collections[key] > 1) return true
    }
    return false;
  }
console.log(areThereDuplicates(2, 2, 3))