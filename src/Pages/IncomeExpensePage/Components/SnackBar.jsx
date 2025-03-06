import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';

export default function SnackBar({ display, handleClose, snackBarContent, snackBarColor }) {
  return (
    <Snackbar
      open={display}
      autoHideDuration={5000}
      onClose={handleClose}
      message={snackBarContent}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      sx={{
        '& .MuiSnackbarContent-root': {
          background: '#9333EA',
          color: {snackBarColor},
        },
      }}
    />
  );
}
