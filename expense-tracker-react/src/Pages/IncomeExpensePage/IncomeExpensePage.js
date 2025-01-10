import Header from "./Components/Header";
import IncomeExpenses from "./Components/IncomeExpenses";
import TransactionList from "./Components/TransactionList";
import "../../../src/App.css"
import Balance from "./Components/Balance"
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