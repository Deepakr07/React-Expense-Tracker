import TransactionForm from "../../Components/TransactionForm";
import CustomizedSnackbars from "./SnackBar";
import { addExpense } from "@/Actions/expenseActions";
export default function AddTransactionPage() {
  return (
    <div className="container">
      <TransactionForm
        title="Add Transaction"
        buttonText="Add Transaction"
        buttonOnClick={addExpense}
        snackBarContent="Transaction Added Successfully ✓"
        SnackBarColor="#9333EA"
      />
      <CustomizedSnackbars />
    </div>
  );
}
