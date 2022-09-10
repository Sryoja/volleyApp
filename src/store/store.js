import {configureStore} from '@reduxjs/toolkit'
import teamsListSlice from "./slicers/teamsList"

const store = configureStore({
    reducer: {
        teamsListSlice
    }
})

export default store