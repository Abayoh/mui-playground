import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/system/Box';
import ButtonBases from './ButtonBases';
import CategoryMenu from './CategoryMenu';

const Navbar = () => {
  return (
    <Box sx={{ height: 60, width: '100%', color: 'text.secondary' }}>
      <Paper
        elevation={1}
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <CategoryMenu />
        </Box>
        <Box sx={{ display: 'flex', '&>div': { mr: 2, height: '100%' } }}>
          <Box></Box>
          <Box>
            <span>Vendor</span>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default Navbar;

//k88888888888888d8d8didkdkdkkdkfkddddddkddkkdkdkfffffkfkffffffffffffkkffkkkkkkfkfkfkfkfkfkfkfkf

const rootMenu = (open) => ({}); //kdkdkdkdkdkdkdkdkdkdkdkd
