//condional and looping statements

//conditional :
//if if-else switch-case

// var a = 10000;
// var b = 2000;
// var c = 500;

// if (a > b) {
//     console.log("a is greater");
// }
// else {
//     console.log("b is greater");
// }

// if ((a > b) && (a > c)) {
//     console.log("A is greater");
// }
// else if ((b > a) && (b > c)) {
//     console.log("B is greater");
// }
// else if ((c > a) && (c > b)) {
//     console.log("C is greater");
// }

// var marks = 105;

// if (marks > 90 && marks <= 100) {
//     console.log("grade A");
// }
// else if (marks > 70 && marks <= 90) {
//     console.log("grade b");
// }
// else if (marks > 40 && marks <= 70) {
//     console.log("grade c");
// }
// else if (marks > 0 && marks <= 40) {
//     console.log("grade d");
// }
// else {
//     console.log("invalid choice");
// }

//switch case

// var choice = 5;

// switch (choice) {
//     case 1:
//         console.log("English");
//         break;
//     case 2:
//         console.log("Hindi");
//         break;
//     case 3:
//         console.log("Gujarati");
//         break;
//     default:
//         console.log("Invalid choice");
// }


// var a = 100;
// var b = 20;
// var ch = "mul";

// switch (ch) {
//     case "add":
//         console.log("Addition of " + a + " and " + b + " is " + (a + b));
//         break;
//     case "sub":
//         console.log("Substration of " + a + " and  " + b + " is : " + (a - b));
//         break;
//     case "mul":
//         console.log("Multiplication of " + a + " and  " + b + " is : " + (a * b));
//         break;
//     case "div":
//         console.log("Division of " + a + " and  " + b + " is : " + (a / b));
//         break;
//     default:
//         console.log("invalid choice");

// }


var grade = "D";

switch (grade) {
    case "A":
        console.log("very good");
        break;
    case "B":
        console.log("good");
        break;
    case "C":
        console.log("Need improvement");
        break;
    default:
        console.log("invalid choice");
}
