let employees=[
    {eid:101,ename:"Rahul",esal:45000},
    {eid:102,ename:"Sonia",esal:55000}
]
let createEmployee=(emp,callback)=>{
    setTimeout(()=>{
        
        employees.push(emp);
        callback()
       
    },1000)
}
let getEmployees=()=>{
    setTimeout(()=>{
        let rows=""
        for(let emp of employees){
            rows=rows+`<tr>
                            <td>${emp.eid}</td>
                            <td>${emp.ename}</td>
                            <td>${emp.esal}</td>
                       </tr>`
        }
        document.getElementById('tdata').innerHTML=rows
    },2000)
}
createEmployee({eid:103,ename:"Priyanka",esal:65000},getEmployees)