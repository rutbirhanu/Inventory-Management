"use client"

import ProductCard from "@/components/product_card"
// import ProductCard from "@/components/productCard"
import { useState, useEffect } from "react"
import { GET } from "../api/product/route"

function page() {
  const [values, setValue] = useState({
    name: "",
    quantity: 0,
    usage: ""
  })

  const [products, setProducts]= useState([])

  const onChange = (e) => {
    setValue({ ...values, [e.target.name]: e.target.value })
  }

  const onSave = (e) => {
    e.preventDefault()
    setProducts([...products, values])
    GET()
  }


  return (
    <div className=" bg-gradient-to-r from-purple-50 to-pink-50 flex flex-wrap p-4 justify-evenly min-h-fit items-start">
      <div className="flex flex-col max-h-fit p-10 gap-1 shadow bg-gradient-to-r from-purple-100 to-pink-100">
        <h2 className="mb-10 text-2xl font-medium">Add Product</h2>
        <label htmlFor="name" className="text-sm text-gray-500">Product Name</label>
        <input type="text" id="name" value={values.name} name="name" onChange={onChange} className=" rounded mb-5 outline-none p-1 inline-block w-80" />
        <label htmlFor="quantity" className="text-sm text-gray-500">Quantity</label>
        <input type="text" id="quantity" name="quantity" value={values.quantity} onChange={onChange} className="rounded mb-5 outline-none p-1" />
        <label htmlFor="usage" className="text-sm text-gray-500">Usage</label>
        <input type="text" id="usage" name="usage" value={values.usage} onChange={onChange} className="rounded mb-5 outline-none p-1" />
        <button onClick={onSave} className="bg-sky-950 text-white font-medium rounded p-1 mt-10"> Save</button>
      </div>

      <div>
        {
          products.map(product => {
           return <ProductCard name={product.name} quantity={product.quantity} usage={product.usage} />
          })
        }
        <div className="flex justify-center gap-4 w-full mt-10">
          <button className="p-1 bg-green-400 text-white rounded w-40">Submit</button>
          <button className="p-1 bg-red-600 text-white rounded w-40 ">Cancel</button>
        </div>

      </div>

    </div>
  )
}

export default page