import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./root-reducer";
import Logger from "redux-logger"
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"

const persistConfig = {
    key : "root",
    storage
};

const middleware = [Logger]


const persistedReducer = persistReducer(persistConfig,rootReducer);

const store = createStore(persistedReducer, applyMiddleware(...middleware))
const persistor = persistStore(store);


export {store,persistor};

// Logger

// const middleWare = [Logger];
// if(process.env.NODE_ENV === "development"){
//     middleWare.push(Logger)
// }

// const store = createStore(rootReducer, applyMiddleware(...middleWare));
// export default store;
