// // ASSESSMENT 2: Coding Practical Questions with Jest

// // Please read all questions thoroughly
// // If you get stuck, leave comments to help us understand your thought process

// // Use test driven development to complete the following questions
// // Add appropriate dependencies: $ yarn add jest

// // Reminder: The test will call your function
// // Run the file with the following command: $ yarn jest

// // --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// // a) Create a test with expect statements for each of the variables provided.


// describe ('multiplyByThree', () => {
//     it('that takes in an array of numbers and returns an array with all the numbers multiplied by 3', () => {

// const numbersArray1 = [6, 7, 8, 9, 10]
// // Expected output: [18, 21, 24, 27, 30]
// const numbersArray2 = [24, 27, 30, 33, 36]
// // Expected output: [72, 81, 90, 99, 108]

// expect(multiplyByThree(numbersArray1)).toEqual([18, 21, 24, 27, 30])
// expect(multiplyByThree(numbersArray2)).toEqual([72, 81, 90, 99, 108])
// })
// })

// // Output: ReferenceError: multiplyByThree is not defined

// // b) Create the function that makes the test pass.

// // Pseudo code:

// //Input: an array of numbers
// //Output: the product of the array of numbers multiplied by 3

// const multiplyByThree = (arr) => {
//     //use .map to iterate through array
//     return arr.map((value) => {

//         //multiply each iteration by 3, return product in new arrray
//         return value * 3

//     })
// }

//Output: PASS! that takes in an array of numbers and returns an array with all the numbers multiplied by 3


// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

// describe ('diviByThree', () => {
//     it('takes a object as an argument and decides if the number inside it is evenly divisible by three or not', () => {
    
//         const object1 = {number: 15}
//         expect(diviByThree(object1)).toEqual(15 + " " + 'is divisible by three')
//         // Expected output: "15 is divisible by three"

//         const object2 = {number: 0}
//         expect(diviByThree(object2)).toEqual(0 + " " + 'is divisible by three')
//         // Expected output: "0 is divisible by three"

//         const object3 = {number: -7}
        // expect(diviByThree(object3)).toEqual(-7 + " " + 'is not divisible by three')
//         // Expected output: "-7 is not divisible by three"


//     })
// })

//Output: ReferenceError: diviByThree is not defined


// b) Create the function that makes the test pass.

// Pseudo code:

//Input: an object
//Output: a statement that says if number inside object is evenly divisible by three or not

// const diviByThree = (object) => {

//     //conditional variable statement that if number is divisible by 3 return that number is divisible by three
//         if (object.number % 3 === 0) {
//             return `${object.number} is divisible by three` 

//     //else statement for if number isn't divisible by three
//          } else {
//             return `${object.number} is not divisible by three` 

//          }

//         }

//         const object1 = {number: 15}
//         const object2 = {number: 0}
//         const object3 = {number: -7}
        

//     console.log(diviByThree(object1))
//     console.log(diviByThree(object1))
//     console.log(diviByThree(object3))

//Output: PASS! takes a object as an argument and decides if the number inside it is evenly divisible by three or not


// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.


describe ('capSized', () => {
    it ('capitolizes the first letter of each string in the array', () => {
        
        
        const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
        // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
        const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
        // Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]
        

        expect (capSized(randomNouns1)).toEqual (["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
        expect (capSized(randomNouns2)).toEqual (["Temperature", "Database", "Chopsticks", "Mango"])
    })
})

//Output: ReferenceError: capSized is not defined


// b) Create the function that makes the test pass.

// Pseudo code:

//Input: an array of strings
//Output: same array of strings but with letter at 0 index capitalized

const capSized = (array) => {

    //return an array as a string 
    return array.map((nouns) => {
        //return string that takes 0 index position, capitolizes it, then combines with other characters to become array again
        return nouns.charAt(0).toUpperCase()+nouns.slice(1)

        
    })

}


const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]

console.log(capSized(randomNouns1))
console.log(capSized(randomNouns2))

//Output: capitolizes the first letter of each string in the array
