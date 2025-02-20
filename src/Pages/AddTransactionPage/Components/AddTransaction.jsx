import { GlobalContext } from "../../../Context/GlobalState";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { handleAmountBeforeInput, handleAmountInputChange, handleTextInputChange } from "../../../Helpers/validations";
import { Typography } from "@mui/material";
import "./AddTransaction.css"
import Header from "../../../Components/Header";
import { getCurrentDateAndTime } from "../../../Helpers/validations";



export default function AddTransaction() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
  } = useForm();

  const textValue = watch("text");
  const amountValue = watch("amount");
  const { addTransaction } = useContext(GlobalContext);


  const onSubmit = ({ text, amount }) => {
    
    const formattedDate = getCurrentDateAndTime()

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000000),
      text,
      amount,
      date:formattedDate
    };

    addTransaction(newTransaction);
    reset();
  };

  return (
    <div className="add-transaction-container">
        <Header content = "Add Transaction"/>
 
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label htmlFor="text"><Typography variant="h7" sx={{fontSize:".83rem",fontWeight:"500"}}>Description</Typography></label>
          <input
            type="text"
            name="text"
            {...register("text")}
            placeholder="Enter desciption"
            onInput={(e) => handleTextInputChange(e, setValue)}
          />
        </div>
        <div className="form-control">
        <label htmlFor="text"><Typography variant="h7" sx={{fontSize:".83rem",fontWeight:"500"}}>Amount</Typography></label>
            <span className="amount-span"> (negative for expense, positive for income)</span>
          <input
            type="text"
            name="amount"
            {...register("amount")}
            placeholder="Enter amount"
            onInput={(e) => handleAmountInputChange(e, setValue)}
            onBeforeInput={(e) => handleAmountBeforeInput(e)}
          />
        </div>
        <div className="button-container"><button className={(!textValue || !amountValue)?"btn-disabled":"btn"} disabled={!textValue || !amountValue}>Add Transaction</button></div>
      </form>
    </div>
  );
}
