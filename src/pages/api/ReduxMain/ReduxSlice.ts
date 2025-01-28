import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CountryState } from "../Interfaces/MInter";

const isClient =
  typeof window !== "undefined" && typeof window.localStorage !== "undefined";

const storedCountry = isClient ? localStorage.getItem("country") : null;
const initialState: CountryState = {
  country: storedCountry || "", 
};

const MainReducer = createSlice({
  name: "mainReducer",
  initialState,
  reducers: {
    addCountry: (state, action: PayloadAction<string>) => {
      state.country = action.payload;
      if (isClient) {
        localStorage.setItem("country", state.country);
      }
    },
  },
});

export const { addCountry } = MainReducer.actions;
export const mainReducer = MainReducer.reducer;
