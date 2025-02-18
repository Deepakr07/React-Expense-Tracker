
import IncomeExpenses from "./Components/IncomeExpenses";
import TransactionList from "./Components/TransactionList";
import "../../../src/App.css"
import Balance from "./Components/Balance"
import { ArrowCircleUp, ArrowCircleDown } from "../../Icons/icons";
export default function IncomeExpensePage(){
    return(
        <div className="container">
            <Balance />
            <div className="inc-exp-container">
                <IncomeExpenses
                category= "Income" 
                categoryClass = "plus" 
                InsideIcon={ArrowCircleUp}
                symbol="+"/>
                <IncomeExpenses
                category = "Expenses" 
                categoryClass = "minus"
                InsideIcon={ArrowCircleDown}
                symbol = "-"/>
            </div>
            <TransactionList text = "Recent Transactions"/>
        </div>
    )
}