
import Transaction from "./Transaction/Transaction"
import { Typography, List } from "@mui/material"
import "./Transaction/Transaction.css"
import EmptyListMessage from "./EmptyListMessage"
import Header from "./Header"

export default function TransactionList({incomeExpenseTransaction, title,buttonOnClick,transactions}){

    return(
        <div className="transaction-list-container">
        <Typography variant="h7"
        sx={{
            fontWeight:"500",
            marginTop:"5px",
            fontSize:"1rem"
        }} className="transaction-header"><Header content={title}/>
        </Typography>

        <div className="transaction-list">
            <List className="list">
                {
                transactions?.length === 0 ?<EmptyListMessage />: 
                transactions?.map(transaction =>(<Transaction transaction = {transaction} key = {transaction.id} incomeExpenseTransaction = {incomeExpenseTransaction} buttonOnClick = {buttonOnClick} />))
                }
            </List>
        </div>
        </div>
    )
}
