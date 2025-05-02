function sumZero(array){
    for(let i = 0; i<=array.length;i++){
        for( let j = i+1; j<=array.length;j++){
    if(array[i]+array[j]===0){
        return[ array[i], array[j]]
    }
        }
    }
    }
    
    sumZero([-1,3,2,4,1])