"use client";

import { createSlice } from "@reduxjs/toolkit";

interface Gym {
  [key: string]: any;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipcode: string;
  specialty: object[] | null;
  locations: object[] | null;
}

const initialState: Gym = {
  firstname: "",
  lastname: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  state: "",
  zipcode: "",
  specialty: null,
  locations: null,
};

export const trainerSlice = createSlice({
  name: "trainer",
  initialState,
  reducers: {
    change: (state, action) => {
      const { target, value } = action.payload;
      state[target] = value;
    },
  },
});

export const { change } = trainerSlice.actions;

export default trainerSlice.reducer;
