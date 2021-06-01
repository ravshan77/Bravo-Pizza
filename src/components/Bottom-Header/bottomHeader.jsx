import React from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { useSelector } from "react-redux";
import LocalGroceryStoreIcon from "@material-ui/icons/LocalGroceryStore";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import SubCard from "./SubCard";
import "./bottomHeader.css";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  Badge: {
    backgroundColor: "white",
  },
  AppBar: {
    backgroundColor: "white",
  },
}));

const BottomHeader = ({ props }) => {
  const { history } = props;

  const his = history.location.pathname;

  const classes = useStyles();
  const { food } = useSelector((state) => state.cardData);
  const sum = food.map((item) => {
    return item.count;
  });
  const collected = sum.reduce((a, b) => a + b, 0);

  const orderCost = food.map((item) => {
    return item.cost;
  });
  const toOrder = orderCost.reduce((a, b) => a + b, 0);
  const [show, setShow] = React.useState(false);
  const [cost, setCost] = React.useState("");
  const handleMouseMove = () => {
    setShow(!show);
  };

  const handleChangeCost = (event) => {
    setCost(() => event.target.value);
  };

  return (
    <AppBar position="sticky" className={classes.AppBar}>
      <div className={`${his == "/goToStore" ? "dnne" : "dnbl"}`}>
        <div className="bottom-header">
          <div className="subStores">
            <div className="link_items">
              <NavLink to="/" activeClassName="activeClass" exact>
                <li className="link-header-pages">Pizza</li>
              </NavLink>
              <NavLink to="/food" activeClassName="activeClass">
                <li className="link-header-pages">Food</li>
              </NavLink>
              <NavLink to="/drink" activeClassName="activeClass">
                <li className="link-header-pages">Drink</li>
              </NavLink>
              <NavLink to="/cake" activeClassName="activeClass">
                <li className="link-header-pages">Cakes</li>
              </NavLink>
              <NavLink to="/about" activeClassName="activeClass">
                <li className="link-header-pages disp_none">about</li>
              </NavLink>
              <NavLink to="/contact" activeClassName="activeClass" >
                <li className="link-header-pages disp_none">contact</li>
              </NavLink>
              <div className="search">
                <input
                  placeholder="Cost search"
                  type="number"
                  className="searchInput"
                  onChange={handleChangeCost}
                  value={cost}
                />

                <Link to={`/filteredByCost/${cost}`} className={classes.link}>
                  <Button>
                    <SearchIcon className={classes.searchIcon} />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="bottomHeader-korzenka-item">
              <p className={`${collected > 0 ? "costKorzenka" : "off"}`}>
                {new Intl.NumberFormat("en-US", { style: "decimal" }).format(
                  toOrder.toFixed(2) / 10
                )}{" "}
                so'm
              </p>
              <p className={`${collected <= 0 ? "korzenka" : "off"}`}>Store</p>
              <div
                onMouseEnter={handleMouseMove}
                aria-label="show 11 new notifications"
              >
                <Badge badgeContent={collected} color="secondary">
                  <LocalGroceryStoreIcon htmlColor="black" />
                </Badge>
              </div>
            </div>
          </div>
        </div>
        <SubCard show={show} />
      </div>
    </AppBar>
  );
};

export default BottomHeader;

// created by Ravshan
