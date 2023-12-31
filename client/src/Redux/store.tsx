import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import searchSlice from './slice/search.slice'
import loadingSlice from './slice/loading.slice'

export const store = configureStore({
    reducer: {
        search: searchSlice,
        loading: loadingSlice
    },
    devTools: true
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
setupListeners(store.dispatch)