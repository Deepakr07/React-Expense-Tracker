import { useContext } from "react"
import { GlobalContext } from "../../../Context/GlobalState"
import Transaction from "./Transaction"
import { Typography, List } from "@mui/material"
import "./Transaction.css"
export default function TransactionList(){
    const { transactions } = useContext(GlobalContext)
    console.log(transactions)
    return(
        <>
        <Typography 
        sx={{
            fontWeight:"600",
            marginTop:"5px",
            borderBottom:"1px solid #bbb",
            fontSize:"1.4rem"
        }}>History
        </Typography>
        <List className="list">
            {transactions.length === 0 ?"No recent transactions": transactions.map(transaction =>(
                    <Transaction transaction = {transaction} key={transaction.id}/>
                ))}
        </List>
        </>
    )
}
