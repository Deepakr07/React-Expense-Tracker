
import IncomeExpenses from "./Components/IncomeExpenses";
import TransactionList from "../../Components/TransactionList";
import Balance from "./Components/Balance"
import { ArrowCircleUp, ArrowCircleDown } from "../../Core/Icons/icons";
import { getExpenses } from "@/Actions/expenseActions";
export default function IncomeExpensePage(){
    const id = 1;
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