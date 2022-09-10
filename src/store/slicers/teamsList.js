import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {getTeamsListFromFirebase} from "../../api/firebase";

//---------- AsyncThunks -------------------

export const getTeamsListAndSetToStore = createAsyncThunk(
   "teamsList/getTeamsListAndSetToStore",
    async function(_, {rejectWithValue, dispatch}){
        try{
            const teamsList = await getTeamsListFromFirebase()
            if(!teamsList){
                throw new Error("данные с сервера не получены")
            }
            dispatch(setTeamsList(teamsList))
            dispatch(teamsCountIncrement(teamsList.length))
        } catch (error){
            return rejectWithValue(error.message)
        }
    }
)


//---------- Slicers -----------------------

const initialState = {
    teamsList: [],
    teamsCount: 0
}

const teamsListSlice = createSlice({
    name: "teamsList",
    initialState,
    reducers: {
        setTeamsList: (state, action) => {
            state.teamsList = action.payload
        },
        addTeam: (state, action) => {
            let pl = action.payload
            let newTeam = {
                id: pl.id,
                player1: pl.player1,
                player2: pl.player2,
                phone: pl.phone
            }
            state.teamsList.push(newTeam)
            state.teamsCount += 1
        },
        teamsCountIncrement: (state,action) => {
            state.teamsCount = action.payload
        }
    }
})

export const {addTeam, setTeamsList, teamsCountIncrement} = teamsListSlice.actions
export default teamsListSlice.reducer