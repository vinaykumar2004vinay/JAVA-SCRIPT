let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
//write a program to print even numbers using while loop
let i = 1;
let even_number=0
while(i<=numbers.length-1)
{
    if(numbers[i]%2===0)
    {
        even_number++
    }
    i++
}
console.log("No of Evens = ",even_number)