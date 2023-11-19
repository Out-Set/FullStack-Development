var obj = [
    { id: 1, Pname: "laptop", category: "laptop", subcategory: "hp", price: 30000, Pimage: "product/l1.jpeg" },
    { id: 2, Pname: "laptop", category: "laptop", subcategory: "hp", price: 32000, Pimage: "product/l2.png" },
    { id: 3, Pname: "laptop", category: "laptop", subcategory: "dell", price: 20000, Pimage: "product/l3.jpeg" },
    { id: 4, Pname: "laptop", category: "laptop", subcategory: "dell", price: 25000, Pimage: "product/l4.jpeg" },
    { id: 5, Pname: "laptop", category: "laptop", subcategory: "hp", price: 35000, Pimage: "product/l5.jpeg" },

    { id: 6, Pname: "mobile", category: "mobile", subcategory: "nokia", price: 17000, Pimage: "product/m1.jpeg" },
    { id: 7, Pname: "mobile", category: "mobile", subcategory: "nokia", price: 15000, Pimage: "product/m2.jpeg" },
    { id: 8, Pname: "mobile", category: "mobile", subcategory: "samsung", price: 25000, Pimage: "product/m3.jpeg" },
    { id: 9, Pname: "mobile", category: "mobile", subcategory: "samsung", price: 30000, Pimage: "product/m4.jpeg" },
    { id: 10, Pname: "mobile", category: "mobile", subcategory: "samsung", price: 10000, Pimage: "product/m5.jpeg" },
    { id: 11, Pname: "watch", category: "watch", price: 2000, Pimage: "product/w1.jpeg" },

    { id: 12, Pname: "watch", category: "watch", price: 3000, Pimage: "product/w2.jpeg" }

]

function filterData(cat) {
    fdata = obj.filter((pro) => {
        return cat === pro.category
    })
    var totaldata = fdata.map((item) => {
        return (`
            <div class="left col-3">
                <img src=${item.Pimage} height="150px">
                <div class="content">
                    <h2> PName-${item.Pname}   </h2>
                    <p>Price-Rs.${item.price} category=${item.category}  </p>
                    <p>SubCat=${item.subcategory}  </p>
                </div>
            </div>
        `)
    })
    document.getElementById("root").innerHTML = totaldata;
}


function laptopfilter(subcat) {
    var sbdata = fdata.filter((subpro) => {
        return subcat === subpro.subcategory
    })
    var totaldata = sbdata.map((item) => {
        return (`
            <div class="left col-3">
                <img src=${item.Pimage} height="150px">
                <div class="content">
                    <h2> PName-${item.Pname}   </h2>
                    <p>Price-Rs.${item.price} category=${item.category}  </p>
                    <p>SubCat=${item.subcategory}  </p>
                </div>
            </div>
        `)
    })
    document.getElementById("root").innerHTML = totaldata;
}


var totaldata = obj.map((item) => {
    return (`
        <div class="left col-3">
            <img src=${item.Pimage} height="150px">
            <div class="content">
                <h2> PName-${item.Pname}   </h2>
                <p>Price-Rs.${item.price} category=${item.category}  </p>
                <p>SubCat=${item.subcategory}  </p>
            </div>
    
        </div>
        
    `)
})
document.getElementById("root").innerHTML = totaldata;
