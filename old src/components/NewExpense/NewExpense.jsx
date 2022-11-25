import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const submitExpenseHandler=(expense)=>{
    props.onAddExpense(expense)
  }
  
  return (
    <div className="new-expense">
      <ExpenseForm onSubmitExpense={submitExpenseHandler}/>
    </div>
  );
};

export default NewExpense;
