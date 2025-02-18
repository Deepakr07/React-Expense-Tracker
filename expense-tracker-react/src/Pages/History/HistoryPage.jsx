import Transaction from "./Components/Transaction";
import TransactionList from "./Components/TransactionList";
import { DeleteOutline } from "../../Icons/icons";

export default function HistoryPage(){
    return(<div className="container">
        <TransactionList text = "Transaction History" Icon = {DeleteOutline}/>
    </div>)
}