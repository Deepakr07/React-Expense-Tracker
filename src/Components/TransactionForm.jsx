import { GlobalContext } from "../Context/GlobalState";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { handleAmountBeforeInput, handleAmountInputChange, handleTextInputChange } from "../Helpers/validations";
import { Typography } from "@mui/material";
import "./AddTransaction.css"
import Header from "./Header";
import { getCurrentDateAndTime } from "../Helpers/validations";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";


export default function TransactionForm({open = false, handleClose, transaction = null ,title, buttonText}) {
  
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
  } = useForm({
    defaultValues: {
      text:transaction?.text || "",
      amount:transaction?.amount || "",
    }
  }
  );



  const textValue = watch("text");
  const amountValue = watch("amount");
  const { addTransaction,editTransaction } = useContext(GlobalContext);

  useEffect(()=>{
    if(transaction){
      setValue("text",transaction.text)
      setValue("amount",transaction.amount)
    }
  },[transaction,setValue])

  const onSubmit = ({ text, amount }) => {
    
    const formattedDate = getCurrentDateAndTime()
    if(transaction) {
      const updatedTransaction = {
        id:transaction.id,
        text,
        amount,
        date:formattedDate,
      }
      editTransaction(updatedTransaction)
    }
    else{
        const newTransaction = {
        id: Math.floor(Math.random() * 100000000000),
        text,
        amount,
        date:formattedDate
      }
      addTransaction(newTransaction);
    }
    reset();
    if (handleClose) handleClose();
  }
  const formContent = (
    <div className="add-transaction-container">
    <Header content = {title}/>
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
    <div className="button-container"><button className={(!textValue || !amountValue)?"btn-disabled":"btn"} disabled={!textValue || !amountValue}>{buttonText}</button></div>
  </form>
</div>
  )
  return open ? (
    <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
      <Box sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "40%",
        borderRadius: 2,
        p: 4,
      }}>
        {formContent}
      </Box>
    </Modal>
  ) : (
    formContent
  )
}
