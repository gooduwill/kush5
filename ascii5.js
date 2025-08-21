function ascii(arr){
    const result=arr.reduce((acc,cv)=>{
        return acc+(cv.charCodeAt()) 
    },0)
    return result
}
console.log(ascii(['a','b','c']))