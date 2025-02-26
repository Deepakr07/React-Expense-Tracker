import { useContext } from "react";
import TransactionList from "../../Components/TransactionList";
import { GlobalContext } from "../../Context/GlobalState";

export default function HistoryPage(){
    const { editTransaction } = useContext(GlobalContext)
    return(<div className="container">
        <TransactionList incomeExpenseTransaction = {false} title = "Transaction History" buttonOnClick = {editTransaction}/>
    </div>)
}