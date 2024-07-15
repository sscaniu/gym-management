"use client";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import gymReducer from "./features/gym/gymSlice";
import trainerReducer from "./features/trainer/trainerSlice";
import clientReducer from "./features/client/clientSlice";

const rootReducer = combineReducers({
  gym: gymReducer,
  trainer: trainerReducer,
  client: clientReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
