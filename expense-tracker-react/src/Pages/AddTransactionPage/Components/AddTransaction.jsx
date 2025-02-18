import { GlobalContext } from "../../../Context/GlobalState";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { handleAmountBeforeInput, handleAmountInputChange, handleTextInputChange } from "../../../Helpers/validations";
import { Typography } from "@mui/material";
import "./AddTransaction.css"

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
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    const hours = String(today.getHours()).padStart(2, '0');
    const minutes = String(today.getMinutes()).padStart(2, '0');
    const formattedDate = `${day}-${month}-${year} ${hours}:${minutes}`;
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000000),
      text,
      amount,
      date:formattedDate
    };
    console.log(text, amount);
    addTransaction(newTransaction);
    reset();
  };

  return (
    <div className="add-transaction-container">
      <Typography variant="h6"
       sx={{fontSize:"1.2rem",marginTop:"1.2rem",
       }}
      >
        Add transaction
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label htmlFor="text">Description</label>
          <input
            type="text"
            name="text"
            {...register("text")}
            placeholder="Enter description..."
            onInput={(e) => handleTextInputChange(e, setValue)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount 
            <span className="amount-span"> (negative - expense, positive - income)</span>
          </label>
          <input
            type="text"
            name="amount"
            {...register("amount")}
            placeholder="Enter amount"
            onInput={(e) => handleAmountInputChange(e, setValue)}
            onBeforeInput={(e) => handleAmountBeforeInput(e)}
          />
        </div>
        <button className={(!textValue || !amountValue)?"btn-disabled":"btn"} disabled={!textValue || !amountValue}>Add transaction</button>
      </form>
    </div>
  );
}
