
import IncomeExpenses from "./Components/IncomeExpenses";
import TransactionList from "../../Components/TransactionList";
import Balance from "./Components/Balance"
import { useContext } from "react";
import { ArrowCircleUp, ArrowCircleDown } from "../../Icons/icons";
import { GlobalContext } from "../../Context/GlobalState";
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
            <TransactionList incomeExpenseTransaction = {true} title = "Recent Transactions" />
        </div>
    )
}