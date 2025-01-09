import { useContext } from "react"
import { GlobalContext } from "../Context/GlobalState"
import Transaction from "./Transaction"
export default function TransactionList(){
    const { transactions } = useContext(GlobalContext)
    console.log(transactions)
    return(
        <>
        <h3>History</h3>
            <ul className="list">
                {transactions.map(transaction =>(
                    <Transaction transaction={transaction} key={transaction.id}/>
                ))}
            </ul>
        </>
    )
}