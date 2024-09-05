
function page() {
  return (
    <div className="container min-h-screen bg-gradient-to-r from-purple-50 to-pink-50 flex flex-wrap p-4 justify-evenly items-center">
      <div className="flex flex-col p-10 gap-1 shadow bg-gradient-to-r from-purple-100 to-pink-100">
        <h2 className="mb-10 text-2xl font-medium">Add Product</h2>
        <label htmlFor="name" className="text-sm text-gray-500">Product Name</label>
        <input type="text" id="name" className=" rounded mb-5 outline-none p-1 inline-block w-80" />
        <label htmlFor="quantity" className="text-sm text-gray-500">Quantity</label>
        <input type="text" id="quantity" className="rounded mb-5 outline-none p-1" />
        <label htmlFor="usage" className="text-sm text-gray-500">Usage</label>
        <input type="text" id="usage" className="rounded mb-5 outline-none p-1" />
        <button className="bg-sky-950 text-white font-medium rounded p-1 mt-10"> Save</button>
      </div>

      <div>
        <div className="shadow w-80 px-8 py-3 m-3 bg-white rounded-xl">
          <div className="flex justify-between">
            <p className="text-sm text-gray-500">Product Name</p>
            <p>Gucci</p>
          </div>
          <div className="flex justify-between">
            <p className="text-sm text-gray-500">Quantity</p>
            <p>1</p>
          </div>
          <div className="flex justify-between">
            <p className="text-sm text-gray-500">Usage</p>
            <p>A bag to hold</p>
          </div>
        </div>

        <div className="shadow w-80 px-8 py-3 m-3 bg-white rounded-xl">
          <div className="flex justify-between">
            <p className="text-sm text-gray-500">Product Name</p>
            <p>Gucci</p>
          </div>
          <div className="flex justify-between">
            <p className="text-sm text-gray-500">Quantity</p>
            <p>1</p>
          </div>
          <div className="flex justify-between">
            <p className="text-sm text-gray-500">Usage</p>
            <p>A bag to hold</p>
          </div>
        </div>

        <div className="shadow w-80 px-8 py-3 m-3 bg-white rounded-xl">
          <div className="flex justify-between">
            <p className="text-sm text-gray-500">Product Name</p>
            <p>Gucci</p>
          </div>
          <div className="flex justify-between">
            <p className="text-sm text-gray-500">Quantity</p>
            <p>1</p>
          </div>
          <div className="flex justify-between">
            <p className="text-sm text-gray-500">Usage</p>
            <p>A bag to hold</p>
          </div>
        </div>
        <div className="flex justify-center gap-4 w-full mt-10">
          <button className="p-1 bg-green-400 text-white rounded w-40">Submit</button>
          <button className="p-1 bg-red-600 text-white rounded w-40 ">Cancel</button>
        </div>

      </div>

    </div>
  )
}

export default page