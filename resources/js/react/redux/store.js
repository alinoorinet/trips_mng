import { configureStore } from '@reduxjs/toolkit'
import taskSlice from './slices/taskSlice'
import { setupListeners } from "@reduxjs/toolkit/query";
import { core } from "../api/core";


export const store = configureStore({
    reducer: {
        [core.reducerPath]: core.reducer,
        tasks: taskSlice,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(core.middleware)
    },
    devTools: true,
})

setupListeners(store.dispatch);
