import { GlobalContext } from "../../../Context/GlobalState";
import { useContext } from "react";
import { Icon, Typography } from "@mui/material";
import Tooltip from "./Tooltip"; 
import { ArrowCircleDown, ArrowCircleUp } from "../../../Icons/icons";
export default function IncomeExpenses({category,categoryClass, InsideIcon,symbol}) {
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
        {/* {ArrowCircleUp} */}
        <InsideIcon sx={{color:"green",fontSize:"1.8rem"}}className = {`money ${categoryClass}`}/>
      </div>
      <div className="right">
        <Typography variant="h6" sx={{fontSize:"1.15rem",color:"#4E5563"}}>{category}</Typography>
        <Tooltip amount={income}>
        <Typography variant = "h6" sx={{cursor:"pointer"}} className={`money ${categoryClass}`}>{symbol}${truncateAmount(income)}</Typography>
        </Tooltip>
      </div>
    </div>
    /* <div>
    <Typography variant="h6" sx={{fontWeight:"bold",fontSize:"1.15rem"}}>EXPENSE</Typography>
      <Tooltip amount={expense}>
      <Typography variant = "h6" sx={{cursor:"pointer"}} className="money minus">-${truncateAmount(expense)}</Typography>
      </Tooltip>
    </div> */
  );
}
