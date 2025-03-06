import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {handleAmountBeforeInput,handleAmountInputChange,handleTextInputChange} from "../Core/Helpers/validations";
import { Typography } from "@mui/material";
import "./AddTransaction.css";
import Header from "./Header";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { Button } from "@/Components/Button";
import SnackBar from "@/Pages/AddTransactionPage/SnackBar";

export default function TransactionForm({
  open = false,
  handleClose,
  transaction = null,
  title,
  buttonText,
  buttonOnClick,
  snackBarContent,
  SnackBarColor,
}) {
  const { register, handleSubmit, reset, watch, setValue } = useForm({
    defaultValues: {
      text: transaction?.text || "",
      amount: transaction?.amount || "",
    },
  });

  const textValue = watch("text");
  const amountValue = watch("amount");

  const [snackbarOpen, setSnackbarOpen] = useState(false);

  useEffect(() => {
    if (transaction) {
      setValue("text", transaction.text);
      setValue("amount", transaction.amount);
    }
  }, [transaction, setValue]);

  const onSubmit = async ({ description, amount }) => {
    const updatedTransaction = {
      description,
      amount,
    };

    console.log("before calling update function - ");
    const result = await buttonOnClick(updatedTransaction);

    if (result.statusCode === 201) {
      setSnackbarOpen(true);
    }

    console.log("after calling update function - ");
    reset();
    if (handleClose) handleClose();
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  const formContent = (
    <div className="add-transaction-container">
      <Header content={title} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label htmlFor="text">
            <Typography
              variant="h7"
              sx={{ fontSize: ".83rem", fontWeight: "500" }}
            >
              Description
            </Typography>
          </label>
          <input
            type="text"
            name="text"
            {...register("description")}
            placeholder="Enter description"
            onInput={(e) => handleTextInputChange(e, setValue)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            <Typography
              variant="h7"
              sx={{ fontSize: ".83rem", fontWeight: "500" }}
            >
              Amount
            </Typography>
          </label>
          <span className="amount-span">
            {" "}
            (negative for expense, positive for income)
          </span>
          <input
            type="text"
            name="amount"
            {...register("amount")}
            placeholder="Enter amount"
            onInput={(e) => handleAmountInputChange(e, setValue)}
            onBeforeInput={(e) => handleAmountBeforeInput(e)}
          />
        </div>
        <div className="button-container">
          <Button
            className={!textValue || !amountValue ? "btn-disabled" : "btn"}
            disabled={!textValue || !amountValue}
          >
            {buttonText}
          </Button>
        </div>
      </form>
      <SnackBar
        display={snackbarOpen}
        handleClose={handleCloseSnackbar}
        snackBarContent={snackBarContent}
        SnackBarColor={SnackBarColor}
      />
    </div>
  );

  return open ? (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "40%",
          borderRadius: 2,
          p: 4,
        }}
      >
        {formContent}
      </Box>
    </Modal>
  ) : (
    formContent
  );
}
