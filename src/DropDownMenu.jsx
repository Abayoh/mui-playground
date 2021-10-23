import React, { useState } from 'react';
import Box from '@mui/system/Box';
import ButtonBase from '@mui/material/ButtonBase';

const DropDownMenu = () => {
  const [open, setOpen] = useState(false);

  const handleClick = (event) => {
    setOpen((prev) => !prev);
  };

  const handleOutsideClick = (event) => {
    setOpen(false);
  };

  const handleMenuItemClick = (path) => {
    console.log(path);
    setOpen((prev) => !prev);
  };

  return (
    <Box
      sx={{
        position: 'relative',
        width: '270px',
        m: 2,
        backgroundColor: 'common.gray',
      }}
    >
      {open && (
        <Box
          onClick={handleOutsideClick}
          sx={{
            display: 'block',
            position: 'fixed',
            opacity: 0,
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            zIndex: 0,
          }}
        />
      )}
      <Box>
        <ButtonBase onClick={handleClick}>Account</ButtonBase>
      </Box>
      <Box
        sx={{
          boxShadow: 1,
          display: open ? 'flex' : 'none',
          flexDirection: 'column',
          mt: 3,
          pb: 2,
          position: 'absolute',
          opacity: open ? 1 : 0,
          width: '100%',
          transition:
            'opacity 267ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 178ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;',
        }}
      >
        <Box
          sx={{
            width: '100%',
            ml: 2,
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            '&:hover': { backgroundColor: 'common.gray' },
          }}
        >
          <span>alex</span>
        </Box>
        <Box sx={{ width: '100%', ml: 2, height: '40px' }}>
          <span>alex</span>
        </Box>
        <Box sx={{ width: '100%', ml: 2, height: '40px' }}>
          <span>alex</span>
        </Box>
      </Box>
    </Box>
  );
};

export default DropDownMenu;
