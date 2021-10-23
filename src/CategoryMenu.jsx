import DashboardCustomize from '@mui/icons-material/DashboardCustomize';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { ButtonBase, Paper, Typography } from '@mui/material';
import Box from '@mui/system/Box';
import { styled } from '@mui/system';
import React, { useState } from 'react';
import NestedMenuItem from './NestedMenuItem';
import LeafMenuItem from './LeafMenuItem';

const taxonomy = [
  {
    name: 'Electronics',
    children: [
      { name: 'Acdessories & Supplies' },
      { name: 'Camera & Photo' },
      { name: 'Car & Vehicle Electronics' },
      { name: 'Cell Phones & Accessories' },
      { name: 'Computers & Accessories' },
      { name: 'GPS & Navigation' },
      { name: 'Headphones' },
    ],
  },
  {
    name: 'Computers',
    children: [
      { name: 'Computers Accessories & Peripherals' },
      { name: 'Computer Components' },
      { name: 'Computer & Tablets' },
      { name: 'Data Storage' },
      { name: 'External Components' },
      { name: 'Laptop Accessories' },
      { name: 'Monitors' },
    ],
  },
  {
    name: 'Smart Home',
    children: [
      { name: 'Smart Home Lighting' },
      { name: 'Smart Locks and Entry' },
      { name: 'Security Cameras and Systems' },
      { name: 'Plugs and Outlets' },
      { name: 'New Smart Devices' },
      { name: 'Heating and Cooling' },
      { name: 'Detectors and Sensors' },
    ],
  },
  {
    name: 'Arts & Crafts',
    children: [
      { name: 'Painting, Drawing & Art Supplies' },
      { name: 'Beading & Jewelry Making' },
      { name: 'Crafting' },
      { name: 'Fabric' },
      { name: 'Fabric Decorating' },
      { name: 'knitting & Crochet' },
      { name: 'needlework' },
    ],
  },
  {
    name: 'Automotive',
    children: [
      { name: 'Car Care' },
      { name: 'Car Electronics & Accessories' },
      { name: 'Exterior Acessories' },
      { name: 'Lights & Lighting Accessories' },
      { name: 'Motorcycle & Powersports' },
      { name: 'Oils & Fluids' },
      { name: 'Paint & Paint Supplies' },
    ],
  },
  {
    name: 'Baby',
    children: [
      { name: 'Activity & Entertainment' },
      { name: 'Apparel & Acessories' },
      { name: 'Baby & Toddler Toys' },
      { name: 'Baby Care' },
      { name: 'Babt Stationery' },
      { name: 'Car Seats & Accessories' },
      { name: 'Diapering' },
    ],
  },
  {
    name: 'Beauty and personal care',
    children: [
      { name: 'Makeup' },
      { name: 'Skin Care' },
      { name: 'Hair Care' },
      { name: 'Fragrance' },
      { name: 'Foot, Hand & Nail Care' },
      { name: 'Tools & Acessories' },
      { name: 'Shave & hair Removal' },
      { name: 'Personal Care' },
      { name: 'Oral Care' },
    ],
  },
  {
    name: "Women's Fashion",
    children: [
      { name: 'Clothing' },
      { name: 'Shoes' },
      { name: 'Jewelry' },
      { name: 'Watches' },
      { name: 'handbags' },
      { name: 'Accessories' },
    ],
  },
  {
    name: "Men's Fashion",
    children: [
      { name: 'Clothing' },
      { name: 'Shoes' },
      { name: 'Watches' },
      { name: 'Belts' },
      { name: 'Accessories' },
    ],
  },
  {
    name: "Girls' Fashion",
    children: [
      { name: 'Clothing' },
      { name: 'Shoes' },
      { name: 'Jewelry' },
      { name: 'Watches' },
      { name: 'handbags' },
      { name: 'Accessories' },
      { name: 'School Uniforms' },
    ],
  },
  {
    name: 'Boys Fashion',
    children: [
      { name: 'Clothing' },
      { name: 'Shoes' },
      { name: 'Watches' },
      { name: 'handbags' },
      { name: 'Accessories' },
      { name: 'School Uniforms' },
    ],
  },
  {
    name: 'Health and Household',
    children: [
      { name: 'Health Care' },
      { name: 'Household Supplies' },
      { name: 'Medical Supplies & Equipment' },
      { name: 'Oral Care' },
      { name: 'Personal Care' },
      { name: 'Sesual Wellness' },
      { name: 'Sports' },
      { name: 'Stationery & Gift Wrapping Supplies' },
      { name: 'Vision Care' },
    ],
  },
  {
    name: 'Home and Kitchen',
    children: [
      { name: "Kids' Home Store" },
      { name: 'Kitchen & Dinning' },
      { name: 'Bedding' },
      { name: 'Bath' },
      { name: 'Furniture' },
      { name: 'Home Decor' },
      { name: 'Wall Art' },
      { name: 'Lighting & Ceiling Fans' },
      { name: 'Seasonal Decor' },
      { name: 'Event & Party Supplies' },
      { name: 'Irons & Steamers' },
      { name: 'Vacuums & Floor Care' },
      { name: 'Storage & Organization' },
      { name: 'Cleaning Supplies' },
    ],
  },
  {
    name: 'Industrial and Scientific',
    children: [
      { name: 'Cutting Tools' },
      { name: 'Fasteners' },
      { name: 'Filtration' },
      { name: 'Food Service Equipment & Supplies' },
      { name: 'Hydraulics, Pneumatics & Plumbing' },
      { name: 'Industrial Electrical' },
      { name: 'Industrial Hardware' },
      { name: 'Industrial Power & Hand Tools' },
      { name: 'Janitorial & Sanitation Supplies' },
      { name: 'Lab & Scientific Products' },
      { name: 'Lab & Scientific Products' },
      { name: 'Material handiling Products' },
      { name: 'Occupational Health & Safety Products' },
    ],
  },
  {
    name: 'Luggage',
    children: [
      { name: 'Carry-ons' },
      { name: 'Backpacks' },
      { name: 'Garment Bags' },
      { name: 'Travel Totes' },
      { name: 'Luggage Sets' },
      { name: 'Laptop Bags' },
      { name: 'Suitcases' },
      { name: 'kids Luggage' },
      { name: 'Messenger Bags' },
      { name: 'Umbrellas' },
      { name: 'Duffles' },
      { name: 'Travel Accessories' },
    ],
  },
];

