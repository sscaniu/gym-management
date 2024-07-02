"use client";

import { createSlice } from "@reduxjs/toolkit";

interface Gym {
  [key: string]: any;
  name: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipcode: string;
  locationSize: object | null;
  staffSize: object | null;
  specialty: object[] | null;
}

const initialState: Gym = {
  name: "",
  phone: "",
  address: "",
  city: "",
  state: "",
  zipcode: "",
  locationSize: null,
  staffSize: null,
  specialty: null,
};

export const gymSlice = createSlice({
  name: "gym",
  initialState,
  reducers: {
    change: (state, action) => {
      const { target, value } = action.payload;
      state[target] = value;
    },
  },
});

export const { change } = gymSlice.actions;

export default gymSlice.reducer;
