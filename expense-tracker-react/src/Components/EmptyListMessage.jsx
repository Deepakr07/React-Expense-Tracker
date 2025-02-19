import { Typography } from "@mui/material"
export default function EmptyListMessage({text="No recent transactions"}){
    return(
        <Typography sx={{fontSize:".8rem",color:"#898989", marginLeft:0}}>
            {text}
        </Typography>
    )
}