import React, { use, useState } from 'react'

function ExpenseFrom({ Onexpense }) {
  const [title, Settitle] = useState("")
  const [price, Setprice] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    const expense = {
      id: Date.now(),
      title,
      price: Number(price)
    };

    Onexpense(expense)
    Settitle("")
    Setprice("")
  }


  return (
    <div>
      <form className='flex flex-col w-110 ml-80 mt-10' onSubmit={handleSubmit}>
        <div className='border border-s-sky-300 flex flex-column'>
          <label htmlFor="">Title  </label>
          <input type="text" required placeholder='enter title' value={title} onChange={(e) => Settitle(e.target.value)} />

          <label htmlFor="">Price :  </label>
          <input type="text" required placeholder='enter price' value={price} onChange={(e) => Setprice(e.target.value)} />

          <br />
          <button className='border-red-500 color-white font-bold border p-7 ml-3 bg-blue-500 text-center'>Add button</button>
        </div>
      </form>
    </div>
  )
}

export default ExpenseFrom

// onchange() and onclick()