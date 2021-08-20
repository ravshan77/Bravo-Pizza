import React from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { useSelector } from "react-redux";
import LocalGroceryStoreIcon from "@material-ui/icons/LocalGroceryStore";
import Badge from "@material-ui/core/Badge";
import SubCard from "./SubCard";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import SearchIcon from "@material-ui/icons/Search";
import "./bottomHeader.css";

const useStyles = makeStyles((theme) => ({
  Badge: {
    backgroundColor: "white",
  },
  AppBar: {
    backgroundColor: "white",
  },
}));

const BottomHeader = ({ props }) => {
  const classes = useStyles();

  // Store stepper Header
  const { history } = props;
  const hisHeader = history.location.pathname;

  const { food } = useSelector((state) => state.cardData);
  const sum = food.map((item) => {
    return item.count;
  });

  // badge Store counting
  const collected = sum.reduce((a, b) => a + b, 0);

  // total cost
  const orderCost = food.map((item) => {
    return item.cost;
  });
  const toOrder = orderCost.reduce((a, b) => a + b, 0);

  // handle SubCard
  const [show, setShow] = React.useState(false);

  // Humburger
  const [click, setClick] = React.useState(false);
  const handleClick = () => setClick(!click);

  const handleMouseMove = () => {
    setShow(!show);
  };

  // search cost products
  const [costSearch, setCostSearch] = React.useState("");
  const handleChangeCost = (event) => {
    setCostSearch(() => event.target.value);
  };

  const clickSearchIcon = () => {
    setClick(false);
    setCostSearch("");
  };

  return (
    <AppBar position="sticky" className={classes.AppBar}>
      <div className={`${hisHeader == "/goToStore" ? "dnne" : "dnbl"}`}>
        <div className="bottom-header">
          <div className="subStores">
            <div className="menu_icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"} />
            </div>
            <div className={click ? "link_items active" : "link_items"}>
              <NavLink to="/" activeClassName="activeClass" exact>
                <li
                  onClick={() => setClick(false)}
                  className="link-header-pages"
                >
                  Pizza
                </li>
              </NavLink>
              <NavLink to="/food" activeClassName="activeClass">
                <li
                  onClick={() => setClick(false)}
                  className="link-header-pages"
                >
                  Food
                </li>
              </NavLink>
              <NavLink to="/drink" activeClassName="activeClass">
                <li
                  onClick={() => setClick(false)}
                  className="link-header-pages"
                >
                  Drink
                </li>
              </NavLink>
              <NavLink to="/cake" activeClassName="activeClass">
                <li
                  onClick={() => setClick(false)}
                  className="link-header-pages"
                >
                  Cakes
                </li>
              </NavLink>
              <NavLink to="/about" activeClassName="activeClass">
                <li
                  onClick={() => setClick(false)}
                  className="link-header-pages disp_none"
                >
                  about
                </li>
              </NavLink>
              <NavLink to="/contact" activeClassName="activeClass">
                <li
                  onClick={() => setClick(false)}
                  className="link-header-pages disp_none"
                >
                  contact
                </li>
              </NavLink>
              <div className="search">
                <input
                  placeholder="Cost search"
                  type="number"
                  className="searchInput"
                  onChange={handleChangeCost}
                  value={costSearch}
                />
                {costSearch > 0 && (
                  <Link
                    to={`/filteredByCost/${costSearch}`}
                    className={classes.link}
                  >
                    <Button onClick={clickSearchIcon}>
                      <SearchIcon className={classes.searchIcon} />
                    </Button>
                  </Link>
                )}
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

