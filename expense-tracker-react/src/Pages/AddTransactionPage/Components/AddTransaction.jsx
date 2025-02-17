import { GlobalContext } from "../../../Context/GlobalState";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { handleAmountBeforeInput, handleAmountInputChange, handleTextInputChange } from "../../../Helpers/validations";
import { Typography } from "@mui/material";
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
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000000),
      text,
      amount,
    };
    console.log(text, amount);
    addTransaction(newTransaction);
    reset();
  };

  return (
    <>
      {/* <h3>Add new transaction</h3> */}
      <Typography variant="h6"
       sx={{fontSize:"1.3rem",fontWeight:"600",marginTop:"1.2rem",
        borderBottom:"1px solid #bbb",
       }}
      >
        Add new transaction
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            name="text"
            {...register("text")}
            placeholder="Enter text..."
            onInput={(e) => handleTextInputChange(e, setValue)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="text"
            name="amount"
            {...register("amount")}
            placeholder="Enter amount..."
            onInput={(e) => handleAmountInputChange(e, setValue)}
            onBeforeInput={(e) => handleAmountBeforeInput(e)}
          />
        </div>

        <button className={(!textValue || !amountValue)?"btn-disabled":"btn"} disabled={!textValue || !amountValue}>Add transaction</button>
      </form>
    </>
  );
}
