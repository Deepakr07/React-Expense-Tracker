import { useContext } from "react";
import { GlobalContext } from "../../../Context/GlobalState";
import { ListItem } from "@mui/material";
import Tooltip from "./Tooltip";
import "./Transaction.css"
import { ArrowCircleDown } from "../../../Icons/icons";

export default function Transaction({ transaction }) {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transaction.amount > 0 ? "+" : "-";
  // const className = transaction.amount > 0 ? "plus" : "minus";

  function truncateTransactionEntity(text) {
    return text.length > 17 ? `${text.slice(0, 17)}...` : text;
  }
  return (
    <div className="transaction-card">
      <Tooltip amount={transaction.text}>
        {" "}
          <ListItem sx={{borderRadius:"10px",border:"2px solid red",padding:"2rem",margin:"2px"}}>
        <div className="transaction-container">
          <div className="left-transaction">
            <div className="circle-container">
              <ArrowCircleDown />
            </div>
            {truncateTransactionEntity(transaction.text)}
          </div>
              <span>
                {sign}${Math.abs(transaction.amount)}
              </span>
        </div>
            <button
              className="delete-btn"
              onClick={() => deleteTransaction(transaction.id)}
            >x
            </button>
          </ListItem>
        {" "}
      </Tooltip>
    </div>
  );
}
