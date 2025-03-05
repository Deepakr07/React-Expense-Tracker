import { Typography } from "@mui/material";
import Tooltip from "../../../Components/Tooltip"; 
import "./Balance.css"
import { truncateAmount } from "@/Core/Helpers/amountUtils";
export default function IncomeExpenses({category,categoryClass, InsideIcon,amount }) {

  return (
    <div className="card">
      <div className="left">
        <InsideIcon sx={{color:"green",fontSize:"1.8rem"}}className = {`money ${categoryClass}`}/>
      </div>
      <div className="right">
        <Typography variant="h7" sx={{fontSize:".8rem",color:"#58616e"}}>{category}</Typography>
        <Tooltip amount={amount}>
        <Typography variant="h7" sx={{cursor:"pointer",fontSize:"1.4rem"}} className={`money ${categoryClass}`}>${truncateAmount(amount)}</Typography>
        </Tooltip>
      </div>
    </div>
  );
}
