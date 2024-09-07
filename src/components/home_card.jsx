import React from 'react'

function Card() {
  return (
    <div className='contaienr flex-col p-4 rounded shadow w-64 justify-between bg-gradient-to-r from-purple-200 to-pink-200 h-24'>

      <div className=' container flex flex-row justify-between'>
        <p>Products</p>
        <p>Total</p>
      </div>
      <h3>2299</h3>

    </div>
  )
}

export default Card