import { useContext} from "react";
import { GlobalContext } from "../../../Context/GlobalState";
import Tooltip from "../../../Components/Tooltip"; 
import { Typography } from "@mui/material";
import { truncateAmount } from "../../../Core/Helpers/validations";
// import "./Balance.css"
export default function Balance() {
  const { transactions } = useContext(GlobalContext);

  let income = 0;
  let expense = 0;


  transactions.forEach((transaction) => {
    if (transaction.amount > 0) income += Math.abs(transaction.amount);
    else expense += Math.abs(transaction.amount);
  });

  const calculated = parseFloat(income - expense).toFixed(2)


  return (
    <div className="balance-container">
      <Typography variant="h7" 
        sx={{
          fontSize:".9rem",
          fontWeight:"500",
          color:"#dfccfc",
          marginBottom:"4px"
          }}>Current Balance
      </Typography>
      <Tooltip amount={calculated}>
        <Typography variant= "h7"
        sx={{ 
          cursor: "pointer", 
          fontWeight:"600",
           fontSize:"2.95rem",
           color:"#FFFFFF"
          }}>${(truncateAmount(calculated))}
        </Typography>
  </Tooltip>
    </div>
  );
}
