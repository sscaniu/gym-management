"use client";

import { createSlice } from "@reduxjs/toolkit";
import { ValueProps } from "@/app/components/shared/DateRangePicker";

interface Client {
  [key: string]: any;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipcode: string;
  method: string | number;
  primary_goal_type?: string | number;
  primary_goal_meeting_frequency?: string | number;
  primary_goal_program_duration: ValueProps;
  primary_goal_details?: string;
  secondary_goal_type?: string | number;
  secondary_goal_meeting_frequency?: string | number;
  secondary_goal_program_duration: ValueProps;
  secondary_goal_details?: string;
  locations: object[] | null;
  trainer: object | null;
}

const initialState: Client = {
  firstname: "",
  lastname: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  state: "",
  zipcode: "",
  method: "",
  primary_goal_type: "",
  primary_goal_meeting_frequency: "",
  primary_goal_program_duration: {
    from: null,
    to: null,
  },
  primary_goal_details: "",
  secondary_goal_type: "",
  secondary_goal_meeting_frequency: "",
  secondary_goal_program_duration: {
    from: null,
    to: null,
  },
  secondary_goal_details: "",
  locations: null,
  trainer: null,
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
