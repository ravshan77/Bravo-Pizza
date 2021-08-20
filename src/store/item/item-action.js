import { ITEM_TYPE } from "./item-type";
// add product
export const addFood = (item) => ({
  type:ITEM_TYPE.ADD_FOOD,
  payload:item,
});

// remove product
export const decreaseFood = (item) =>({
  type: ITEM_TYPE.DECAREASE_FOOD,
  payload:item,
})

// all url product
export const foods = (food) => ({
  type: ITEM_TYPE.FOOD_FOODS,
  payload: food,
})

// delete product
export const removeFood = (item) => ({
  type: ITEM_TYPE.REMOVE_FOOD,
  payload: item,
})

// clear store products
export const emptyCard = (item) => ({
  type:ITEM_TYPE.EMPTY_CARD,
  payload:item
})

// user dates
export const userData = (item) => ({
  type: ITEM_TYPE.USER_DATA,
  payload: item,
})

// product data
export const foodsData = (item) => ({
  type: ITEM_TYPE.FOODS_DATA,
  payload: item,
})

// store proma Code
export const promaCode = (item) => ({
  type: ITEM_TYPE.PROMO_CODE,
  payload: item,
})

// toggle modal show
export const showModal = (item) => ({
  type: ITEM_TYPE.SHOW_MODAL,
  payload: item,
})

// modal card data
export const modalCard = (item) => ({
  type: ITEM_TYPE.MODAL_CARD,
  payload: item,
})


