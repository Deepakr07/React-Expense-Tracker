import TransactionForm from "../../Components/TransactionForm";

import { addExpense } from "@/Actions/expenseActions";
export default function AddTransactionPage() {
  return (
    <div className="container">
      <TransactionForm
        title="Add Transaction"
        buttonText="Add Transaction"
        buttonOnClick={addExpense}
        snackBarContent="Transaction Added Successfully ✓"
        snackBarColor="#9333EA"
      />

    </div>
  );
}
