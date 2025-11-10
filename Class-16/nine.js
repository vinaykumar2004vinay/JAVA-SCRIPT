let emp = {eids:101 , ename:"Rahul" , email:"rahulgandhi@gmail.com"}
let details = {email:"rahulgandhi@gmail.com" , location:"Wayanad"}
let emp_details = {...emp , ...details}
console.log(emp_details)