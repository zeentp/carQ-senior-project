import * as React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { useNavigate } from "react-router-dom";
import MailIcon from '@mui/icons-material/Mail';
import AccountCircle from '@mui/icons-material/AccountCircle';

const drawerWidth = 240;

const Navbar = () => {
    let navigate = useNavigate();
    
function changePage(page) {
    switch (page) {
      case "Booking":
        navigate("/booking");
        break;
      case "Home":
        navigate("/home");
        break;
      case "ยอดรวมรายรับ":
        navigate("allget");
        break;
      default:
        navigate("/");
    }
  }
    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar color=''
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >


        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            CarQ
          </Typography>


          <Box sx={{ flexGrow: 1 }}>

            <IconButton
              edge="end"
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              // onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>

        </Toolbar>

      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {['Home', 'Booking', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}    onClick={() => changePage(text)}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
             
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        {/* <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        </Box>
        </Box>
            
        
    );

}

export default Navbar