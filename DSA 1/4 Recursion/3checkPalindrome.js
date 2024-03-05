function isPalindrome(str){
    if(str.length<=0){
        return true
    }
    if(str[0].toLowerCase()!==str[str.length-1].toLowerCase()){
        return false
    }
    return isPalindrome(str.slice(1,-1))
}

let str1 = 'Malayalam';
console.log(isPalindrome(str1));