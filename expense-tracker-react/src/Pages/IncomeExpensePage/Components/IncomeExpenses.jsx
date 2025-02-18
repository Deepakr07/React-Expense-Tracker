import { GlobalContext } from "../../../Context/GlobalState";
import { useContext } from "react";
import { Typography } from "@mui/material";
import Tooltip from "./Tooltip"; 

export default function IncomeExpenses({category,categoryClass, InsideIcon}) {
  
  const { transactions } = useContext(GlobalContext);
  let income = 0;
  let expense = 0;

  transactions.forEach((transaction) => {
    if (transaction.amount > 0) income += Math.abs(transaction.amount);
    else expense += Math.abs(transaction.amount);
  });

  const truncateAmount = (amount) => {
    const amountStr = amount.toString();
    return amountStr.length > 6 ? `${amountStr.slice(0, 6)}...` : parseFloat(amountStr).toFixed(2);
  };

  return (
    <div className="card">
      <div className="left">
        <InsideIcon sx={{color:"green",fontSize:"1.8rem"}}className = {`money ${categoryClass}`}/>
      </div>
      <div className="right">
        <Typography variant="h6" sx={{fontSize:".8rem",color:"#58616e"}}>{category}</Typography>
        <Tooltip amount={income}>
        <Typography  sx={{cursor:"pointer",fontSize:"1.4rem"}} className={`money ${categoryClass}`}>${category==="Income"? truncateAmount(income):truncateAmount(expense)}</Typography>
        </Tooltip>
      </div>
    </div>

  );
}
