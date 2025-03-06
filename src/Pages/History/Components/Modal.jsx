import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { deleteExpense } from "@/Actions/expenseActions";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

// Modal style
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 2,
  p: 4,
  width: "400px"
};

export default function BasicModal({ open, handleClose, transaction }) {
  const queryClient = useQueryClient();
  async function handleDelete(id) {
   
    if (!id) {
      console.error("Transaction ID is undefined");
      return;
    }

    try {
      console.log("Deleting transaction with ID:", id);
      const result = await deleteExpense(id);
      console.log("Delete result:", result);
      
      await queryClient.refetchQueries({
        queryKey: ['Transaction History'],
        type: 'active',
        exact: true
      });
    
      handleClose();
    } catch (error) {
      console.error("Error deleting transaction:", error);
    }
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-description" variant="h7" sx={{ fontSize: "1.25rem", mt: 2, fontWeight: "400" }}>
          Delete Transaction
        </Typography>
        
        <Typography id="modal-modal-title" sx={{ color: "#6B7280", marginTop: ".7rem", fontSize: ".93rem" }}>
          Are you sure you want to delete this transaction? This action cannot be undone.
        </Typography>
        
        <Box sx={{ display: "flex", justifyContent: "flex-end", gap: "10px", mt: "20px" }}>
          <Button 
            sx={{ 
              backgroundColor: "#ffffff", 
              color: "black", 
              borderRadius: "5px", 
              fontWeight: "bold", 
              textTransform: "none", 
              border: "0.1px solid rgba(192, 192, 192, 0.5)" 
            }} 
            onClick={handleClose}
          >
            Cancel
          </Button>
          
          <Button 
            sx={{ 
              backgroundColor: "#EF4848", 
              borderRadius: "5px", 
              color: "white", 
              fontWeight: "bold", 
              textTransform: "none" 
            }}
            onClick={() => handleDelete(transaction.id)}>
            Delete
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}