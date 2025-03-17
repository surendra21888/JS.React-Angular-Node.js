let eids=[101,102,103,104]
//index    0   1   2   3 
eids.push(105)  //append element end of array
console.log(eids) //[101,102,103,104,105]

eids.pop()  //remove last element from array
console.log(eids) //[101,102,103,104]

eids.unshift(100) //add element at begining of array
console.log(eids) //[ 100, 101, 102, 103, 104 ]

eids.shift() //remove first element from array
console.log(eids) //[ 101, 102, 103, 104 ]