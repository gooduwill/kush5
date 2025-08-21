function anagram(num1,nmu2){
    return num1.toString().split('').sort().join('')==nmu2.toString().split('').sort().join('')
}
console.log(anagram(136,631))
