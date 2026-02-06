//Classroom Assignment: Odd or Even


function OddorEven(Number){
    let number= Number;
    if (number/2 && number%2==0){
        console.log("Number is even number");
    }
    else{
        console.log("Number is odd number");
    }
}

OddorEven(24);

// another way to solve this problem:


function OddorEvenmethod2(Number){

    let number= Number;
    if (number%2==0){
         console.log("Number is even number");
    }
    else{
        console.log("Number is odd number");
    }
}

OddorEvenmethod2(52);