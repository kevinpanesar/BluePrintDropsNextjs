import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import sneaker from "./releaseInfo";
import clothing from './ClothingReleaseInfo'
import { useDispatch } from "react-redux";

const reducer = combineReducers({
  sneaker,
  clothing,
});
const store = configureStore({
  reducer,
  
});

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store;

export type RootState = ReturnType<typeof reducer>