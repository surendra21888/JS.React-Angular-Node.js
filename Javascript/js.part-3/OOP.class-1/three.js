class Account{
    min_Bal=500;
    branch_Name="MRT";
    acc_Bal = 0;
    open_Account(){
        console.log("Account Opened")
    }
    deposit_Amount(){
        console.log("Amount Deposited")
    }
    get_Bal(){
        console.log("Balance Low")
    }
    withdrawl(){
        console.log("Insuffiient Balance")
    }
    close_Account(){
        console.log("You cont close - bal is :-ve ")
    }
}

let a1= new Account();
a1.open_Account()
a1.deposit_Amount()
a1.withdrawl()
a1.get_Bal()
a1.close_Account()

console.log(a1)