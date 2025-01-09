import { useContext } from "react"
import { GlobalContext } from "../Context/GlobalState"
export default function TransactionList(){
    const { transactions } = useContext(GlobalContext)

    const transactionData = transactions.map((transaction,key)=>{
        return <li className="minus" key={key}>
        {transaction.text} <span>-$400</span><button className="delete-btn">x</button>
            </li> 
    })
    return(
        <>
        <h3>History</h3>
            <ul className="list">
                {transactionData}
            </ul>
        </>
    )
}