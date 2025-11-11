let enames = ["rahul" , "sonia" , "priya" , "modi" , "amith"]
//Create New Array With UpperCase enames
let users = []
for(let ename of enames)
{
    users.push(ename.toUpperCase())
}
console.log(users)