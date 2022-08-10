import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  jokes: [
    "Why did the scarecrow win an award? Because he was outstanding in his field.",
    "What do you do on a remote island? Try and find the TV island it belongs to.",
    "I’m on a whiskey diet. I’ve lost three days already.",
    "Did you hear about the runner who was criticized? He just took it in stride",
    "Which side of the chicken has more feathers? The outside.",
    "What did the mountain climber name his son? Cliff.",
    "Doctor you've got you help me, I'm addicted to twitter. Doctor: I don't follow you.",
    "Why don’t seagulls fly over the bay? Because then they’d be bay-gulls!",
    "How do you make a hankie dance? Put a little boogie in it.",
    "What kind of music do mummy's like? Rap",
    "What is the leading cause of dry skin? Towels",
    "What biscuit does a short person like? Shortbread.",
    "I was fired from the keyboard factory yesterday.  I wasn't putting in enough shifts.",
  ],
};

const uiSlice = createSlice({
  name: "UI",
  initialState: initialState,
  reducers: {
    switchLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
