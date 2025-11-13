function Sum(a,b)
{
    return a+b;
}
function Multi(a,b)
{
    return a*b;
}

function calc(a,b,callback)
{
    return callback(a,b)
}

let r1 = calc(10,20,Sum)
console.log(r1)

let r2 = calc(10,20,Multi)
console.log(r2)