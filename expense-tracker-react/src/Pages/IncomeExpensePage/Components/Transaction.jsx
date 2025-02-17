import { useContext } from "react";
import { GlobalContext } from "../../../Context/GlobalState";
import { ListItem } from "@mui/material";
import Tooltip from "./Tooltip";

export default function Transaction({ transaction }) {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transaction.amount > 0 ? "+" : "-";
  const className = transaction.amount > 0 ? "plus" : "minus";

  function truncateTransactionEntity(text) {
    return text.length > 17 ? `${text.slice(0, 17)}...` : text;
  }
  return (
    <Tooltip amount={transaction.text}>
      {" "}
      <ListItem className={className}>
        {truncateTransactionEntity(transaction.text)}{" "}
        <span>
          {sign}${Math.abs(transaction.amount)}
        </span>
        <button
          className="delete-btn"
          onClick={() => deleteTransaction(transaction.id)}
        >
          x
        </button>
      </ListItem>{" "}
    </Tooltip>
  );
}
