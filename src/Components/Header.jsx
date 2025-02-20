import { Typography } from "@mui/material"
export default function Header({content}){
    return(
    <Typography  variant="h7"sx={{fontSize:".95rem",fontWeight:"500"}}>
        {content}
    </Typography>
    )
}