let eids=[101,102,103,104]
let uids=eids;   //alias name or point to same object
uids[0] = "Rahul"
console.log(eids)  //[ 'Rahul', 102, 103, 104 ]
console.log(uids)  //[ 'Rahul', 102, 103, 104 ]