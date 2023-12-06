// First-Class Functions:
// In JavaScript, functions are first-class citizens, meaning they can be:
// Assigned to variables
// Passed as arguments to other functions
// Returned as values from other functions
// Stored in data structures
// Modularity:

// Functions allow you to break down your code into modular, reusable pieces. This makes your code more organized, easier to understand, and promotes the concept of DRY (Don't Repeat Yourself).
// Abstraction:

// Functions provide a level of abstraction. Once a function is defined, you can use it without knowing or caring about how it is implemented. This abstraction simplifies the complexity of your code.
// Encapsulation:

// Functions allow you to encapsulate logic and data, which means you can group related operations together. This helps in creating clean and maintainable code.
// Parameterization:

// Functions can accept parameters, allowing you to create more flexible and customizable code. Parameters allow you to pass values into a function, making it adaptable to different scenarios.
// Return Values:

// Functions can return values, allowing them to produce results that can be used elsewhere in your code. This is crucial for creating functions that perform specific tasks and provide meaningful output.
// Callback Functions:

// The ability to pass functions as arguments enables the use of callback functions. Callbacks are essential for asynchronous operations, event handling, and various design patterns like the observer pattern.
// Closures:

// JavaScript functions create closures, which means they retain access to the variables of the outer (enclosing) scope even after the outer function has finished execution. This enables powerful programming patterns.

// Function definition
function addNumbers(a, b) {
    // Function body
    var sum = a + b;
    
    // Return statement
    return sum;
  }
  
  // Function usage
  var result = addNumbers(5, 10);
  console.log(result); // Output: 15
  

// Function Definition:

// function addNumbers(a, b): This line defines a function named addNumbers that takes two parameters a and b.
// Function Body:

// Inside the curly braces {} is the body of the function. It contains the actual code that the function will execute. In this case, it calculates the sum of a and b and stores it in the variable sum.
// Return Statement:

// return sum;: This line specifies the value that the function will output when it is called. In this example, it returns the calculated sum.
// Function Usage:

// var result = addNumbers(5, 10);: This line calls the addNumbers function with the arguments 5 and 10, and the result is stored in the variable result.
// Logging the Result:

// console.log(result);: This line prints the result to the console. In this example, it will output 15 because 5 + 10 = 15.



// ******************************************************** Parameter ************************************************************************
function stringToVairable(){
  console.log(arguments)
}

stringToVairable(1,2,3,4,56,6)

// ********************************************************* Arrow Function *******************************************************************
const func = () => {
  console.log("hello")
}

const sum = () => console.log('hello') 

// ********************************************************* Anonymous Function and Self Evoking ***********************************************
// Anonymous Functions
x = function() {console.log("hello")}
x()


// Self Evoking Function
(function(){
  console.log('hello')
})();

(function exec() {
  console.log("bbye");
})();


