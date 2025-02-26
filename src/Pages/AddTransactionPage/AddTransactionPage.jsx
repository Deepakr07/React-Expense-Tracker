import TransactionForm from "../../Components/TransactionForm"
import { useContext } from "react"
import { GlobalContext } from "../../Context/GlobalState"

export default function AddTransactionPage(){
    const {addTransaction} = useContext(GlobalContext)
    return(
        <div className="container">
            <TransactionForm title = "Add Transaction" buttonText = "Add Transaction" buttonOnClick={addTransaction}/>
        </div>
    )
}