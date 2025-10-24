let employees=[{"eid":1,"ename":"Brynne","gender":"Female"},
{"eid":2,"ename":"Eustace","gender":"Male"},
{"eid":3,"ename":"Myriam","gender":"Female"},
{"eid":4,"ename":"Albie","gender":"Male"},
{"eid":5,"ename":"Yorker","gender":"Male"},
{"eid":6,"ename":"Brittney","gender":"Female"},
{"eid":7,"ename":"Jolee","gender":"Female"},
{"eid":8,"ename":"Conant","gender":"Male"},
{"eid":9,"ename":"Reid","gender":"Male"}]
let no_male_employees=0;
for(let i=0 ; i<=employees.length-1 ; i++)
{
    if(employees[i].gender==="Male")
    {
        no_male_employees=no_male_employees+1;
    }
}
console.log("No of Male Employees:-",no_male_employees)