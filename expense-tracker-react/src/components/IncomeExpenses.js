import { GlobalContext } from "../Context/GlobalState";
import { useContext } from "react";
import Tooltip from "./Tooltip";  // Import the Tooltip component

export default function IncomeExpenses() {
  const { transactions } = useContext(GlobalContext);

  let income = 0;
  let expense = 0;

  // Calculate income and expenses
  transactions.forEach((transaction) => {
    if (transaction.amount > 0) income += Math.abs(transaction.amount);
    else expense += Math.abs(transaction.amount);
  });

  // Function to truncate amounts
  const truncateAmount = (amount) => {
    const amountStr = amount.toString();
    return amountStr.length > 5 ? `${amountStr.slice(0, 5)}...` : amountStr;
  };

  return (
    <div className="inc-exp-container">
      {/* Income Section */}
      <div>
        <h4>Income</h4>
        <Tooltip amount={income}>
          <p className="money plus" style={{ cursor: "pointer" }}>
            +${truncateAmount(income)}
          </p>
        </Tooltip>
      </div>

      {/* Expense Section */}
      <div>
        <h4>Expense</h4>
        <Tooltip amount={expense}>
          <p className="money minus" style={{ cursor: "pointer" }}>
            -${truncateAmount(expense)}
          </p>
        </Tooltip>
      </div>
    </div>
  );
}
