
function page() {
  return (
    <div className="container min-h-screen bg-gradient-to-r from-purple-100 to-pink-100 flex p-4">
      <div className="flex flex-col p-4 gap-1">
      <h2 className="mb-8 text-3xl font-medium">Add Product</h2>
        <label htmlFor="name">Product Name</label>
        <input type="text" id="name"/>
        <label htmlFor="quantity">Quantity</label>
        <input type="text" id="quantity"/>
        <label htmlFor="usage">Usage</label>
        <input type="text" id="usage"/>
      </div>
      <div>
        <ul>
          <li>Product name </li>
        </ul>
      </div>
    </div>
  )
}

export default page