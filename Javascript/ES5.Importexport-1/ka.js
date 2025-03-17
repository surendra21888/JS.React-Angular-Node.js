//let tax  = require('./central')  //ES5 default import
//ES5 -Named import
let {tax,get_Discount}  = require('./central')

console.log(tax)

let discount_Value=get_Discount()
console.log(discount_Value)