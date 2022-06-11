import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    // reducers here
  },
  devTools: true,
});

export default store;

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
