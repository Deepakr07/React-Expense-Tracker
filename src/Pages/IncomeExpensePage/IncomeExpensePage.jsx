
import IncomeExpenses from "./Components/IncomeExpenses";
import TransactionList from "../../Components/TransactionList";
import Balance from "./Components/Balance"
import { ArrowCircleUp, ArrowCircleDown } from "../../Core/Icons/icons";
import { getIncomeExpense } from "@/Actions/expenseActions";
import { useQuery } from "@tanstack/react-query";


export default function IncomeExpensePage(){
     const { data } = useQuery({
        queryKey:['IncomeExpenses'],
        queryFn:getIncomeExpense
     })
     if (data){ 
        console.log(data.computationResult)
     }
    
    return(
        <div className="container">
                <Balance amount={data?data.computationResult.balance:"0.00"}/>
             <div className="inc-exp-container">
                <IncomeExpenses
                category= "Income"
                 amount = {data?data.computationResult.income:"0.00"} 
                categoryClass = "plus" 
                InsideIcon={ArrowCircleUp}
                symbol="+"/>
                <IncomeExpenses
                category = "Expenses"
                 amount = {data?data.computationResult.expense:"0.00"}  
                categoryClass = "minus"
                InsideIcon={ArrowCircleDown}
                symbol = "-"/>
            </div>
            <TransactionList incomeExpenseTransaction = {true} title = "Recent Transactions" />
        </div>
    )
} 