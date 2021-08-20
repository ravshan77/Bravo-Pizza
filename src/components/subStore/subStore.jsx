import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./subStore.css";
import { makeStyles } from "@material-ui/core/styles";
import {
  addFood,
  decreaseFood,
  removeFood,
} from "../../store/item/item-action";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    width: "95%",
    height: "100px",
    margin: "25px auto",
  },
  margin: {
    padding: "0px",
    color: "black",
    cursor: "grab",
  },
  DeleteIcon: {
    color: "rgb(255, 105, 0)",
  },
}));

const SubStore = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { food } = useSelector((state) => state.cardData);

  return (
    <div className="mr-top">
      {food.length &&
        food.map((data) => {
          return (
            <>
              <div className="storeCard">
                <div className="img-block">
                  <img className="store-img" src={`${data.image}`} />
                </div>
                <div className="functional-block">
                  <div className="top-item">
                    <div className="data-label">
                      <p className="data-label"> {data.label}</p>
                    </div>
                    <div className="data-delete">
                      <IconButton
                        aria-label="delete"
                        className={classes.margin}
                        onClick={() => dispatch(removeFood({ ...data }))}
                      >
                        <DeleteIcon className="delete_icon" />
                      </IconButton>
                    </div>
                  </div>
                  <div className="bottomItem">
                    <div className="buttonBlock">
                      <div className="button-box">
                        <button
                          className="pilusMinus-Btn data-label"
                          onClick={() => dispatch(decreaseFood({ ...data }))}
                        >
                          -
                        </button>
                        <span className="subStore-cost">{data.count}</span>
                        <button
                          className="pilusMinus-Btn data-label"
                          onClick={() => dispatch(addFood({ ...data }))}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="costBlock">
                      <p className="cost data-label">
                        {new Intl.NumberFormat("en-US", {
                          style: "decimal",
                        }).format(data.cost.toFixed(2) / 10)}{" "}
                        so'm
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="bottom-line" />
            </>
          );
        })}
    </div>
  );
};

export default SubStore;

