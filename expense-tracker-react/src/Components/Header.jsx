import { Typography } from "@mui/material"
// import "./Header.css"
export default function Header({content}){
    return(
    <Typography  sx={{fontSize:".9rem",fontWeight:"600"}}>
        {content}
    </Typography>
    )
}