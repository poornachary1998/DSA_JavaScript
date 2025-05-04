// Given 2 String, wrf to determins if the second string is an anagram of first.
// applyAn anagaram is a word , phrase or name found by rearranging the letters of another,

function Anagram( str1, str2){

    if ( str1.length !== str2.length){
return false;
    }

    let strFreqCounter1 =  { };
    let strFreqCounter2 =  { };


    for( let val of str1){
        strFreqCounter1[val] = (strFreqCounter1[val] || 0 ) +1
    }

    for( let val of str2){
        strFreqCounter2[val] = (strFreqCounter2[val] ||0 )+1
    }

    for( let val in strFreqCounter1){
        if(!(val in strFreqCounter2)) return false
    }
    return true
}
console.log( Anagram("cinemw", "iceman"))