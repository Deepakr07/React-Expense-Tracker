
import Transaction from "./Transaction/Transaction"
import { Typography, List } from "@mui/material"
import "./Transaction/Transaction.css"
import EmptyListMessage from "./EmptyListMessage"
import Header from "./Header"

export default function TransactionList({incomeExpenseTransaction, title,buttonOnClick,transactions}){
    console.log("From transactions ",transactions)
    // const { transactions} = useContext(GlobalContext)
    
    // let sortedTransactions = [...transactions]    

    // sortedTransactions.sort((a,b) =>{
    //     const dateA = new Date(a.date.split(" ")[0].split("-").reverse().join("-")+ "T" + a.date.split(" ")[1])
    //     const dateB = new Date(b.date.split(" ")[0].split("-").reverse().join("-") + "T" + b.date.split(" ")[1]);
    //     return dateB - dateA; 
    // });

    // const displayTransactions = incomeExpenseTransaction? sortedTransactions.slice(0,3):sortedTransactions

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
                    //check whether any transactions exist in the db. if yes map it and display else just display the empty list message
                 transactions?.length === 0 ?<EmptyListMessage />: 
                transactions?.map(transaction =>(<Transaction transaction = {transaction} key = {transaction.id} incomeExpenseTransaction = {incomeExpenseTransaction} buttonOnClick = {buttonOnClick}/>))
                }
            </List>
        </div>
        </div>
    )
}
