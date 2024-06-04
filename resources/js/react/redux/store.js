import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice'
import { setupListeners } from "@reduxjs/toolkit/query";
import { core } from "../api/core";


export const store = configureStore({
    reducer: {
        [core.reducerPath]: core.reducer,
        counter: counterReducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(core.middleware)
    },
    devTools: true,
})

setupListeners(store.dispatch);
