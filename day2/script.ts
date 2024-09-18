
function getGreaterNumber(a: number, b: number): number {
    return a > b? a : b;
}

//console.log(getGreaterNumber(5, 10)); // Output: 10

function printGreaterNumber(a: number, b: number): void {
    console.log(`The greater number is ${getGreaterNumber(a, b)}`);
}

//printGreaterNumber(5, 10); // Output: The greater number is 10

function evenOrOdd(num: number): string {
    return num % 2 === 0? 'Even' : 'Odd';
}

//console.log(evenOrOdd(5)); // Output: Odd

function stringLength(str: string): number {
    return str.length;
}

//console.log(stringLength('Hello')); // Output: 5

function createarray(n: number): number[] {
    return Array.from({length: n}, (_, i) => i + 1);
}

//console.log(createarray(5)); // Output: [1, 2, 3, 4, 5]

// const alphabetUpper = Array.from({ length: 26 }, (_, i) => String.fromCharCode(i + 65));
// console.log(alphabetUpper);

function getMax(arr: number[]): number {
    return Math.max(...arr);
}

//console.log(getMax([5, 20, 2, 8, 1])); // Output: 10

interface Person {
    name: string;
    age: number;
    favoriteColor?: string;
}

const i:Person = {
    name: 'John',
    age: 30
};

//console.log(i); // Output: John

function printPerson(person: Person): void {
    console.log(`Name: ${person.name}, Age: ${person.age}, Favorite Color: ${person.favoriteColor || 'N/A'}`);
}

//printPerson(i); // Output: Name: John, Age: 30, Favorite Color: blue

function isMinor (person: Person): boolean {
    return person.age < 18;
}

//console.log(isMinor(i)); // Output: false

interface Book {
    title: string;
    author: string;
    year: number;
}

interface reader {
    person  : Person;
    favoriteBook: Book;
}

function getOldestReader(readers: reader[]): reader {
    return readers.reduce((oldestReader, reader) => reader.person.age > oldestReader.person.age? reader : oldestReader, readers[0]);
}

console.log(getOldestReader( [ { person: { name: 'Alice', age: 60 }, favoriteBook: { title: 'To Kill a Mockingbird', author: 'Harper Lee', year:2011}},  { person: { name: 'muni', age: 25 }, favoriteBook: { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 2013}}, { person: { name: 'yosi', age: 70 }, favoriteBook: { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 2000 }}] )); // Output: { person: { name: 'Alice', age: 25 }, favoriteBook: { title: 'To Kill a Mockingbird', author: 'Harper

function getOldestBook(readers: reader[]): reader {
    return readers.reduce((oldestBook, reader) => reader.favoriteBook.year < oldestBook.favoriteBook.year? reader : oldestBook, readers[0]);
}

console.log(getOldestBook( [ { person: { name: 'Alice', age: 60 }, favoriteBook: { title: 'To Kill a Mockingbird', author: 'Harper Lee', year:2011}},  { person: { name: 'muni', age: 25 }, favoriteBook: { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 2013}}, { person: { name: 'yosi', age: 70 }, favoriteBook: { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 2000 }}] ));

