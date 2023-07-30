import React, { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("all");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filtereSale = props.items.filter((expense) => {
    if (filteredYear === "all") {
      return expense.date;
    } else {
      return expense.date.getFullYear().toString() === filteredYear;
    }
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filtereSale}/>
        <ExpensesList items={filtereSale} />
      </Card>
    </div>
  );
};

export default Expenses;
