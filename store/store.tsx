import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import sneaker from "./releaseInfo";
import clothing from './ClothingReleaseInfo'

const reducer = combineReducers({
  sneaker,
  clothing,
});
const store = configureStore({
  reducer,
});
export default store;

export type RootState = ReturnType<typeof reducer>