import React, { useState } from 'react'
import Menu from './Menu'
function App() {
  let [item, setItems] = useState(Menu)
  console.log(item);

  const filterItems = (category) => {
    if (category === 'all') {
      setItems(Menu);
    } else {
      const filteredItems = Menu.filter((pro) => pro.category === category);
      setItems(filteredItems);
    }
  };
  return (
    <>
      <div className='btn btn-group'>
        <button className='btn btn-danger' onClick={() => filterItems('mobile')} >Mobile</button>
        <button className='btn btn-danger' onClick={() => filterItems('shirt')} >Shirt</button>
        <button className='btn btn-danger' onClick={() => filterItems('watch')} >Watch</button>
      </div>
      {item ? <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">

        {item.map((pro) => {
          return (
            <div className="col">
              <div className="card">
                <img src={pro.pimage} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{pro.pname}</h5>
                  <p className="card-text">Price-{pro.price} category={pro.category}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div> : <p>No data</p>}
    </>
  )
}

export default App