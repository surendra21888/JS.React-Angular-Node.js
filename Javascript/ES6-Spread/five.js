//What is spread Object?  - Extract and copy
/*
1. create new arrays/objects - based on existing
2. merge arrays/objects
3. extending array elements or object properties
*/
let emp={'eid':101,'ename':'Rahul','email':'rg@gmail.com'}; 
let details={'email':'rg@tcs.com',esal:450000}
let emp_Details={...emp,...details}
console.log(emp_Details)
//{ eid: 101, ename: 'Rahul', email: 'rg@tcs.com', esal: 450000 }