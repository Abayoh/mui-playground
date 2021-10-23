import React from 'react';
import ButtonBase from '@mui/material/ButtonBase';
import Box from '@mui/system/Box';

const LeafMenuItem = ({ label, ancestorsPath, onClick }) => {
  const handleClick = () => {
    onClick(ancestorsPath);
  };
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        height: '40px',
        width: '100%',
        '&:hover': { backgroundColor: '#0000000f' },
      }}
    >
      <ButtonBase
        sx={{
          m: 2,
          alignItems: 'center',
          width: '100%',
          justifyContent: 'left',
          color: 'text.secondary',
        }}
        onClick={handleClick}
      >
        <span className='item-text'>{label}</span>
      </ButtonBase>
    </Box>
  );
};

export default LeafMenuItem;
