import Tooltip from "../../../Components/Tooltip"; 
import { Typography } from "@mui/material";
import { truncateAmount } from "../../../Core/Helpers/amountUtils";
import "./Balance.css"
export default function Balance({ amount }) {

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
      <Tooltip amount={parseFloat(amount).toFixed(2)}>
        <Typography variant= "h7"
        sx={{ 
          cursor: "pointer", 
          fontWeight:"600",
           fontSize:"2.95rem",
           color:"#FFFFFF"
          }}>${truncateAmount(parseFloat(amount).toFixed(2))}
        </Typography>
  </Tooltip>
    </div>
  );
}
