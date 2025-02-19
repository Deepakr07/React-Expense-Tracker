import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { AddCircle, History, Wallet } from '../Icons/icons';
import { Link, useLocation } from 'react-router-dom';

export default function SimpleBottomNavigation() {
  const [value, setValue] = useState(0);
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case '/':
        setValue(0);
        break;
      case '/add':
        setValue(1);
        break;
      case '/history':
        setValue(2);
        break;
      default:
        setValue(0);
    }
  }, [location.pathname]);

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(newValue) => setValue(newValue)}
      >
        <BottomNavigationAction 
          component={Link} 
          to="/" 
          label="Dashboard" 
          icon={<Wallet />}
          sx={{
            color: value === 0 ? '#9333EA' : '#6B7280', // Active icon color (purple) when selected
            '&.Mui-selected': {
              color: '#9333EA', // Active icon color (purple)
            }
          }}
        />
        <BottomNavigationAction 
          component={Link} 
          to="/add" 
          label="Add" 
          icon={<AddCircle />} 
          sx={{
            color: value === 1 ? '#9333EA' : '#6B7280', // Active icon color (purple) when selected
            '&.Mui-selected': {
              color: '#9333EA', // Active icon color (purple)
            }
          }}
        />
        <BottomNavigationAction 
          component={Link} 
          to="/history" 
          label="History" 
          icon={<History />} 
          sx={{
            color: value === 2 ? '#9333EA' : '#6B7280', // Active icon color (purple) when selected
            '&.Mui-selected': {
              color: '#9333EA', // Active icon color (purple)
            }
          }}
        />
      </BottomNavigation>
    </Box>
  );
}
