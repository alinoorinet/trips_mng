import { core } from "./core";

export const apiSlice = core.injectEndpoints({
    endpoints(builder) {
        return {
            fetchingTasks: builder.query({
                query: () => `/tasks`,
                keepUnusedDataFor: 0
            }),
            assignToTrip: builder.mutation({
                query: (data) => ({
                    url: `/tasks/assign`,
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
    useFetchingTasksQuery,
    useAssignToTripMutation,
} = apiSlice
