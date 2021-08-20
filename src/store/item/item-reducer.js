import { ITEM_TYPE } from "./item-type";
import { addItemToCard ,decareaseItemToCard ,removeItemFromCard, promaCodeMinusCost } from "./item-utils";

const initialState = {
  food:[],
  user:[],
  foods:[], 
  modal: false,
  modalInfo : "",

};

const cardData = (state = initialState, action) => {
  const payload = action.payload
  switch (action.type) {
      case ITEM_TYPE.ADD_FOOD:
        return {
          ...state,
          food: addItemToCard(state.food, payload)

        };

      case ITEM_TYPE.DECAREASE_FOOD:
        return {
          ...state,
          food: decareaseItemToCard(state.food, payload)
  
        };

        
        case ITEM_TYPE.REMOVE_FOOD:
          return {
            ...state,
            food: removeItemFromCard(state.food, payload)
            
          };  
          
        case ITEM_TYPE.USER_DATA:
          return {
            ...state,
            user:state.user = payload
    
          };  

        case ITEM_TYPE.FOODS_DATA:
          return {
            ...state,
            foods: payload
    
          };
          
        case ITEM_TYPE.PROMO_CODE:
          return {
            ...state,
            food: promaCodeMinusCost(state.food, payload)
    
          };  
        
        case ITEM_TYPE.SHOW_MODAL:
            return{
                ...state,
                modal: payload
            };
        case ITEM_TYPE.MODAL_CARD:
            return{
                ...state,
                modalInfo: payload

            };
        case ITEM_TYPE.EMPTY_CARD:
          return {
            ...state,
            food: payload
          }  

        default:
          return state;
  }
};
export default cardData;
