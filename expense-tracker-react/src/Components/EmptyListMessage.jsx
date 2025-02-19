import { Typography } from "@mui/material"
export default function EmptyListMessage(){
    return(
        <Typography sx={{fontSize:".8rem",color:"#898989", marginLeft:0}}>
            No recent transactions
        </Typography>
    )
}