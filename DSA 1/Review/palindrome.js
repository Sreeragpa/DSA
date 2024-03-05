let flag =0;
let str = "English"
for(let i=0;i<str.length;i++){
    if(str[i].toLowerCase()!=str[(str.length-1)-i].toLowerCase()){
        flag=1;
        break;
    }
}

if(flag==1){
    console.log("Not a Plaindrome");
}else{
    console.log("Palindrome");
}