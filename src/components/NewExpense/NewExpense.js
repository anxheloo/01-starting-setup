import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [showContent, setShowContent] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setShowContent(false);
  };

  const handleButtonClick = () => {
    setShowContent(true);
  };

  const handleButtonClick2 = () => {
    setShowContent(false);
  };

  let myVar = <button onClick={handleButtonClick}>Add New Expense</button>;

  if (showContent) {
    myVar = (
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onCancel={handleButtonClick2}
      ></ExpenseForm>
    );
  }

  return <div className="new-expense">{myVar}</div>;
};

export default NewExpense;
