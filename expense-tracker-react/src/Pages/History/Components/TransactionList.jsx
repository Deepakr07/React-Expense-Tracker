import { useContext } from "react"
import { GlobalContext } from "../../../Context/GlobalState"
import Transaction from "./Transaction"
import { Typography, List } from "@mui/material"
import "./Transaction.css"
export default function TransactionList({text,Icon}){
    const { transactions } = useContext(GlobalContext)
    console.log(transactions)
    return(
        <div className="transaction-list-container">
        <Typography 
        sx={{
            fontWeight:"550",
            marginTop:"5px",
            fontSize:"1rem"
        }} className="transaction-header">{text}
        </Typography>

        <div className="transaction-list">
            <List className="list">
                {transactions.length === 0 ?"No recent transactions": transactions.map(transaction =>(
                        <Transaction transaction = {transaction} key={transaction.id} DeleteIcon = {Icon}/>
                    ))}
            </List>
        </div>
        </div>
    )
}
