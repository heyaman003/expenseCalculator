import React from 'react'
import './NullList.css'
const NullExpense = () => {
  return (
    <ul className='expenses-list'>
    <h1 className='expenses-list__fallback'> no items found</h1>
    </ul>
  )
}

export default NullExpense
