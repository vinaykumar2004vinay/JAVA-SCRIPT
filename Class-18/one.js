let employees = [
    {eid:101 , ename:"Rahul"},
    {eid:102 , ename:"Sonia"},
    {eid:103 , ename:"Modi"}
]
let emp = employees.find((emp) =>{
    return emp.eid===102;                 //{ eid: 102, ename: 'Sonia' }
    //return emp.eid===108;               //undefined
})
console.log(emp)