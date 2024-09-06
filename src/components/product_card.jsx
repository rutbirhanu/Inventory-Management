
function ProductCard({name, quantity, usage}) {
  return (
    <div className="shadow w-80 px-8 py-3 m-3 bg-white rounded-xl">
          <div className="flex justify-between">
            <p className="text-sm text-gray-500">Product Name</p>
              <p>{name}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-sm text-gray-500">Quantity</p>
              <p>{quantity}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-sm text-gray-500">Usage</p>
              <p>{usage}</p>
          </div>
        </div>
  )
}

export default ProductCard