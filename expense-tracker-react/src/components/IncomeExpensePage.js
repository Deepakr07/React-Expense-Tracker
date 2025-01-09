import Header from "./Header";
import IncomeExpenses from "./IncomeExpenses";
import TransactionList from "./TransactionList";
import "../../src/App.css"
import Balance from "./Balance";
export default function IncomeExpensePage(){
    return(
        <div className="container">
            <Header />
            <IncomeExpenses />
            <Balance />
            <TransactionList />
        </div>
    )
}