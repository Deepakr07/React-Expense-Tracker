import { useContext } from "react"
import { GlobalContext } from "../../../Context/GlobalState"


export default function Transaction({ transaction}){
    const {deleteTransaction} = useContext(GlobalContext) 
    const sign = transaction.amount>0 ? '+':'-'
    const className = transaction.amount > 0 ? "plus" : "minus"
    return(
        <li className = {className}>
        {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button className="delete-btn" onClick={()=> deleteTransaction(transaction.id)}>x</button>
        </li> 
    )
}