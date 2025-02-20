import TransactionList from "../../Components/TransactionList";

export default function HistoryPage(){
    return(<div className="container">
        <TransactionList status={false}/>
    </div>)
}