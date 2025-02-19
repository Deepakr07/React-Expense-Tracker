import { Typography } from "@mui/material"
// import "./Header.css"

export default function Header({content}){
    return(
    <Typography variant="h6" sx={{fontSize:".9rem",fontWeight:"bold"}}>
        {content}
    </Typography>
    )
}