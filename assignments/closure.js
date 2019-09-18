// ==== Challenge 1: Write your own closure ====
// Write a closure of your own creation.
// Keep it simple! Remember a closure is just a function
// that manipulates variables defined in the outer scope.
// The outer scope can be a parent function, or the top level of the script.

const weeks_in_a_year = 52;
function time_spent_on_project(weeks) {
  return `I spent ${weeks} weeks working on this project, which is roughly ` + Math.round(weeks/weeks_in_a_year*100).toString() + `% of the year.`;
}
console.log(time_spent_on_project(2));


/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Implement a "counter maker" function ====
const counterMaker = () => {
  // IMPLEMENTATION OF counterMaker:
  // 1- Declare a `count` variable with a value of 0. We will be mutating it, so declare it using `let`!
  // 2- Declare a function `counter`. It should increment and return `count`.
  //      NOTE: This `counter` function, being nested inside `counterMaker`,
  //      "closes over" the `count` variable. It can "see" it in the parent scope!
  // 3- Return the `counter` function.
  let count = 0;
  return function counter() {
    return count += 1;
  }
};
// Example usage: const myCounter = counterMaker();
// myCounter(); // 1
// myCounter(); // 2
const myCounter = counterMaker();
console.log(myCounter());
console.log(myCounter());

// ==== Challenge 3: Make `counterMaker` more sophisticated ====
// It should have a `limit` parameter. Any counters we make with `counterMaker`
// will refuse to go over the limit, and start back at 1.
const counterMaker2 = (limit) => {
  let count = 0;
  return function counter() {
    if (count >= limit) {
      return count = 1;
    }
    else {
      return count += 1;
    }
  }
};
const myCounter2 = counterMaker2(3);
console.log(myCounter2());
console.log(myCounter2());
console.log(myCounter2());
console.log(myCounter2());

// ==== Challenge 4: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
