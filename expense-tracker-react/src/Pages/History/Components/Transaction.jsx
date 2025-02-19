import { useContext, useState } from "react";
import { GlobalContext } from "../../../Context/GlobalState";
import { ListItem } from "@mui/material";
import Tooltip from "./Tooltip";
import BasicModal from "./Modal"; // Import Modal here
import { ArrowCircleDown, ArrowCircleUp } from "../../../Icons/icons";

export default function Transaction({ transaction, DeleteIcon }) {

  const sign = transaction.amount > 0 ? "+" : "-";
  const className = transaction.amount > 0 ? "income" : "expense";
  const circleClass = transaction.amount > 0 ? "green-background" : "red-background";
  const Icon = transaction.amount > 0 ? ArrowCircleUp : ArrowCircleDown;

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true); 
  const handleClose = () => setOpen(false); 

  function truncateTransactionEntity(text) {
    return text.length > 17 ? `${text.slice(0, 17)}...` : text;
  }

  return (
    <div className="transaction-card">
      <Tooltip amount={transaction.text}>
        <ListItem
          sx={{
            borderRadius: "10px",
            padding: "1.7rem",
            margin: "2px",
            fontWeight: "500",
          }}
          className={className}
        >
          <div className={`transaction-container`}>
            <div className="left-transaction">
              <div className={circleClass}>
                <Icon sx={{ fontSize: "1.2em" }} />
              </div>
              <div className="text-container">
                <span>{truncateTransactionEntity(transaction.text)}</span>
                <span className="date">{transaction.date}</span>
              </div>
            </div>
            <div className={className}>
              <span>{sign}${Math.abs(transaction.amount)}</span>
              <div className="delete-icon">
                {/* Open modal on clicking the DeleteIcon */}
                <DeleteIcon onClick={handleOpen} sx={{ cursor: "pointer" }} />
              </div>
            </div>
          </div>
        </ListItem>
      </Tooltip>

      {/* Pass modal state to BasicModal */}
      <BasicModal open={open} handleClose={handleClose} transaction={transaction}/>
    </div>
  );
}
