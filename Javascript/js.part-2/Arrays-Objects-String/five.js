let emp={
    eid:101,
    ename:"Rahul",
    esal:45000.45
}
Object.freeze(emp)
emp.ename = "Rahul Gandhi"
console.log(emp)