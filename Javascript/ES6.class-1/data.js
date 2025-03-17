let employees=[
    {eid:101,ename:"Rahul",esal:45000},
    {eid:102,ename:"Sonia",esal:55000},
    {eid:103,ename:"Priyanka",esal:65000},
]
function display_Employee_Data(){
    let rows=""
    for (const emp of employees) {
        rows= rows+`
                    <tr>
                        <td>${emp.eid}</td>
                        <td>${emp.ename}</td>
                        <td>${emp.esal}</td>
                    </tr>
                   `
    }

    document.getElementById('tData').innerHTML =rows
    //document.getElementById('tData').innerHTML ="GM"
}