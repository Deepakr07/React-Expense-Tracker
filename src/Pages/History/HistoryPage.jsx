import TransactionList from "../../Components/TransactionList"
import { useQuery } from "@tanstack/react-query"
import { getExpenses } from "@/Actions/expenseActions"
import { updateExpense } from "@/Actions/expenseActions"
import { useState } from "react"
import SnackBar from "@/Components/SnackBar"
export default function HistoryPage() {
  const [snackBarOpen, setSnackBarOpen] = useState({open:false,type:"Delete"});
  const { data } = useQuery({
    queryKey: ['Transaction History'],
    queryFn: () => getExpenses(1, 10, null),

  });

    function handleSnackBarClose(){
        setSnackBarOpen(false)
    }
    const snackBarContent = snackBarOpen.type === "Delete"?"Transaction Deleted Successfully ✓":"Transaction Updated Successfully ✓"
    const snackBarColor = snackBarOpen.type === "Delete"? "#EF4848":"#9333EA"

  return (
    <div className="container">
      <TransactionList 
        incomeExpenseTransaction={false}  
        buttonOnClick={updateExpense} 
        transactions={data?.data}
        setSnackBarOpen = {setSnackBarOpen}
      />
        <SnackBar 
        display={snackBarOpen.open} 
        snackBarColor={snackBarColor}
        snackBarContent={snackBarContent} 
        handleClose={handleSnackBarClose}
        />
    </div>
  );
}