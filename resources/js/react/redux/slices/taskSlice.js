import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    tasks: [],
    masks: []
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await client.get('/fakeApi/posts')
    return response.data
})

export const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        updateTasks: (state, action) => {
            state.tasks = action.payload.tasks
        },
    },
})

// Action creators are generated for each case reducer function
export const { updateTasks } = taskSlice.actions

export default taskSlice.reducer
