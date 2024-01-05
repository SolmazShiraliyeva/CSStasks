let str = 'javascript'


function evenUpperLetter(){
    let result = '';
    for(let i = 0; i <str.length; i++){
if ( i%2==0 ) {
    // console.log(str[i].evenUpperLetter());
    result += str[i].toUpperCase()
}
else{
    // result += str[i].toLowerCase()
}
    }
    return result;
}
evenUpperLetter()