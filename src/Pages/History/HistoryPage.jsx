import TransactionList from "../../Components/TransactionList";


export default function HistoryPage(){
    //pass the update endpoint function in the button onClick
    return(<div className="container">
        <TransactionList incomeExpenseTransaction = {false} title = "Transaction History" buttonOnClick = "{editTransaction}"/>
    </div>)
}