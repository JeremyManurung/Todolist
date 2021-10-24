import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
// import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import todoSlice from "./todoSlice";

const reducers = combineReducers({
    todo: todoSlice
})

const persistConfig = {
    key:'root',
    storage: storage
}

const persistedReducer = persistReducer (persistConfig, reducers)

const store = configureStore({reducer:persistedReducer})
const persistor = persistStore(store)

export {store, persistor}