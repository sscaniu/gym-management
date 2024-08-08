"use client";

import { createSlice } from "@reduxjs/toolkit";
import { ValueProps } from "@/app/components/shared/DateRangePicker";

interface State {
  client: Client;
  clients: Client[];
}

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

const initialState: State = {
  client: {
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
  },
  clients: [],
};

export const clientSlice = createSlice({
  name: "client",
  initialState,
  reducers: {
    change: (state, action) => {
      const { target, value } = action.payload;
      state.client[target] = value;
    },
    create: (state, action) => {
      state.clients = [...state.clients, { ...action.payload }];
      state.client = {
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
    },
  },
});

export const { change, create } = clientSlice.actions;

export default clientSlice.reducer;
