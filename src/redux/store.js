import { configureStore } from '@reduxjs/toolkit'

import tasksSlice from '../slices/tasksSlice'

export const store = configureStore({
    reducer: {
        tasksSlice
    },
})

export default store;
