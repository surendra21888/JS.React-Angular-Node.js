//What is spread Object?  - Extract and copy
/*
1. create new arrays/objects - based on existing
2. merge arrays/objects
3. extending array elements or object properties
*/
let a=[10,20,30]; let b=[30,40,50];
let c=[...a,             ...b]
console.log(c) //[ 10, 20, 30, 30, 40, 50 ]