import { core } from "./core";

export const apiSlice = core.injectEndpoints({
    endpoints(builder) {
        return {
            fetchingTrips: builder.query({
                query: () => `/trips`,
                keepUnusedDataFor: 0
            }),
            /*deleteCustomer: builder.mutation({
                query: (id) => ({
                    url: `/customer/delete/${id}`,
                    method: 'GET',
                    //body: credential,
                }),
            }),*/
        }
    },
    overrideExisting: false,
});

export const {
    useFetchingTripsQuery
} = apiSlice
