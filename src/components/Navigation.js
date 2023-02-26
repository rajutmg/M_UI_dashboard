import React, { useState } from "react";
// internal
import MenuItem from "./MenuItem";
import { useStyles } from "../Styles";
import routes from "../routes";
// external
import clsx from "clsx";
// assets
import Logo1 from "../assets/logo1.svg";
import Logo2 from "../assets/logo2.svg";

// material ui
import {
  List,
  Drawer,
  IconButton,
  useTheme,
  useMediaQuery,
  AppBar,
  Toolbar,
  Typography,
} from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import MenuIcon from "@material-ui/icons/Menu";

const Navigation = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("xs"));

  const toggleNavigation = () => {
    setOpen(!open);
    console.log("yes");
  };

  const closeNavigation = () => {
    if (matches) {
      setOpen(false);
    }
  };

  return (
    <>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton
            onClick={toggleNavigation}
            edge="start"
            color="inherit"
            arial-labe="Menu"
            s
          >
            <MenuIcon />
          </IconButton>
          <Typography color="inherit" variant="h6">
            Quality
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant={matches ? "temporary" : "permanent"}
        open={matches ? !open : open}
        classes={{
          paper: clsx(
            classes.navigationDrawer,
            !open && classes.navigationDrawerCollapse
          ),
        }}
      >
        <div
          className={clsx(
            classes.navigationToolBar,
            !open && classes.navigationToolbarCollapse
          )}
        >
          <IconButton onClick={toggleNavigation}>
            {open ? <ChevronLeftIcon /> : <MenuIcon />}
          </IconButton>
        </div>
        <div className={classes.navigationLogoContainer}>
          <img
            src={open ? Logo1 : Logo2}
            alt="Quality logo"
            className={classes.navigationLogo}
          />
        </div>
        <List className={classes.navigationList}>
          {routes.map((route, index) => {
            return (
              <>
                {route.path === "/sign-out" && (
                  <div className={classes.navigationSpacer}></div>
                )}
                <MenuItem
                  label={route.label}
                  icon={route.icon}
                  activeIcon={route.activeIcon}
                  path={route.path}
                  onClick={closeNavigation}
                />
              </>
            );
          })}
        </List>
      </Drawer>
    </>
  );
};

export default Navigation;
