import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import logo from "../../assets/Logo/photo_2021-05-26_02-30-21.jpg";
import "./NewHeader.css";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  AppBar: {
    backgroundColor: "white",
  },
  Toolbar: {
    width: "90%",
    margin: "1% auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems:"center",
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
    MoreIcon:{
      marginRight:"0px",
      paddingLeft:"0px",
      display: "flex",
      justifyContent:"flex-end",

    }
  },
}));

const NewHeader = ({ props }) => {
  const { history } = props;

  const his = history.location.pathname;

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      {/* <MenuItem onClick={handleMenuClose}>My account</MenuItem> */}
      <Link to="/about">
        <MenuItem onClick={handleMenuClose}>About</MenuItem>
      </Link>

      <Link to="/contact">
        <MenuItem onClick={handleMenuClose}>Contact</MenuItem>
      </Link>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
        {/* <MenuItem>
          <IconButton aria-label="show 4 new mails" color="inherit">
            <Badge badgeContent={4} color="secondary">
              <MailIcon />
            </Badge>
          </IconButton>
          <p>Messages</p>
        </MenuItem> */}
      {/* <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem> */}
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={`${his == "/goToStore" ? "dnn" : "dnnon"}`}>
      <AppBar position="static" className={classes.AppBar}>
        <div className={classes.Toolbar}>
          <div className="header-logo">
            <img src={logo} />
          </div>
          <div className="Text-header">
            <div className="Logo-item">
              <p className="BravoPizza">Bravo Pizza</p>
              <p className="thankYou">thank you for using our service</p>
            </div>
            <div>
              <p className="DostafkaPizza">
                Dostafka pizza{" "}
                <span style={{ color: "rgb(255, 105, 0)" }}>Karshi</span>
              </p>
              <p className="Min">33 min • 4.5 ⭐</p>
            </div>
            <div>
              <p className="TheCall"> The call is free</p>
              <p className="headerNumber">1168</p>
            </div>
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            {/* <MenuItem> */}
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="default"
              >
                <AccountCircle />
              </IconButton>
            {/* </MenuItem> */}
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="default"
              className={classes.MoreIcon}
            >
              <MoreIcon className={classes.MoreIcon} />
            </IconButton>
          </div>
        </div>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
};

export default NewHeader;

// created by Ravshan
