import { useContext } from "react"
import { GlobalContext } from "../Context/GlobalState"
import Transaction from "./Transaction"
import { Typography, List } from "@mui/material"
import "./Transaction.css"
import EmptyListMessage from "./EmptyListMessage"
import Header from "./Header"

export default function TransactionList({status}){
    const { transactions } = useContext(GlobalContext)
    
    let sortedTransactions = [...transactions]    

    sortedTransactions.sort((a,b) =>{
        const dateA = new Date(a.date.split(" ")[0].split("-").reverse().join("-")+ "T" + a.date.split(" ")[1])
        const dateB = new Date(b.date.split(" ")[0].split("-").reverse().join("-") + "T" + b.date.split(" ")[1]);
        return dateB - dateA; 
    });

    const displayTransactions = status? sortedTransactions.slice(0,3):transactions

    const componentTitle = status?"Recent Transactions":"Transaction History"

    return(
        <div className="transaction-list-container">
        <Typography variant="h7"
        sx={{
            fontWeight:"500",
            marginTop:"5px",
            fontSize:"1rem"
        }} className="transaction-header"><Header content={componentTitle}/>
        </Typography>

        <div className="transaction-list">
            <List className="list">
                {
                transactions.length === 0 ?<EmptyListMessage />: 
                displayTransactions
                .map(transaction =>(<Transaction transaction = {transaction} key={transaction.id} status = {status}/>))
                }
            </List>
        </div>
        </div>
    )
}
