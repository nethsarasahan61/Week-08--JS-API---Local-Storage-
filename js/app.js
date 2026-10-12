function getStudents(){
    let students;
    if(JSON.parse(localStorage.getItem("StudentObject"))!=null){
        students=JSON.parse(localStorage.getItem("StudentObject"))
    }else{
        students=[];
    }
    return students;
}
btnLoadtbOnAction()
function btnAddOnAction(){
    let students=getStudents()  
    if(document.getElementById("txtid").value==""){
        alert("ID Cannot be empty!")
    }else if(document.getElementById("txtname").value==""){
        alert("Name Cannot be empty!")
    }else if(document.getElementById("txtage").value==""){
        alert("Age Cannot be empty!")
    }else if(document.getElementById("txtaddress").value==""){
        alert("Address Cannot be empty!")
    }else{
        students.push({
            id:document.getElementById("txtid").value,
            name:document.getElementById("txtname").value,
            age:document.getElementById("txtage").value,
            address:document.getElementById("txtaddress").value
        })
        localStorage.setItem("StudentObject",JSON.stringify(students))

        document.getElementById("txtid").value=""
        document.getElementById("txtname").value=""
        document.getElementById("txtage").value=""
        document.getElementById("txtaddress").value=""
        btnLoadtbOnAction()
        alert("Added Customer!")    
    }
}
function btnSearchOnAction(){
    let students=getStudents()    
    let found=false;
    students.find(st=>{
        if(st.id==document.getElementById("txtid").value){
            document.getElementById("txtname").value=st.name
            document.getElementById("txtage").value=st.age
            document.getElementById("txtaddress").value=st.address
            found=true;
        }
    })    
    if(students.length!=0 && found){
        alert("Searched Customer!")
    }else{
        alert("Customer Not Found!")
        emptyFields();
    }
}
function btnDeleteOnAction(){
    let students=getStudents()
    let ST=students.filter(st=>st.id!=document.getElementById("txtid").value)
    if(ST.length!=0 || students.length!=0){
        alert("Deleted Customer!")        
        emptyFields();        
    }else{
        alert("No Customer to Delete!")
        emptyFields();
    }
    localStorage.setItem("StudentObject",JSON.stringify(ST))    
}
function btnUpdateOnAction(){
    let students=getStudents()    
    let found=false;
    let ob=students.find(st=>(st.id==document.getElementById("txtid").value))
    if(ob){
        ob.id=document.getElementById("txtid").value
        ob.name=document.getElementById("txtname").value
        ob.age=document.getElementById("txtage").value
        ob.address=document.getElementById("txtaddress").value
        localStorage.setItem("StudentObject",JSON.stringify(students))
    }
    if(ob){
        alert("Updated Customer!")
        emptyFields();
    }else{
        alert("No Customer to update!")
        emptyFields();
    }        
}
function btnClearOnAction(){
    localStorage.clear()
    clear()
    alert("Clared Customer!")
}
function btnLoadtbOnAction(){
    let students=getStudents()
    if(students.length!=0){
        let tbl=document.getElementById("custb")
        tbl.innerHTML=`
                <table border="1" id="custb">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Address</th>
                </tr>
            </table>
            `
        students.forEach(st => {
            tbl.innerHTML+=`
                <tr>
                    <td>${st.id}</td>
                    <td>${st.name}</td>
                    <td>${st.age}</td>
                    <td>${st.address}</td>
                </tr>
            `
        });            
    }
}
function emptyFields(){
    document.getElementById("txtid").value=""
    document.getElementById("txtname").value=""
    document.getElementById("txtage").value=""
    document.getElementById("txtaddress").value=""
}
function clear(){
    emptyFields();
    let tbl=document.getElementById("custb")
    tbl.innerHTML=`
            <table border="1" id="custb">
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Address</th>
            </tr>
        </table>
        `
}