const expandIcon = {
  transition: 'transform 0.3s cubic-bezier(0, 0, 0.2, 1) 0ms',
  transform: 'rotate(90deg)',
  // marginRight: "16px"
};
const collapseIcon = {
  transition: 'transform 0.3s cubic-bezier(0, 0, 0.2, 1) 0ms',
  transform: 'rotate(0deg)',
  // marginRight: "16px"
};

const menuItemButtonStyle = {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  '& span.item-text': {
    textAlign: 'left',
    color: '#7D879C',
    fontSize: 16,
    ml: 2,
  },
};

const rootMenu = (open) => ({
  mt: 3,
  pb: 2,
  position: 'absolute',
  opacity: open ? 1 : 0,
  width: '100%',
  transition:
    'opacity 267ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, transform 178ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;',
});

export const RootMenuItem = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: '40px',
  width: '100%',
}));

const CategoryMenu = () => {
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

  function renderCategories(taxonomy, path) {
    return taxonomy.map((item, index) => {
      if (item.children) {
        return (
          <NestedMenuItem
            key={item.name + index}
            label={item.name}
            ancestorsPath={!path ? item.name : path + ',' + item.name}
            parentOpen={open}
            onClick={handleMenuItemClick}
          >
            {renderCategories(
              item.children,
              !path ? item.name : path + ',' + item.name
            )}
          </NestedMenuItem>
        );
      } else {
        return (
          <LeafMenuItem
            label={item.name + index}
            onClick={handleMenuItemClick}
            ancestorsPath={!path ? item.name : path + ',' + item.name}
          />
        );
      }
    });
  }
  return (
    <Box
      sx={{
        position: 'relative',
        width: '278px',
        m: 2,
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
      <ButtonBase
        onClick={handleClick}
        sx={{
          backgroundColor: 'common.gray',
          height: '40px',
          p: 2,
          width: '100%',
        }}
      >
        <DashboardCustomize />
        <Box sx={menuItemButtonStyle}>
          <span className='item-text'>Departments</span>

          <Box className='icon-right' sx={!!open ? expandIcon : collapseIcon}>
            <ChevronRightIcon />
          </Box>
        </Box>
      </ButtonBase>
      <Paper elevation={2} sx={rootMenu(open)}>
        <Box
          sx={{
            position: 'relative',
          }}
        >
          <Box sx={{ pl: 2, pt: 2 }}>
            <Typography>Departments</Typography>
          </Box>
          {renderCategories(taxonomy, '')}
        </Box>
      </Paper>
    </Box>
  );
};

export default CategoryMenu;
