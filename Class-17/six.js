let numbers = [1,2,3,4,5,6,7,8,9,10]
//write a program to print all even numbers using filter
let even_numbers = numbers.filter((num) => {return num%2===0})
console.log(even_numbers)