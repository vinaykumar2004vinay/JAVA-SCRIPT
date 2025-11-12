let employees = [
    {eid:101 , ename:"Rahul" , gender:"Male"},
    {eid:102 , ename:"Sonia" , gender:"Female"},
    {eid:103 , ename:"Modi" , gender:"Male"},
    {eid:104 , ename:"Priyanka" , gender:"Female"},
    {eid:105 , ename:"Amith" , gender:"Male"}
]

let Male_Employees = employees.filter(e => e.gender==="Male")
console.log(Male_Employees)