import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItemText, Box, Divider, ListItemButton, ListItemIcon } from '@mui/material';
import { Dashboard, Inventory, Menu as MenuIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import MedicineImage from '../assets/images/icons8-medicine-80.png';
import DashboardIcon from '@mui/icons-material/Dashboard'; 
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InventoryIcon from '@mui/icons-material/Inventory'; 

const drawerWidth = 240;

interface AppLayoutProps {
    children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const [open, setOpen] = useState(true);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Sidebar */}
      <Drawer
        sx={{
          width: 0,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#283342',
            color: 'white',
          },
        }}
        variant="persistent" // Change to persistent
        anchor="left"
        open={open} // Control the open state with state variable
      >
        <Toolbar />
        <List>
          <ListItemButton component={Link} to="/">
          <ListItemIcon>
            <DashboardIcon sx={{
              color: 'white'
            }}/>
          </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
          <Divider sx={{ backgroundColor: 'white' }} />
          <ListItemButton component={Link} to="/order-products">
          <ListItemIcon>
            <ShoppingCartIcon sx={{
              color: 'white'
            }}/>
          </ListItemIcon>
            <ListItemText primary="Order Products" />
          </ListItemButton>
          <Divider sx={{ backgroundColor: 'white' }} />
          <ListItemButton component={Link} to="/inventory">
          <ListItemIcon
            sx={{
              color: 'white'
            }}
          >
            <InventoryIcon />
          </ListItemIcon>
            <ListItemText primary="Inventory" />
          </ListItemButton>
          <Divider sx={{ backgroundColor: 'white' }} />
          {/* <ListItemButton component={Link} to="/configuration">
            <ListItemText primary="Configuration" />
          </ListItemButton>
          <Divider sx={{ backgroundColor: 'white' }} /> */}
        </List>
      </Drawer>

      {/* Main Content Area */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: 'background.default',
          p: 3,
          transition: 'margin 0.3s ease', // Add transition for smooth resizing
          marginLeft: open ? `${drawerWidth}px` : '0px', // Adjust margin based on sidebar state
          '@media (max-width: 500px)': {
            marginLeft: '0px', // For small screens, no margin
          },
        }}
      >
        {/* Navbar */}
        <AppBar position="fixed" sx={{ 
            zIndex: (theme) => theme.zIndex.drawer + 1,
            backgroundColor: '#1D242E',
         }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
              Big Pharma
            </Typography>
            <IconButton color="inherit">
              <Typography variant="body2" sx={{ mr: 1 }}>
                Ricky
              </Typography>
              <img
                src={MedicineImage}
                alt="John Doe"
                style={{ width: 32, height: 32, borderRadius: '50%' }}
              />
            </IconButton>
          </Toolbar>
        </AppBar>

        {/* Content passed as children */}
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default AppLayout;
