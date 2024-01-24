import React from 'react'
import { useSelector } from 'react-redux'
function Data() {
  const val = useSelector((state) => state.counter.value)
  return (
    <>
      <h2>Data called</h2>
      <h3>New value={val}</h3>

    </>
  )
}

export default Data