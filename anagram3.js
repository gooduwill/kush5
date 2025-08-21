function anagram(num1,num2){
    return num1.toString().split('').sort().join('')==num2.toString().split('').sort().join('')
}
console.log(anagram(159,951))