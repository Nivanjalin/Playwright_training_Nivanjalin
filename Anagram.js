//home assignment:

function lengthofstring(string){

let split=string.split(" ")
let splitword=split.slice(-1).join()
console.log(splitword.length)
}

lengthofstring("Hello World");

//example 2:

function Lengthofsentence(string){
let split=string.trim().split(" ");
console.log(split);
let splitword=split.slice(-1).join()
console.log(splitword.length)
}

Lengthofsentence(" fly me to the moon ");


//examplee 3:

function uppercaselowercase(x,y){
    x=x.toLowerCase()
    y=y.toLowerCase()

    console.log(x)
    console.log(y)

    if (x.length != y.length) {
        console.log("This is not a anagram word")
    }
    let s1 = x.split("").sort().join("")
    let s2 = y.split("").sort().join("")
    console.log(s1)
    console.log(s2)
    if (s1 === s2) {
        console.log("The specified word is a anagram")
    } else {
        console.log("The specified word is not a anagram")
    }
}
uppercaselowercase("listen","silent")
