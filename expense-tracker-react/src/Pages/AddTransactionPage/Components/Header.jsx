import Typography from '@mui/material/Typography';
export default function Header(){
    return (
        <Typography variant='h5' 
        sx={{ 
            fontWeight: 'bold',
            fontSize:'1.8rem'
            }}>
            Expense Tracker
        </Typography>
    )
}