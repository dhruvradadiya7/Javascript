`use strict`

console.log("i'm in external javascript")
console.log("Welcome to Javascript")

// console.log(45+89-66*2);
// var myMarks=5;
// var myName="Dhruv";
// var isPresent=true;

// let myMarks1=5;
// console.log(myMarks1);

//let message;
//message="this let is a alert"
//alert(message+myMarks)

//let myUser='Dhruv' , age=25 , message1='hello'

// var celsius = prompt("Please enter the temperature in celsius",32)
// var fahrenheit = celsius *1.8 + 32;
// console.log(`Temperatuire in fahrenheit: ${fahrenheit}`)

// let bill= 10.25+3.99+7.15;
// let tip = bill%15;
// let total = bill+tip;
// console.log("Total bill is : "+total)

// numOfMusicians = 5
// if(numOfMusicians === 0){
//     console.log("Not a group")
// }else if(numOfMusicians === 1){
//     console.log("solo")
// }else if(numOfMusicians === 2){
//     console.log("duet")
// }else if(numOfMusicians === 3){
//     console.log("trio")
// }else if(numOfMusicians === 4){
//     console.log("quartet")
// }else if(numOfMusicians > 4){
//     console.log("this is a large group")
// }else{
//     console.log("Please select right number.")
// }




// let bill = 500;
// let tip = bill<=300 && bill>= 50 ? bill*0.15 :  bill*0.2;
// console.log(tip)
// console.log(tip+bill)

// var a=4, b=2;
// var result = a+b < 4 ? "Below" : "Over";
// console.log(result)

// let numNeighbours = prompt("How many neighbour does your country have?",2)
// if(numNeighbours === 1){
//     console.log("Only 1 border")
// }else if(numNeighbours > 1){
//     console.log("More than 1 border.")
// }else{
//     console.log("No border.")
// }



// let sum = function sumOfGrades(g1, g2){
//     return g1+g2;
// }

// let sum1 = sum(11,11);
// console.log(sum1)

// function checkAge(age){
//     if(age>25){
//         return true;
//     }else{
//         return confirm("Are you enroled in course?");
//     }
// }
// console.log(checkAge(20))


// const avg3Num = (a,b,c) => ((a+b+c)/3);
// console.log(avg3Num(1,2,30));

// function isPrime(num) {
//     for(var i = 0; i < num; i++){
//         for (var j = 1; j < i; j++) {
//             if(num%i==0){
//                 break;
//             }else{
//                 console.log(i);
//             } 
//         }
        
//     }
// }

// isPrime(30)



// const calcAverage = (a,b,c) => ((a+b+c)/3);
// var dolAvg = calcAverage(44,23,71);
// var koalAvg = calcAverage(65,54,49);
// function checkWinner(dolAvg, koalAvg){
//     //let tip = bill<=300 && bill>= 50 ? bill*0.15 :  bill*0.2;
//     if(dolAvg >= 2*koalAvg){
//         console.log("Dolphins won");
//     }else if(koalAvg >= 2*dolAvg){
//         console.log("Koalas Won");
//     }else{
//         console.log("No one won");
//     }
// }

// const ckwin = (dolAvg, koalAvg) => dolAvg >= 2*koalAvg ? 
// console.log("DOLPHIN") : koalAvg >= 2*dolAvg ? console.log("Koala") : console.log("No one");


// ckwin(dolAvg,koalAvg)

a = 8 + "8";
document.write(a);