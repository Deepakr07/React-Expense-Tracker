import { useContext} from "react";
import { GlobalContext } from "../../../Context/GlobalState";
import Tooltip from "./Tooltip";  // Import the Tooltip component
import { Typography } from "@mui/material";
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
    return amountStr.length > 6 ? `${amountStr.slice(0, 6)}...` : amountStr;
  };

  return (
    <div className="balance-container">
      <Typography variant="h5" 
        sx={{
          fontSize:"1.7rem"
          }}>Your Balance
      </Typography>
      <Tooltip amount={calculated}>
        <Typography variant= "h4"
        sx={{ 
          cursor: "pointer", 
          fontWeight:"500"
          }}>${truncateAmount(calculated)}
        </Typography>
  </Tooltip>
    </div>
  );
}
