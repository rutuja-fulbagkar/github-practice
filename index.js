// debug-example.js

function addNumbers(a, b) {
    // Intentional bug: should return a + b
    return a - b;
}

 

function greet(name) {
    // Intentional bug: should use template literals
    return "Hello, " + name;
}

function calculateArea(radius) {
    // Intentional bug: Math.PI is missing
    return radius * radius;
}

// Test the functions
console.log(addNumbers(5, 3)); // Expected: 8, Actual: 2
console.table(addNumbers(5, 4)); // Expected:)
console.log(greet("Alice")); // Expected: Hello, Alice, Actual: Hello Alice
console.log(calculateArea(5)); // Expected: 78.54, Actual: 25
