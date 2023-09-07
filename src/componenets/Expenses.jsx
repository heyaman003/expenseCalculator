import React from 'react'
import './expenses.css'
import DateComp from './Date/DateComp'
import Card from './Card/Card'
import img from '../assest/trash-bin.png'
const Expenses = ({date,title,amount,deletItems,id}) => {
      
  return (
    <Card className='expense-item'>
      <DateComp date={date}/>
      <div className='expense-item__description'>
       <h2>{title}</h2>
       <div className='expense-item__price'>₹ {amount}</div>
       <div  className="btn"><img onClick={()=>deletItems(id)} src={img} alt=""/></div>
      </div>
    </Card>
  )
}

export default Expenses
