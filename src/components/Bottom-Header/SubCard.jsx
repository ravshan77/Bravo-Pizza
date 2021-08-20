import React from "react";
import SubStore from "../subStore/subStore";
import { useSelector } from "react-redux";
import "./SubCard.css";
import LocalShippingOutlinedIcon from "@material-ui/icons/LocalShippingOutlined";
import { Link } from "react-router-dom";

const SubCard = ({ show }) => {
  const { food } = useSelector((state) => state.cardData);

  // product count
  const sum = food.map((item) => {
    return item.count;
  });
  const collected = sum.reduce((a, b) => a + b, 0);

  return (
    <div>
      <div className="store-blok">
        <div className={`${show ? "subStoreCard-on" : "subStoreCard-off"}`}>
          {collected > 0 ? (
            <div className="store">
              <div className="goToStore">
                <Link to="/goToStore">
                  <div className="StoreGo">
                    <LocalShippingOutlinedIcon fontSize="large" />
                    <span className="goStoreText">➡ Go to store</span>
                  </div>
                </Link>
              </div>
              <hr></hr>
              <SubStore />
            </div>
          ) : (
            <div className="empty-store">
              <div className="empt-imges">
                <img
                  className="empty-img"
                  src="https://thumbs.dreamstime.com/b/%D0%BA%D0%BE%D1%82%D0%B5%D0%BD%D0%BE%D0%BA-%D0%B2-%D0%BA%D0%BE%D1%80%D0%BE%D0%B1%D0%BA%D0%B5-41349310.jpg"
                />
              </div>
              <div className="empty_text">
                <h2>The basket is empty!</h2>
                <p style={{padding:"15px"}}>
                We always deliver for free, but the order quantity must be at least 38,000 soums
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SubCard;

