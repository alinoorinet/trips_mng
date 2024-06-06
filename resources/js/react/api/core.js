import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const core = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: '/api',
        prepareHeaders: (headers) => {
            return headers;
        }
    }),
    endpoints: () => ({}),
})
