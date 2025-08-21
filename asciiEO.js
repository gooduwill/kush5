function asciiEo(str){
    let result='';
    for(let char of str){
        if((char.charCodeAt()%2==0)){
            result=result+char.toUpperCase()
        }
        else{
            result=result+char.toLowerCase()
        }
    }
    return result
}
console.log(asciiEo('to be or not to be'))