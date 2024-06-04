import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const core = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: '/api',
        prepareHeaders: (headers) => {
            /*const access_token = localStorage.getItem('access_token');
            if(access_token)
                headers.set('Authorization', 'Bearer ' + access_token);*/
            //headers.set('X-CSRF-TOKEN', document.querySelector('meta[name="csrf-token"]').getAttribute('content'));
            return headers;
        }
    }),
    endpoints: () => ({}),
})
