// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------1) What will this log?

const cohort = "Hotel 2023"
// console.log(cohort.split(" "))

// a) Your answer: ["Hotel" "2023"]
// b) Verify and explain: [ 'Hotel', '2023' ]; .split(" ") splits a string between spaces, creating a separate string.

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: Hello, LEARN Student
// b) Verify and explain: undefined; there was no variable statement defining what name was, so name argument is still undefined.

// --------------------3) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: [11, 13, 15]
// b) Verify and explain: [ 11, 13, 15 ]; the function took in an array, filtered the numbers, then returned each number that was not divisible by 2 (odd numbers)

// --------------------4) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer: Javascript
// b) Verify and explain: The console log returned the character string in zero-position under languages

// --------------------5) What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Hotel"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
// console.log(learnStudent)

// a) Your answer: {student: 'George', cohort: 'Hotel', year: 2023}
// b) Verify and explain: Learn { student: 'George', cohort: 'Hotel', year: 2023 }; when the new Learn class was created, it provided a value for the first item inside constructor
