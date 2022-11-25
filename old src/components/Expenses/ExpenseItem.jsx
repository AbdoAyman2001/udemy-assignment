import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
    const [title,setTitle] = useState(props.title)    
    const clickHandler=()=>{
        setTitle("Updated!")
    }
  
    return (
    <div className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <h2 className="expense-item__title">{title}</h2>
      <div className="expense-item__price">{props.price}$</div>
      <button onClick={clickHandler}>Update Title!</button>
    </div>
  );
};

export default ExpenseItem;
