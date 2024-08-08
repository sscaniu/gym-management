"use client";

import { createSlice } from "@reduxjs/toolkit";

interface State {
  gym: Gym;
  gyms: Gym[];
}

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

const initialState: State = {
  gym: {
    name: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
    locationSize: null,
    staffSize: null,
    specialty: null,
  },
  gyms: [],
};

export const gymSlice = createSlice({
  name: "gym",
  initialState,
  reducers: {
    change: (state, action) => {
      const { target, value } = action.payload;
      state.gym[target] = value;
    },
    create: (state, action) => {
      state.gyms = [...state.gyms, { ...action.payload }];
    },
  },
});

export const { change, create } = gymSlice.actions;

export default gymSlice.reducer;
