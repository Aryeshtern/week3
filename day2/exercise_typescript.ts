// TypeScript Exercises - Prompts Only

// Exercise 1: Using Union Types and Type Aliases
// Create a type alias 'UserInput' that can be either a number or a string.
// Then, write a function 'processUserInput' that takes a UserInput and returns a string.
// The function should return different messages based on the input type.

// Your code here

type UserInput = number | string;
function processUserInput(input: UserInput): string {
    if (typeof input === "number") {
        return `The number is ${input}`;
    } else {
        return `The string is "${input}"`;
    }
}

console.log(processUserInput("10")); // Output: "The number is 10"

// Exercise 2: Working with Interfaces and Optional Properties
// Define a 'Person' interface with the following fields:
// - name (string, required)
// - age (number, required)
// - email (string, optional)
// - phone (string, optional)
// Then, create a function 'createPersonProfile' that takes a Person object and returns a string
// containing all the available information.

// Your code here

interface Person {
    name: string;
    age: number;
    email?: string;
    phone?: string;
}

function createPersonProfile(person: Person): string {
    return `Name: ${person.name}, Age: ${person.age}, Email: ${person.email || "N/A"}, Phone: ${person.phone || "N/A"}`;
}


// Exercise 3: Using Literal Types
// Define a 'Direction' type that can only be one of four directions: "North", "South", "East", or "West".
// Then, write a function 'move' that takes a Direction and returns a string indicating movement in that direction.

// Your code here

let Direction : "North" | "South" | "East" | "West";

// Example usage:

Direction = "North";
console.log(move(Direction));

Direction = "East";
console.log(move(Direction)); 
function move(direction: string): string {
    return `Moving ${direction}`;
}



// Exercise 4: Working with Type Inference
// Write a function 'createArray' that takes three parameters: a string, a number, and a boolean.
// The function should return an array containing these three values.
// Then, create a variable that calls this function and demonstrate how TypeScript infers the type of the resulting array.

// Your code here


// Exercise 5: Using 'unknown' Type
// Write a function 'processUnknownInput' that takes a parameter of type unknown and returns a string.
// The function should handle different types of input safely, returning different messages based on the input type.

// Your code here


// Exercise 6: Working with Enums
// Create an enum 'DayOfWeek' for the days of the week.
// Then, write a function 'isWeekend' that takes a DayOfWeek and returns a boolean indicating whether it's a weekend day.

// Your code here


// Exercise 7: Basic Generics
// Create a generic function 'firstElement' that takes an array of any type and returns the first element of the array.
// If the array is empty, the function should return undefined.

// Your code here


// Feel free to test your functions here