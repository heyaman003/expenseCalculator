import { useState } from "react";
import "./App.css";
import ExpenseItems from "./componenets/Expenses/ExpenseItems";
import NewExpenses from "./componenets/newExpenses/NewExpenses";
function App() {
  const storedData = localStorage.getItem("expenses");
  const arr = storedData ? JSON.parse(storedData) : [];
  const [initalExpens, SetExpense] = useState(arr);
  const extractNewExpense = (exp) => {
    SetExpense((prev) => [exp, ...prev]);
    localStorage.setItem("expenses", JSON.stringify([exp, ...initalExpens]));
  };
  const delteteItems=(id)=>{
    const arr=initalExpens.filter((item)=>item.id!==id);
    console.log("to delete" +arr);
    SetExpense((prevArr)=> prevArr.filter((item)=>item.id!==id))
    console.log(initalExpens);
    localStorage.setItem("expenses", JSON.stringify([...initalExpens]))
}
console.log(initalExpens);
  return (
    <div className="App">
      <NewExpenses extractNewExpense={extractNewExpense} />
     
      <ExpenseItems expenses={initalExpens} deletItems={delteteItems} />
    </div>
  );
}

export default App;
