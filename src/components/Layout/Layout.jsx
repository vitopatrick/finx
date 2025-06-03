import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  CssBaseline,
  Divider,
} from "@mui/material";
import { MdMenu, MdPowerOff } from "react-icons/md";
import { links } from "./sidebar";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

const drawerWidth = 240;

const Layout = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogout = async () => {
    console.log("Logout button clicked.");
    try {
      await signOut(auth);
      console.log("Firebase sign out successful.");
    } catch (error) {
      console.error("Firebase sign out failed:", error);
      // Even if Firebase sign out fails, attempt to clear local storage and navigate
    } finally {
      sessionStorage.removeItem("token");
      navigate("/");
    }
  };

  const goHome = () => {
    navigate("/dashboard");
  };

  const drawerContent = (
    <div>
      <List>
        {links.map((link) => (
          <ListItem
            button
            key={link.text}
            sx={{ mt: 2, color: "text.primary" }}
            onClick={() => navigate(`${link.path}`)}
          >
            <ListItemIcon sx={{ mr: 0, color: "text.primary" }}>
              {link.icon}
            </ListItemIcon>
            <ListItemText primary={link.text} sx={{ ml: 0 }} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", bgcolor: "background.default" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          bgcolor: "background.paper",
          color: "text.primary",
          boxShadow: 1,
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MdMenu />
          </IconButton>
          <Typography
            variant="h4"
            noWrap
            component="h1"
            onClick={goHome}
            sx={{ p: 1, cursor: "pointer" }}
          >
            Neo Market
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              bgcolor: "background.paper",
            },
          }}
        >
          <Toolbar />
          {drawerContent}
          <Box sx={{ position: "absolute", bottom: 0, width: "100%" }}>
            <List>
              <ListItem
                button
                onClick={handleLogout}
                sx={{ color: "text.primary" }}
              >
                <ListItemIcon sx={{ color: "text.primary" }}>
                  <MdPowerOff />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItem>
            </List>
          </Box>
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              bgcolor: "background.paper",
              borderRight: "1px solid rgba(0, 0, 0, 0.12)",
              position: "fixed",
              height: "100vh",
              top: 0,
              left: 0,
              zIndex: 1200,
              overflowY: "auto",
            },
          }}
          open
        >
          <Toolbar />
          {drawerContent}
          <Box sx={{ position: "absolute", bottom: 0, width: "100%" }}>
            <List>
              <ListItem
                button
                onClick={handleLogout}
                sx={{ color: "text.primary" }}
              >
                <ListItemIcon sx={{ color: "text.primary" }}>
                  <MdPowerOff />
                </ListItemIcon>
                <ListItemText primary="Logout" />
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          minHeight: "100vh",
        }}
      >
        <Toolbar />
        {props.children}
      </Box>
    </Box>
  );
};

Layout.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Layout;
