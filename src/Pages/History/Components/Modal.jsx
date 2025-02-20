import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useContext } from "react";
import { GlobalContext } from "../../../Context/GlobalState";
// Modal style
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius:2,
  p: 4,
width:".332"
};

export default function BasicModal({ open="true", handleClose, transaction }) {
    const { deleteTransaction } = useContext(GlobalContext);
  return (
    <Modal
      open={open} 
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      
      <Box sx={style}>

        <Typography id="modal-modal-description"variant="h5" sx={{ mt: 2 ,mb:2}}>
          Delete Transaction
        </Typography>

        <Typography id="modal-modal-title" sx={{color:"#6B7280",}}>
          Are you sure you want to delete this transaction? This action cannot be undone.
        </Typography>

        <Box sx={{display:"flex",justifyContent:"flex-end",gap:"10px",mt:"20px"}}>

        <Button sx = {{backgroundColor:"#ffffff",color:"black",border:".5px solid grey",fontWeight:"bold",textTransform:"none"}} onClick={handleClose}>
            Cancel
        </Button>

        <Button sx = {{backgroundColor:"#EF4848",color:"white", fontWeight:"bold",textTransform:"none"}}onClick={() => {deleteTransaction(transaction.id) }}>
          Delete
        </Button>

        </Box>

      </Box>

    </Modal>
  );
}
