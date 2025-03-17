let goToGoa=(success,failure)=>{
    let acc_Bal=500;
    if(acc_Bal>10000){
        success("Go and Enjoy")
    }else{
        failure("Go to Pro Stack! and Practice with AI Tools")
    }
}
goToGoa((msg)=>{console.log(msg)},(err)=>{console.log(err)})