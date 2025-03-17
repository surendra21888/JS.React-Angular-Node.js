class Account{
    min_Bal=500;
    acc_Bal=0;
    open_Account(){
        console.log("Account Opened Successfully!")
    }
    deposit_Amount(amount){
        this.acc_Bal = this.acc_Bal + amount
    }
    withdrawl_Amount(amount){
        this.acc_Bal = this.acc_Bal - amount
    }
    get_Bal(){
        return this.acc_Bal-this.min_Bal
    }
    close_Acc(){}
}
let a1=new Account()
a1.deposit_Amount(5000)
a1.withdrawl_Amount(15)


let a2=new Account()
a2.deposit_Amount(10000)
a2.deposit_Amount(5000)
a2.withdrawl_Amount(50)

console.log(a1)
console.log(a2)
console.log(a1.get_Bal())
console.log(a2.get_Bal())