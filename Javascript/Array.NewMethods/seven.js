let nums=[1,2,3,4,5,6,7,8,9]
//create new array with even numbers

let even_Nums=nums.filter((num)=>{
    return num %2 ===0;
})
console.log(nums)
console.log(even_Nums)