class Account{
    constructor(){
        console.log("constructor is special method")
    }
    open_Account(){
        console.log("Account Opened")
    }
    deposit_Amount(){
        console.log("amount Deposited")
    }
    get_Bal(){
        console.log("Bal Low")
    }
    withdrawl_Amount(){
        console.log("Insufficient Bal")
    }
}
let a1=new Account()
let a2=new Account()
let a3=new Account()