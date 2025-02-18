import { useState } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { AddIcon, AccountBalanceIcon, Dashboard, AddCircle,History } from '../Icons/icons';
import { Link } from 'react-router-dom';

export default function SimpleBottomNavigation() {
  const [value, setValue] = useState(0);

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event,newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction 
          component={Link} 
          to="/" 
          label="Dashboard" 
          icon={<Dashboard />}
          
        />
        <BottomNavigationAction 
          component={Link} 
          to="/add" 
          label="Add" 
          icon={<AddCircle />} 
        />
                <BottomNavigationAction 
          component={Link} 
          to="/history" 
          label="History" 
          icon={<History />} 
        />
      </BottomNavigation>
    </Box>
  );
}
