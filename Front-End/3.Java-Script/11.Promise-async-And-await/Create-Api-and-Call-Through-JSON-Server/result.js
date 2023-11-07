
let fun=async()=>{
var data=await fetch("http://localhost:3000/users")
// console.log(data.json());
var result=await data.json()
// console.log(result);
var totaldata=  result.map((item)=>{
  return(
    `
    <tr>
    <td> ${item.Name} </td>
    <td> ${item.age} </td>
    <td> ${item.email} </td>
    <td> ${item.city} </td>
    </tr>
    `
  )
  })
document.getElementById("mytable").innerHTML=totaldata.join(' ')
}
fun()