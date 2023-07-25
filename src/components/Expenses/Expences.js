import Card from "../UI/Card";
import ExpenceItem from "./ExpenceItem";
import ExpensesFilter from "./ExpenseFilter";
import "./Expenses.css";
import { useState } from "react";
const Expenses = ({ items }) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filteredChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filteredChangeHandler}
        />
        {items.map((expense) => (
          <ExpenceItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};
export default Expenses;
