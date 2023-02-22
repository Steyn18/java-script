// Write a program to generate the fibonacci series up to a specified number of terms.

function fibonacci(No) {
 const array  = [0,1];
 for (let i = 2; i < No; i++) {
        array.push(array[i-2]+array[i-1]);
 }
 return array;
}


console.log(fibonacci(12));