"use client";

import { createSlice } from "@reduxjs/toolkit";

interface State {
  trainer: Trainer;
  trainers: Trainer[];
}

interface Trainer {
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

const initialState: State = {
  trainer: {
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
  },
  trainers: [],
};

export const trainerSlice = createSlice({
  name: "trainer",
  initialState,
  reducers: {
    change: (state, action) => {
      const { target, value } = action.payload;
      state.trainer[target] = value;
    },
    create: (state, action) => {
      state.trainers = [...state.trainers, { ...action.payload }];
      state.trainer = {
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
    },
  },
});

export const { change, create } = trainerSlice.actions;

export default trainerSlice.reducer;
