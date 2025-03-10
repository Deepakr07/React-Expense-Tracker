import TransactionList from "../../Components/TransactionList"
import { useQuery } from "@tanstack/react-query"
import { getExpenses } from "@/Actions/expenseActions"
import { updateExpense } from "@/Actions/expenseActions"
import { useState } from "react"
import SnackBar from "@/Components/SnackBar"
export default function HistoryPage() {
  const [snackBarOpen, setSnackBarOpen] = useState(false);
  const { data } = useQuery({
    queryKey: ['Transaction History'],
    queryFn: () => getExpenses(1, 10, null),

  });

    function handleSnackBarClose(){
        setSnackBarOpen(false)
    }

  return (
    <div className="container">
      <TransactionList 
        incomeExpenseTransaction={false} 
        title="Transaction History" 
        buttonOnClick={updateExpense} 
        transactions={data?.data}
        setSnackBarOpen = {setSnackBarOpen} 
      />
        <SnackBar 
        display={snackBarOpen} 
        snackBarColor='#EF4848'
        snackBarContent="Transaction Deleted Successfully ✓" 
        handleClose={handleSnackBarClose}
        />
    </div>
  );
}