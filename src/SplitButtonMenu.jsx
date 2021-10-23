import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/system';
import Menu from '@mui/material/Menu';

const StyledButtonGroup = styled(ButtonGroup)(({ theme }) => {
  return {
    borderRadius: 0,
    boxShadow: 'none',
    textTransform: 'none',

    '& .MuiButtonGroup-grouped': {
      backgroundColor: '#e3e3e3de',
      color: theme.palette.text.secondary,
      '&:hover': {
        backgroundColor: '#e3e3e3de',
      },
    },
    '& .MuiButtonGroup-grouped:last-of-type': {
      borderRadius: '0 24px 24px 0',
    },
    '& .MuiButtonGroup-grouped:not(:last-of-type)': {
      borderColor: '#cdcbcba8',
      textTransform: 'none',
      display: 'inline-block',
      width: 200,
      padding: '6px 8px',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      '@media (max-width:375px)': {
        width: 80,
      },
    },
  };
});

const options = [
  'T-shirt is going to school and love eating ldld lsls ldld ldldldld ldldl dldldldld ',
  'Shoes',
  'Tools',
];

export default function SplitButtonMenu({ categories, selectionChanged }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleClick = (event) => {
    if (open) handleClose();
    else setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    selectionChanged(index);
    handleClose();
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <StyledButtonGroup variant='contained' aria-label='split button'>
        <Button className='bth-hover' onClick={handleClick}>
          {options[selectedIndex]}
        </Button>
        <Button
          className='bth-hover'
          size='small'
          aria-controls={open ? 'split-button-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-label='select merge strategy'
          aria-haspopup='menu'
          onClick={handleClick}
        >
          <ArrowDropDownIcon />
        </Button>
      </StyledButtonGroup>
      <Menu
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        anchorEl={anchorEl}
        id='split-button-menu'
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiMenuItem-root': {
              display: 'block',
              maxWidth: '350px',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              textTransform: 'none',
              textAlign: 'left',
              mt: 1.5,
            },
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  );
}
