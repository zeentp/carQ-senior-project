import { createSlice } from "@reduxjs/toolkit";

export const TimeSlice = createSlice({
  name: "times",
  initialState: {
    time: [],
  },
  reducers: {
    setTime: (state, action) => {
      state.time = action.payload;
    },
  },
});
export default TimeSlice.reducer;

export const { setTime } =
  TimeSlice.actions;
export const getTime = (state) => state.times.time;
