import React from "react";
import "./NewExpenses.css";
import NewExpenseForm from "./NewExpenseForm";
import { v4 as uuidv4 } from "uuid";
const NewExpenses = ({ extractNewExpense }) => {
  const onSaveHandler = (ExpenseList) => {
    const newExpense = { ...ExpenseList, id: uuidv4() };
    console.log(newExpense.date);
    extractNewExpense(newExpense);
  };
  return (
    <div className="new-expense">
      <NewExpenseForm onSaveHandler={onSaveHandler} />
    </div>
  );
};

export default NewExpenses;
