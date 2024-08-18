import React from 'react';
import { Fab } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
const  WhatComponent = () => {
  return (
    <Fab
      color="success"
      aria-label="WhatsApp"
      sx={{
        position: 'fixed',
        bottom: 16,
        right: 16,
        zIndex: 1000,
      }}
    >
      <WhatsAppIcon />
    </Fab>
  );
};

export default WhatComponent;