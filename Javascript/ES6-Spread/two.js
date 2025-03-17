let eids=[101,102,103,104]
//create new array based on existing array
let uids=[]
for(let eid of eids){
    uids.push(eid)
}
console.log(uids)
uids[0] = '100'
console.log(uids)
console.log(eids)