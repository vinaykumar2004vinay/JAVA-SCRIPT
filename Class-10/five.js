//Verify given object is empty or not
let user = {}
let emp = {eid:101,ename:"Rahul"}

if(Object.keys(emp).length>0)
{
    console.log("Not Empty")
}
else
{
    console.log("Empty")
}