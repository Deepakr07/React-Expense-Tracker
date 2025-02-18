import { ListItem } from "@mui/material";
import Tooltip from "./Tooltip";
import "./Transaction.css";
import { ArrowCircleDown, ArrowCircleUp } from "../../../Icons/icons";

export default function Transaction({ transaction }) {
  
  const sign = transaction.amount > 0 ? "+" : "-";
  const className = transaction.amount > 0 ? "income" : "expense";
  const circleClass = transaction.amount > 0 ? "green-background" : "red-background";
  const Icon = transaction.amount > 0 ? ArrowCircleUp : ArrowCircleDown;

  function truncateTransactionEntity(text) {
    return text.length > 17 ? `${text.slice(0, 17)}...` : text;
  }


  return (
    <div className="transaction-card">
      <Tooltip amount={transaction.text}>
        {" "}
        <ListItem
          sx={{
            borderRadius: "10px",
            // border: "2px solid red",
            padding: "1.7rem",
            margin: "2px",
            fontWeight: "600",
          }}
          className={className}
        >
          <div className={`transaction-container`}>
            <div className="left-transaction">
              <div className={circleClass}>
                <Icon
                  sx={{
                    fontSize: "1.2em",
                  }}
                />
              </div>
              <div className="text-container">
                <span>{truncateTransactionEntity(transaction.text)}</span>
                <span className="date">{transaction.date}</span>
              </div>
            </div>
            <div className={className}>
              {sign}${Math.abs(transaction.amount)}
            </div>
          </div>
        </ListItem>{" "}
      </Tooltip>
    </div>
  );
}
