class Account{
    acc_Id;
    acc_Name;
    acc_Bal;
    min_Bal=500
    constructor(id,name,amount) {
        this.acc_Id=id;
        this.acc_Name=name;
        this.acc_Bal=amount;
    }
}
let a1= new Account(101,'Rahul',5000);
let a2= new Account(102,'Sonia',15000);
console.log(a1) //Account { acc_Id: 101, acc_Name: 'Rahul', acc_Bal: 5000, min_Bal: 500 }
console.log(a2)