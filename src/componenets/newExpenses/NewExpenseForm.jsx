import React, { useState } from "react";
import "./NewExpenseForm.css";
const NewExpenseForm = ({ onSaveHandler }) => {
  /*  const [title,setTitle]=useState('');
       const [amount,setAmount]=useState(null);
       const [date,setDate]=useState("2022-01-01"); */
  const [input, setInput] = useState({
    title: "",
    amount: null,
    date: new Date("2000-04-11"),
  });

  const toggleFormState=()=>{
setFormState(1);
  }

  let expenseButton = (
    <div className="new-expense__actions2">
      <button  onClick={toggleFormState}>
        want to add new expense?
      </button>
    </div>
  );
  const [forrmState,setFormState]=useState(null);
  /*  const titleHandler=(e)=>{
              //setTitle(e.target.value)
             // setInput({...input,title:e.target.value})
              setInput((prevState)=>{
                 return {...prevState,title:e.target.value}
              })
              console.log(e.target.value);
       }
       const amountHandler=(e)=>{
              setInput((prevState)=>{
                     return {...prevState,amount:e.target.value}
                  })
              console.log(e.target.value);
       }
       const dateHandler=(e)=>{
              //setInput({...input,date:e.target.value})
              console.log(e.target.value);
              setInput((prevState)=>{
                     return {...prevState,date:e.target.value}
                  })
         console.log({...input})
       } */
  const mergeHandler = (identifiy, value) => {
    if (identifiy === "title") {
      setInput((prevState) => {
        return { ...prevState, title: value };
      });
    }
    if (identifiy === "amount") {
      setInput((prevState) => {
        return { ...prevState, amount: value };
      });
    }
    if (identifiy === "date") {
      setInput((prevState) => {
        return { ...prevState, date: value };
      });
    }
  };
  const addExpense = (e) => {
    e.preventDefault();
    if (input.title && input.amount && input.date) {
      onSaveHandler(input);
      setInput({ title: "", amount: "", date: new Date("2000-04-11") });
    } else {
      window.alert("please input all feild");
    }
  };
  const toggleFormVisiblity=()=>{
    setFormState(null);
  }

  return (forrmState)? (

    <form>
     
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="Title">Title</label>
          <input
            type="text"
            value={input.title}
            id="Title"
            onChange={(e) => mergeHandler("title", e.target.value)}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">amount</label>
          <input
            type="number"
            value={input.amount}
            id="amount"
            min="0.01"
            step="0.01"
            onChange={(e) => mergeHandler("amount", e.target.value)}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">date</label>

          <input
            type="date"
            value={input.date}
            id="date"
            min="2020-01-01"
            max="2025-01-01"
            onChange={(e) => mergeHandler("date", e.target.value)}
          />
        </div>
      </div>
      <div style={{display:"flex",justifyContent:"flex-end"} }>
      <div className="new-expense__actions">
        <button  onClick={toggleFormVisiblity}>
         cancle
        </button>
      </div>
      <div className="new-expense__actions">
        <button type="submit" onClick={addExpense}>
          add expense
        </button>
      </div>
      </div>
     

    </form>

  ):<div>{expenseButton}</div>
};

export default NewExpenseForm;
