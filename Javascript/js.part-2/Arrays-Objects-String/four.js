let emp={
    eid:101,
    ename:"Rahul",
    esal:45000.45
}
console.log(Object.keys(emp)) //[ 'eid', 'ename', 'esal' ]

console.log(Object.values(emp)) //[ 101, 'Rahul', 45000.45 ]

console.log(Object.entries(emp))
//[ [ 'eid', 101 ], [ 'ename', 'Rahul' ], [ 'esal', 45000.45 ] ]