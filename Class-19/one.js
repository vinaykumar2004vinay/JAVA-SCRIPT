function calc(a,b,op)
{
    if(op ==="Sum")
    {
        return a+b;
    }
    if(op ==="Multi")
    {
        return a*b;
    }
}

let r1 = calc(10,20,"Sum")
console.log(r1)

let r2 = calc(10,20,"Multi")
console.log(r2)