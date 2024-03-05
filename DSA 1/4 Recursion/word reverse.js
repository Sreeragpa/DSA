let str = "today is your review";

function reverseString(str){
    if(str.length<=1)return str
    let lastword = str[str.length-1];
    str.pop()
    return lastword+" "+reverseString(str) 
    
}

let mystr = str.split(' ');
console.log(reverseString(mystr));
// return review + " " +fn(today is your) 
// return review + " " + your + " " + fn(today is)
// return review + " " + your + " " + is + " " + fn(today)
// return review + " " + your + " " + is + " " + today
//  review your is today


// return review + " " +fn(today is your) 
// return  your + " " + fn(today is)
// return   is + " " + fn(today)
// return  today