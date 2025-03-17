let nums=[1,2,3,4,5,6,7,8,9]
//create new array with even numbers
let even_Nums=[]
for(let num of nums){
    if(num %2 ===0){
        even_Nums.push(num)
    }
}
console.log(nums)
console.log(even_Nums)