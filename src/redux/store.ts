import { configureStore } from "@reduxjs/toolkit";
import jobReducer from "./jobSlice"; // We'll create this file next

// Define the store with explicit types
export const store = configureStore({
  reducer: {
    jobs: jobReducer, // Jobs filtering reducer
  },
});

// Infer the RootState type from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Infer the AppDispatch type from the store itself
export type AppDispatch = typeof store.dispatch;
