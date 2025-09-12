import React from 'react'

const Manage = () => {
  //finace manage form and list another side
  return (
    <div className='flex gap-3 bg-gray-200 p-6 rounded-lg'>

      <div className='bg-white p-6 rounded-lg shadow-md flex-1  max-w-md'>
          <form className='flex flex-col gap-4'>
              <input type="text" placeholder="Enter title" className='p-2 border border-gray-300 rounded' />
              <input type="number" placeholder="Enter amount" className='p-2 border border-gray-300 rounded' />
              <select className='p-2 border border-gray-300 rounded'>
                <option>Select category</option>
                <option value="food">Food</option>
                <option value="transport">Transport</option>
                <option value="utilities">Utilities</option> 
                <option value="transport">Transport</option>
                <option value="utilities">Utilities</option>
              </select>
              <input type="date" className='p-2 border border-gray-300 rounded'  />

              <textarea placeholder="Enter description" className='p-2 border border-gray-300 rounded' />
              <button type="submit" className='bg-blue-500 text-white p-2 rounded'>Submit</button>
          </form>
      </div>

      <div className='bg-white p-6 rounded-lg shadow-md flex-1'>

      </div>

    </div>
  )
}

export default Manage