let fun=async()=>{
var res=await fetch("http://localhost:3000/products");
// console.log(res.json());
result=await res.json()
// console.log(result);
var totaldata=result.map((item)=>{
return(
    `
    <div class="col">
    <div class="card">
      <img src=${item.pimage} class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${item.Pname}</h5>
        <p class="card-text">Price=Rs.${item.price}</p>
        <p class="card-text">Category=${item.category}</p>
        <p class="card-text">Sub-Category=${item.subcategory}</p>
      </div>
      <button class="btn btn-danger">Add to Cart</button>
    </div>
  </div>

`
)
})
document.getElementById("myrow").innerHTML=totaldata.join('')
}
fun()



function filtercat(cat){
  var fdata=result.filter((curcat)=>{
  return cat==curcat.category
   })
   var totaldata=fdata.map((item)=>{
    return(
        `
        <div class="col">
        <div class="card">
          <img src=${item.pimage} class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${item.Pname}</h5>
            <p class="card-text">Price=Rs.${item.price}</p>
            <p class="card-text">Category=${item.category}</p>
            <p class="card-text">Sub-Category=${item.subcategory}</p>
          </div>
          <button class="btn btn-danger">Add to Cart</button>
        </div>
      </div>
    
    `
    )
    })
    document.getElementById("myrow").innerHTML=totaldata.join('')
}

function filtermsubcat(mcat,cat){
   var msdata=result.filter((curele)=>{
   return mcat===curele.subcategory && cat=== curele.category
   })
   var totaldata=msdata.map((item)=>{
    return(
        `
        <div class="col">
        <div class="card">
          <img src=${item.pimage} class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${item.Pname}</h5>
            <p class="card-text">Price=Rs.${item.price}</p>
            <p class="card-text">Category=${item.category}</p>
            <p class="card-text">Sub-Category=${item.subcategory}</p>
          </div>
          <button class="btn btn-danger">Add to Cart</button>
        </div>
      </div>
    
    `
    )
    })
    document.getElementById("myrow").innerHTML=totaldata.join('')
}
