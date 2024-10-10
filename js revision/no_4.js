//nested if statement  and logical operators 
let age = 18;
if (age>=18){
    if (age < 65){
        console.log("you are eligliable to work");
    } else {
        console.log("you are retirement age.");
    }
 } else {
    console.log("you are too young to work.");
 }


 //repeated if statement and logical operators
let age = 18;

if (age >= 18 && age < 65) {
    console.log("You are eligible to work");
} else if (age >= 65) {
    console.log("You are retirement age.");
} else {
    console.log("You are too young to work.");
}
