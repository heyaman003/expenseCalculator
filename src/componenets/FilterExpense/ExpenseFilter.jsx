import React, { useState } from 'react'
import './ExpenseFilter.css'
const ExpenseFilter = ({onSelect}) => {
       const [select,setSelect]=useState('');
       const filterByYear=(e)=>{
              setSelect(e.target.value);
              onSelect(e.target.value);
       }
       let val=<div><select value={select} onChange={filterByYear}>
       <option disabled value=''>filter</option>
       <option value='2023'>2023</option>
       <option value='2022'>2022</option>
       <option value='2021'>2021</option>
       <option value='2020'>2020</option>
     </select>
     </div>
  return (
       <div className='expenses-filter'>
       <div className='expenses-filter__control'>
         <label>Filter by year</label>
         <p>the selected year is {select}</p>
         {val}
       </div>
     </div>
  )
}

export default ExpenseFilter
