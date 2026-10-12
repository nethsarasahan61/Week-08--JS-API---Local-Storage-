console.log("Hello JS!");
localStorage.clear()

// localStorage.setItem("name","Santha")
// localStorage.removeItem("name")

let student = [{name:"Sahan",age:18,address:"Moratuwa"}]
localStorage.setItem("StudentObjectArray",JSON.stringify(student))

let students=JSON.parse(localStorage.getItem("Student"))
console.log(students);

students.push({name:"Nethsara",age:19,address:"Galle"})
students.push({name:"Fonseka",age:20,address:"Matara"})
students.push({name:"Sunil",age:56,address:"Doha"})
console.log(students);

localStorage.setItem("StudentObjectArray",JSON.stringify(students))
