import React, { useState, useRef } from 'react';
import { Menu, MenuItem, Typography } from '@mui/material';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import Box from '@mui/system/Box';
import TouchRipple from '@mui/material/ButtonBase/TouchRipple';

import NestedMenuItem from './LibraryNestedMenu';
import Icon from '@mui/material/Icon';
import { styled } from '@mui/system';

const StyledDiv = styled('div')((props) => {
  return {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    backgroundColor: '#F6F9FC',
    height: '40px',
    width: '280px',
    '& span.item-text': {
      textAlign: 'left',
      marginLeft: 8,
      display: 'inline-block',
      width: 208,
      color: '#7D879C',
    },

    '& .expandIcon': {
      transition: 'transform 0.3s cubic-bezier(0, 0, 0.2, 1) 0ms',
      transform: 'rotate(90deg)',
      // marginRight: "16px"
    },
    '& .collapseIcon': {
      transition: 'transform 0.3s cubic-bezier(0, 0, 0.2, 1) 0ms',
      transform: 'rotate(0deg)',
      // marginRight: "16px"
    },
    '& .expansion-panel': {
      overflow: 'hidden',
      transition: 'max-height 0.3s cubic-bezier(0, 0, 0.2, 1)',
    },
    '& .highlight': {
      background: props.theme.palette.primary.main,
    },
  };
});

const NestedMenu = () => {
  const [menuPosition, setMenuPosition] = useState(null);
  const menuItemRef = useRef(null);

  const handleRightClick = (event) => {
    if (menuPosition) {
      return;
    }
    console.log(event.pageX, event.pageY);
    event.preventDefault();
    setMenuPosition({
      top: event.pageY,
      left: event.pageX,
    });
  };

  const handleItemClick = (event) => {
    setMenuPosition(null);
  };

  const rippleRef = React.useRef(null);
  const onRippleStart = (e) => {
    rippleRef.current.start(e);
  };
  const onRippleStop = (e) => {
    rippleRef.current.stop(e);
  };

  return (
    <div onClick={handleRightClick}>
      <StyledDiv onMouseDown={onRippleStart} onMouseUp={onRippleStop}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <DashboardCustomizeIcon />
          <span className='item-text'>Categories</span>
        </Box>
        <Box className={`${!!menuPosition ? 'expandIcon' : 'collapseIcon'}`}>
          <Icon className='align-middle'>chevron_right</Icon>
        </Box>
        <TouchRipple ref={rippleRef} />
      </StyledDiv>
      <div style={{ margin: '16px' }}>
        <Menu
          open={!!menuPosition}
          onClose={() => setMenuPosition(null)}
          transformOrigin={{ vertical: 'top', horizontal: 'center' }}
          anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
          sx={{ margin: 2 }}
        >
          <MenuItem onClick={handleItemClick}>Button 1</MenuItem>
          <MenuItem onClick={handleItemClick}>Button 2</MenuItem>
          <NestedMenuItem
            label='Button 3'
            parentMenuOpen={!!menuPosition}
            onClick={handleItemClick}
          >
            <MenuItem onClick={handleItemClick}>Sub-Button 1</MenuItem>
            <MenuItem onClick={handleItemClick}>Sub-Button 2</MenuItem>
            <NestedMenuItem
              label='Sub-Button 3'
              parentMenuOpen={!!menuPosition}
              onClick={handleItemClick}
            >
              <MenuItem onClick={handleItemClick}>Sub-Sub-Button 1</MenuItem>
              <MenuItem onClick={handleItemClick}>Sub-Sub-Button 2</MenuItem>
            </NestedMenuItem>
          </NestedMenuItem>
          <MenuItem onClick={handleItemClick}>Button 4</MenuItem>
        </Menu>
      </div>
    </div>
  );
};
export default NestedMenu;
