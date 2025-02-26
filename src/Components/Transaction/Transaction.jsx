import { useState } from "react";
import { ListItem } from "@mui/material";
import Tooltip from "../Tooltip";
import BasicModal from "../../Pages/History/Components/Modal";
import { ArrowCircleDown, ArrowCircleUp, DeleteOutline, UpdateIcon } from "../../Icons/icons";
import TransactionForm from "../TransactionForm";


export default function Transaction({ transaction, incomeExpenseTransaction,buttonOnClick }) {

  const sign = transaction.amount > 0 ? "+" : "-";
  const className = transaction.amount > 0 ? "income" : "expense";
  const circleClass = transaction.amount > 0 ? "green-background" : "red-background";
  const Icon = transaction.amount > 0 ? ArrowCircleUp : ArrowCircleDown;

  const [open, setOpen] = useState(false);
  const [updateOpen, setUpdateOpen] = useState(false)
  const handleOpen = () => setOpen(true);
  const handleUpdateOpen = ()=> setUpdateOpen(true);
  const handleUpdateClose = () => setUpdateOpen(false) 
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
              <span className="transaction-amount">{sign}${Math.abs(transaction.amount)}</span>
              {!incomeExpenseTransaction &&<div className="icons-div">
                <div className="update-icon">
                <UpdateIcon onClick={handleUpdateOpen} cursor="pointer" size="1.4rem"/>
              </div>
              <div className="delete-icon">

                <DeleteOutline onClick={handleOpen} cursor="pointer" size="1.4rem" />
              </div>
              </div>}
            </div>
          </div>
        </ListItem>
      </Tooltip>

      <BasicModal open={open} handleClose={handleClose} transaction={transaction}/>
      {updateOpen && <TransactionForm open={updateOpen} handleClose={handleUpdateClose} transaction={transaction} title = "Edit Transaction" buttonText = "Update Transaction" buttonOnClick ={buttonOnClick}/>}
    </div>
  );
}
