import { useContext, useState } from "react";
import { GlobalContext } from "../Context/GlobalState";
import Tooltip from "./Tooltip";  // Import the Tooltip component

export default function Balance() {
  const { transactions } = useContext(GlobalContext);

  let income = 0;
  let expense = 0;

  // Calculate income and expenses
  transactions.forEach((transaction) => {
    if (transaction.amount > 0) income += Math.abs(transaction.amount);
    else expense += Math.abs(transaction.amount);
  });

  const calculated = income - expense;

  // Function to truncate amounts
  const truncateAmount = (amount) => {
    const amountStr = amount.toString();
    return amountStr.length > 5 ? `${amountStr.slice(0, 5)}...` : amountStr;
  };

  return (
    <div className="balance-container">
      <h4>Your Balance</h4>
      {/* Tooltip for Balance */}
      <Tooltip amount={calculated}>
        <h1 style={{ cursor: "pointer" }}>
          ${truncateAmount(calculated)}
        </h1>
      </Tooltip>
    </div>
  );
}
