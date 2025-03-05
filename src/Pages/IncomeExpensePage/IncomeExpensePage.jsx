
import IncomeExpenses from "./Components/IncomeExpenses";
import TransactionList from "../../Components/TransactionList";
import Balance from "./Components/Balance"
import { ArrowCircleUp, ArrowCircleDown } from "../../Core/Icons/icons";
import { getExpenses, getIncomeExpense } from "@/Actions/expenseActions";
import { useQuery } from "@tanstack/react-query";


export default function IncomeExpensePage(){
    const fetchData = async () => {
        const [incomeExpense, transactions] = await Promise.all([getIncomeExpense(), getExpenses()])
        return { incomeExpense, transactions }
      };
     const { data } = useQuery({
        queryKey:['IncomeExpenses'],
        queryFn:fetchData
     })
//   console.log(data?data.transactions:"Data not retrieved")
console.log(data)
    
    return(
        <div className="container">
                <Balance amount={data?data.incomeExpense.computationResult.balance:"0.00"}/>
             <div className="inc-exp-container">
                <IncomeExpenses
                category= "Income"
                 amount = {data?data.incomeExpense.computationResult.income:"0.00"} 
                categoryClass = "plus" 
                InsideIcon={ArrowCircleUp}
                symbol="+"/>
                <IncomeExpenses
                category = "Expenses"
                 amount = {data?data.incomeExpense.computationResult.expense:"0.00"}  
                categoryClass = "minus"
                InsideIcon={ArrowCircleDown}
                symbol = "-"/>
            </div>
            <TransactionList incomeExpenseTransaction = {true} title = "Recent Transactions" transactions = {data?data.transactions.data:[]} />
        </div>
    )
} 