import React, {  useState } from 'react'
import Expenses from '../Expenses'
import './Styleit.css'
import ExpenseFilter from '../FilterExpense/ExpenseFilter'
import NullExpense from './NullExpense'
import ChartOfExpenses from './ChartOfExpenses';

const ExpenseItems = ({expenses,deletItems}) => {
  const [filterYear,setFilterYear]=useState("2023");
  const onSelect=(value)=>{
    setFilterYear(value);
    console.log("the value is "+value);
  }
  const filterArray=expenses.filter((expense)=>{
    const expenseYear = new Date(expense.date).getFullYear().toString();
    return expenseYear===filterYear
  })

  return (
    <div className='expenses'>
  <ChartOfExpenses filterExpense={filterArray}/>
      <ExpenseFilter onSelect={onSelect}/>
      {(filterArray.length>0)?filterArray.sort((a,b)=>{
        const expenseday1 = new Date(a.date).getDate();
        const expenseday2 = new Date(b.date).getDate();
        return expenseday2-expenseday1;
      }).map((expense) => (
      <Expenses
        key={expense.id}
        title={expense.title}
        date={expense.date}
        amount={expense.amount}
        id={expense.id}
        deletItems={deletItems}
      />
    )) :<NullExpense/>}
    </div>
  )
}

export default ExpenseItems
