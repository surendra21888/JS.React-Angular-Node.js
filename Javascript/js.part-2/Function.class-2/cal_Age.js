function cal_Age(birth_Year){
    let current_Year = new Date().getFullYear()

    return current_Year - birth_Year;
}
let  r_Age =  cal_Age(1973)
let  s_Age =  cal_Age(1953)
let  p_Age =  cal_Age(1983)
console.log(r_Age)
console.log(s_Age)
console.log(p_Age)