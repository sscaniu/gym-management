"use client";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import gymReducer from "./features/gym/gymSlice";

const rootReducer = combineReducers({
  gym: gymReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
