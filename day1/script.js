
const successPromise = () => {
    return new Promise((resolve) => {
        resolve('Success!');
    });
}
// 
// successPromise().then(massage => {
    // console.log(massage);
// });


const getName = (firstName, lastName) => {
    setTimeout(() => {
        console.log(`${firstName} ${lastName}`)}, 1000);
    }

// getName('John', 'Doe');

const addfive = (num) => {
     return new Promise((resolve) => {
        setTimeout(()=> resolve(num + 5), 500);
    })};


const multiplyByTwo = (num) => {
    
    return new Promise((resolve, reject) => {
        setTimeout(()=> resolve(num * 2), 500);
    })};


const subtractTen = (num) => {
    
    return new Promise((resolve, reject) => {
        setTimeout(()=>resolve(num - 10), 500);
    })};


// addfive(10)
// .then(resolve => multiplyByTwo(resolve))
// .then(resolve => subtractTen(resolve))
// .then(result => console.log(result));;
// 
const divide = (num1, num2) => {
    return new Promise((resolve, reject) => {
        if(num2 <= 0) {
            reject('Cannot divide by zero');
        } else {
            setTimeout(()=>resolve(num1 / num2), 1000);
        }
    });
}

// divide(10, 0).then(result => console.log(result)).catch(error => console.log(error));

async function performOperations() {
    try {
        const result = await divide(10, 4);
        console.log(result);
    } catch(error) {
        console.log(error);
    }
}

// performOperations();
async function whileperformingOperations() {
count = 0;
while(count < 10) {
    await performOperations();
    count++;
}

console.log('Finished!');
}

whileperformingOperations();