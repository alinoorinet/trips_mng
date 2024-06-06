import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    trips: [],
    currentTab: 'home'
}

export const tripSlice = createSlice({
    name: 'trips',
    initialState,
    reducers: {
        addTrip: (state, action) => {
            state.trips = [...state.trips, action.payload.trip]
        },
        updateTrips: (state, action) => {
            state.trips = action.payload.trips
        },
        setTab: (state, action) => {
            state.currentTab = action.payload.currentTab
        },
    },
})

// Action creators are generated for each case reducer function
export const { updateTrips, addTrip, setTab } = tripSlice.actions

export default tripSlice.reducer
