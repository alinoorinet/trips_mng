import { core } from "./core";

export const apiSlice = core.injectEndpoints({
    endpoints(builder) {
        return {
            fetchingTrips: builder.query({
                query: () => `/trips`,
                keepUnusedDataFor: 0
            }),
            fetchingAddTripInit: builder.query({
                query: () => `/trips/add`,
                keepUnusedDataFor: 0
            }),
            storeTrip: builder.mutation({
                query: (data) => ({
                    url: `/trips/store`,
                    method: 'POST',
                    body: data,
                }),
                keepUnusedDataFor: 0
            }),
        }
    },
    overrideExisting: false,
});

export const {
    useFetchingTripsQuery,
    useFetchingAddTripInitQuery,
    useStoreTripMutation,
} = apiSlice
