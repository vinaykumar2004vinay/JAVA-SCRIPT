let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
//write a program to print even numbers using for_of loop
let even_number=0
for(let num of numbers)
{
    if(num%2===0)
    {
        even_number++
    }
}
console.log("No of Evens = ",even_number)