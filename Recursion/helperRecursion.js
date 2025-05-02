function CountOdds(arr){

    let newArray = [];

    function helperInput(helper){
if(helper.length === 0){
    return;
}
else if( helper[0] %2 !==0){
    newArray.push(helper[0])
}
helperInput(helper.slice(1))

    }
    helperInput(arr)
    return (console.log((newArray).length))
}


CountOdds([12,1,3432,545,454624,2332235,23,23,,23,232454,54,66642,334245,522177,7734,45232,1])