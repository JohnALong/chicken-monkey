// for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
    // Divide the current number by 2, and check if the remainder is 0
    // if (currentNumber % 2 === 0) {
        // console.log(currentNumber) // Only 2, 4, 6 will appear
    // }
// }

for (let theNumber = 1; theNumber <= 100; theNumber++) {
// checking for remainder of 5 and 7 for theNumber
    if (theNumber % 5 === 0 && theNumber % 7 === 0) {
        console.log("ChickenMonkey") 
    } else if (theNumber % 5 === 0) {
        console.log("Chicken");
    } else if (theNumber % 7 === 0) {
        console.log("Monkey");
    } else {
        console.log(theNumber);
    }
}
