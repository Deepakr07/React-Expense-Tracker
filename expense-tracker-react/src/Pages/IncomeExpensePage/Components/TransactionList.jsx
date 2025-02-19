import { useContext } from "react"
import { GlobalContext } from "../../../Context/GlobalState"
import Transaction from "./Transaction"
import { Typography, List } from "@mui/material"
import "./Transaction.css"
import Header from "../../../Components/Header"
import EmptyListMessage from "../../../Components/EmptyListMessage"
export default function TransactionList({text}){
    const { transactions } = useContext(GlobalContext)
    console.log(transactions)
    return(
        <div className="transaction-list-container">
   
            <Header content = "Recent Transactions"/>
      

        <div className="transaction-list">
            <List className="list">
                {transactions.length === 0?<EmptyListMessage />: transactions.map(transaction =>(
                        <Transaction transaction = {transaction} key={transaction.id}/>
                    ))}
            </List>
        </div>
        </div>
    )
}
