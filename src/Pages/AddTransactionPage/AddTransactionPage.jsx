import TransactionForm from "../../Components/TransactionForm";
import SnackBar from "@/Components/SnackBar";
import { useState } from "react";
import { addExpense } from "@/Actions/expenseActions";
export default function AddTransactionPage() {
const [snackBarOpen, setSnackBarOpen] =  useState({open:false,type:"Add"})
const handleSnackBarClose = () => {
    setSnackBarOpen(false);
  };
  return (
    <div className="container">
      <TransactionForm
        title="Add Transaction"
        buttonText="Add Transaction"
        buttonOnClick={addExpense}
        setSnackBarOpen = {setSnackBarOpen}
      />
        <SnackBar 
        display={snackBarOpen.open} 
        snackBarColor='#9333EA'
        snackBarContent="Transaction Added Successfully ✓" 
        handleClose={handleSnackBarClose}
        />
    </div>
  )
}
