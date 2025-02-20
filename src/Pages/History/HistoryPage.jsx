import TransactionList from "../../Components/TransactionList";

export default function HistoryPage(){
    return(<div className="container">
        <TransactionList incomeExpenseTransaction = {false} title = "Transaction History"/>
    </div>)
}