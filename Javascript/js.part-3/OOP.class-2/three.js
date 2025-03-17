class Account{
    min_Bal=500
    acc_Name;
    acc_Id;
    acc_Bal;
    constructor(id,name,bal){
        this.acc_Id=id;
        this.acc_Name=name;
        this.acc_Bal = bal;
    }
}
let a1= new Account(101,'Rahul',5000)
let a2= new Account(102,'Sonia',15000)
let a3= new Account(103,'Priyanka',25000)

console.log(a1)
console.log(a2)
console.log(a3)