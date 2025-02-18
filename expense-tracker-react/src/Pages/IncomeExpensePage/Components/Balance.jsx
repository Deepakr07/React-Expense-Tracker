import { useContext} from "react";
import { GlobalContext } from "../../../Context/GlobalState";
import Tooltip from "./Tooltip"; 
import { Typography } from "@mui/material";
import "./Balance.css"
export default function Balance() {
  const { transactions } = useContext(GlobalContext);

  let income = 0;
  let expense = 0;


  transactions.forEach((transaction) => {
    if (transaction.amount > 0) income += Math.abs(transaction.amount);
    else expense += Math.abs(transaction.amount);
  });

  const calculated = parseFloat(income - expense).toFixed(2)


  const truncateAmount = (amount) => {
    const amountStr = amount.toString();
    return amountStr.length > 6 ? `${amountStr.slice(0, 6)}...` : amountStr;
  };

  return (
    <div className="balance-container">
      <Typography variant="h7" 
        sx={{
          fontSize:"0.9rem",
          fontWeight:"900",
          color:"#dfccfc",
          marginBottom:"4px"
          }}>Current Balance
      </Typography>
      <Tooltip amount={calculated}>
        <Typography variant= "h5"
        sx={{ 
          cursor: "pointer", 
          fontWeight:"600",
           fontSize:"2.5rem",
           color:"#FFFFFF"
          }}>${(truncateAmount(calculated))}
        </Typography>
  </Tooltip>
    </div>
  );
}
