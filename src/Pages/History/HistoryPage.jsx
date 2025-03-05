import TransactionList from "../../Components/TransactionList";
import { useQuery } from "@tanstack/react-query";
import { getExpenses } from "@/Actions/expenseActions";

export default function HistoryPage(){
    const { data } = useQuery({queryKey:['Transaction History'],queryFn: ()=>getExpenses(1,10,null)})
    if(data) console.log("From history page",data)

    return(<div className="container">
        <TransactionList incomeExpenseTransaction = {false} title = "Transaction History" buttonOnClick = "{editTransaction}" transactions={data?.data}/>
    </div>)
}