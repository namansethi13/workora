import { configureStore } from "@reduxjs/toolkit";
import themeToggleReducer from '../feature/theme/themeToggleSlice'

export const store = configureStore({
    reducer: {
        theme: themeToggleReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 