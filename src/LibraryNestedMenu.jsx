import React, { useRef, useImperativeHandle, useState } from 'react';

import MenuItem from '@mui/material/MenuItem';
import ArrowRight from '@mui/icons-material/ArrowRight';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';

const TRANSPARENT = 'rgba(0,0,0,0)';

/**
 * Use as a drop-in replacement for `<MenuItem>` when you need to add cascading
 * menu elements as children to this component.
 */
const NestedMenuItem = React.forwardRef(function NestedMenuItem(props, ref) {
  const {
    parentMenuOpen,
    label,
    rightIcon = <ArrowRight />,
    children,
    className,
    tabIndex: tabIndexProp,
    ContainerProps: ContainerPropsProp = {},
    ...MenuItemProps
  } = props;
  const { ref: containerRefProp, ...ContainerProps } = ContainerPropsProp;

  const menuItemRef = useRef(null);

  const containerRef = useRef(null);

  const menuContainerRef = useRef(null);

  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const handleMouseEnter = (event) => {
    setIsSubMenuOpen(true);

    if (ContainerProps?.onMouseEnter) {
      ContainerProps.onMouseEnter(event);
    }
  };
  const handleMouseLeave = (event) => {
    setIsSubMenuOpen(false);

    if (ContainerProps?.onMouseLeave) {
      ContainerProps.onMouseLeave(event);
    }
  };

  // Check if any immediate children are active
  const isSubmenuFocused = () => {
    const active = containerRef.current?.ownerDocument?.activeElement;
    for (const child of menuContainerRef.current?.children ?? []) {
      if (child === active) {
        return true;
      }
    }
    return false;
  };

  const handleFocus = (event) => {
    if (event.target === containerRef.current) {
      setIsSubMenuOpen(true);
    }

    if (ContainerProps?.onFocus) {
      ContainerProps.onFocus(event);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      return;
    }

    if (isSubmenuFocused()) {
      event.stopPropagation();
    }

    const active = containerRef.current?.ownerDocument?.activeElement;

    if (event.key === 'ArrowLeft' && isSubmenuFocused()) {
      containerRef.current?.focus();
    }

    if (
      event.key === 'ArrowRight' &&
      event.target === containerRef.current &&
      event.target === active
    ) {
      const firstChild = menuContainerRef.current?.children[0];
      firstChild?.focus();
    }
  };

  const open = isSubMenuOpen && parentMenuOpen;

  // Root element must have a `tabIndex` attribute for keyboard navigation
  let tabIndex;
  if (!props.disabled) {
    tabIndex = tabIndexProp !== undefined ? tabIndexProp : -1;
  }

  return (
    <Button
      {...ContainerProps}
      ref={containerRef}
      onFocus={handleFocus}
      tabIndex={tabIndex}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onKeyDown={handleKeyDown}
    >
      <MenuItem
        {...MenuItemProps}
        sx={{ backgroundColor: props.open ? 'primary.main' : TRANSPARENT }}
        ref={menuItemRef}
      >
        {label}
        {rightIcon}
      </MenuItem>
      <div style={{ margin: '20px', boxSizing: 'border-box' }}>
        <Menu
          // Set pointer events to 'none' to prevent the invisible Popover div
          // from capturing events for clicks and hovers
          style={{ pointerEvents: 'none' }}
          anchorEl={menuItemRef.current}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={open}
          autoFocus={false}
          disableAutoFocus
          disableEnforceFocus
          onClose={() => {
            setIsSubMenuOpen(false);
          }}
        >
          <div ref={menuContainerRef} style={{ pointerEvents: 'auto' }}>
            {children}
          </div>
        </Menu>
      </div>
    </Button>
  );
});

export default NestedMenuItem;
