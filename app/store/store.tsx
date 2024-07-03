"use client";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import gymReducer from "./features/gym/gymSlice";
import trainerReducer from "./features/trainer/trainerSlice";

const rootReducer = combineReducers({
  gym: gymReducer,
  trainer: trainerReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
