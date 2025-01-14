import { GlobalContext } from "../../../Context/GlobalState";
import { useContext } from "react";
import { Typography } from "@mui/material";
import Tooltip from "./Tooltip"; 

export default function IncomeExpenses() {
  const { transactions } = useContext(GlobalContext);

  let income = 0;
  let expense = 0;


  transactions.forEach((transaction) => {
    if (transaction.amount > 0) income += Math.abs(transaction.amount);
    else expense += Math.abs(transaction.amount);
  });


  const truncateAmount = (amount) => {
    const amountStr = amount.toString();
    return amountStr.length > 6 ? `${amountStr.slice(0, 6)}...` : amountStr;
  };

  return (
    <div className="inc-exp-container">

      <div>
        <Typography variant="h6" sx={{fontWeight:"bold",fontSize:"1.15rem"}}>INCOME</Typography>
        <Tooltip amount={income}>
        <Typography variant = "h6" sx={{cursor:"pointer"}} className="money plus">+${truncateAmount(income)}</Typography>
        </Tooltip>
      </div>
      {/* <p className="money plus" style={{ cursor: "pointer" }}>
            +${truncateAmount(income)}
          </p> */}

      <div>
      <Typography variant="h6" sx={{fontWeight:"bold",fontSize:"1.15rem"}}>EXPENSE</Typography>
        <Tooltip amount={expense}>
        <Typography variant = "h6" sx={{cursor:"pointer"}} className="money minus">-${truncateAmount(expense)}</Typography>
        </Tooltip>
      </div>
    </div>
  );
}
