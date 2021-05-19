import React from "react";
import { useSelector } from "react-redux";
import CloseIcon from '@material-ui/icons/Close';
import "./productModal.css";

import { useDispatch } from "react-redux";
import { showModal, addFood } from "../../store/item/item-action";

const ProductModal = () => {

  const dispatch = useDispatch();

  const {modal} = useSelector((state) => state.cardData);
  const {modalInfo} = useSelector((state) => state.cardData);

  const addFoodCloseModal = () => {
    dispatch(addFood(modalInfo))
    dispatch(showModal(false))
  }

  return (
    <>
      <div
        className={modal ? "modal active" : "modal"}
        onClick={() => dispatch(showModal(false))}
      >
        <div
          className={modal ? "modal__content active" : "modal__content"}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="modal_card_products">
            <div className="modal_product_img">
              <img
              src={modalInfo.image}
              alt="product-image"
              />
            </div>
            <div className="modal_product_info">
              <h2 className="modal_product_label">{modalInfo.label}</h2>
              <div className="modal_product_total">
                <div className="totalInfo">
                  <h4>TotalTime:</h4>
                  <span>{modalInfo.totalTime}</span>
                </div>
                <div className="totalInfo">
                  <h4>TotalWeight:</h4>
                  {/* <span>{`${modalInfo.totalWeight.toFixed(3)} kg`}</span> */}
                  <span>{modalInfo.totalWeight}</span>
                </div>
                <div className="totalInfo">
                  <h4>Calories:</h4>
                  {/* <span>{`${modalInfo.calories.toFixed(3)} cal`}</span> */}
                  <span>{modalInfo.calories}</span>
                </div>
              </div>
              <div className="modal_product_ingredients">
                <div className="food_category">
                  <h3>FoodCategory:</h3>
                  <ol>
                    {modalInfo?.ingredients?.length > 0 && modalInfo.ingredients?.map((category, index) => {
                      return (
                        <li key={index}>{category.foodCategory}</li>
                      )
                    })}
                    </ol>
                </div>
                <div className="food_ingredients">
                  <h3>Ingredients:</h3>
                  {modalInfo?.ingredientLines?.length > 0 && modalInfo.ingredientLines.map((ingre, index) => {
                    return(
                      <span key={index}>{ingre}</span>
                    )
                  })}
                  
                </div>
              </div>
              <div className="add_to_card">
                <button onClick={addFoodCloseModal}>Добавить в корзину за {new Intl.NumberFormat('en-US', {style: 'decimal'}).format(modalInfo.totalWeight)} сум</button>
              </div>
            </div>
          </div>
        </div>
        <div className="close_button">
          <CloseIcon onClick={() => dispatch(showModal(false))} style={{ fontSize: 47 }} className="close_btn"></CloseIcon>
        </div>
      </div>
    </>
  );
};

export default ProductModal;
