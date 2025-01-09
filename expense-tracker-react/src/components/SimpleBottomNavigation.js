import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AddIcon from '@mui/icons-material/Add';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { Link } from 'react-router-dom';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction 
          component={Link} 
          to="/" 
          label="Balance" 
          icon={<AccountBalanceIcon />} 
        />
        <BottomNavigationAction 
          component={Link} 
          to="/add" 
          label="Add" 
          icon={<AddIcon />} 
        />
      </BottomNavigation>
    </Box>
  );
}
