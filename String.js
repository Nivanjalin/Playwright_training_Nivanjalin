//Home assignment for  reverse the string.

function reversestring(data){
let rev=data.split('').reverse().join('')
console.log(rev);
}

reversestring("NooN");


//Palindrome:

function palindrom (data){
let rev=data.split("").reverse().join("");
if(rev===data){
    console.log("String is a palindrome");
}
else{
    console.log("String is not palindrome");
}
}


palindrom("NooN");