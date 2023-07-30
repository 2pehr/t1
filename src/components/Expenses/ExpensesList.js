import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";
const ExpensesList = (props) => {
  

  if (props.items.length === 0){
    return <h2 className="expenses-list__fallback">!خبری نیست</h2>
  };
  
  return <ul className="expenses-list">
    {props.items.map((expense) => (
      // key (should be pointed to a Uniqe id or parameter) -----> to identify each item
      //and avoid warnings and bugs
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))}
  </ul>
};

export default ExpensesList;
