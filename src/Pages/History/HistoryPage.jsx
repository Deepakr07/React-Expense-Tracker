import TransactionList from "../../Components/TransactionList";
import { useQuery } from "@tanstack/react-query";
import { getExpenses } from "@/Actions/expenseActions";

export default function HistoryPage(){
    const { data } = useQuery({queryKey:['Transaction History'],queryFn: ()=>getExpenses(1,10,null)})
    return(<div className="container">
        <TransactionList incomeExpenseTransaction = {false} title = "Transaction History" buttonOnClick = "{editTransaction}" transactions={data?.data}/>
    </div>)
}