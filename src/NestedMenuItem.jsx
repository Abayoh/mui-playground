import React, { useState } from 'react';
import ButtonBase from '@mui/material/ButtonBase';
import Box from '@mui/system/Box';
import Paper from '@mui/material/Paper';
import ChevronRight from '@mui/icons-material/ChevronRight';
import { Typography } from '@mui/material';

const menuItemButtonStyle = {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  '& span.item-text': {
    ml: 1,
    textAlign: 'left',
    color: '#7D879C',
  },
};

const getSubMenuOpenStyle = (subMenuOpen) => ({
  position: 'absolute',
  display: subMenuOpen ? 'block' : 'none',
  minWidth: '300px',
  top: 0,
  left: '100%',
  textAlign: 'left',
  right: 'auto',
  zIndex: '99',
  opacity: subMenuOpen ? 1 : 0,
  transition:
    'opacity 267ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 178ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;',
});

const NestedMenuItem = ({
  parentOpen,
  children,
  ancestorsPath,
  label,
  onClick,
}) => {
  const [open, setOpen] = useState(false);
  const handleMouseEnter = () => {
    setOpen(true);
  };
  const handleMouseLeave = () => {
    setOpen(false);
  };
  const handleClick = () => {
    if (!label) {
      return;
    }
    onClick(ancestorsPath);
  };
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',

        height: '40px',
        width: '100%',
        '&:hover': { backgroundColor: '#0000000f' },
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ButtonBase
        sx={{
          m: 2,
          width: '100%',
          color: 'text.secondary',
        }}
        onClick={handleClick}
      >
        <Box sx={menuItemButtonStyle}>
          <span>{label}</span>

          <ChevronRight />
        </Box>
      </ButtonBase>
      <Box sx={getSubMenuOpenStyle(parentOpen && open)}>
        <Paper elevation={2} sx={{ ml: 2, pb: 2 }}>
          <Box sx={{ pl: 2, pt: 2 }}>
            <Typography>{label}</Typography>
          </Box>
          {children}
        </Paper>
      </Box>
    </Box>
  );
};

export default NestedMenuItem;
