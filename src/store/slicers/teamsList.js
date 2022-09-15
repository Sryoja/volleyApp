import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {getTeamsListFromFirebase, updateTeamOnFirebase} from "../../api/firebase";

//---------- AsyncThunks -------------------

export const getTeamsListAndSetToStore = createAsyncThunk(
   "registrationList/getTeamsListAndSetToStore",
    async function(_, {rejectWithValue, dispatch}){
        try{
            const teamsList = await getTeamsListFromFirebase()
            if(!teamsList){
                throw new Error("данные с сервера не получены")
            }
            dispatch(setRegistrationList(teamsList))
            dispatch(teamsCountIncrement(teamsList.length))
        } catch (error){
            return rejectWithValue(error.message)
        }
    }
)
export const updateTeamConfirm = createAsyncThunk(
    "registrationList/updateTeamConfirm",
    async function({teamNumber, confirmed}, {rejectWithValue, dispatch}){
        try{
            await updateTeamOnFirebase(teamNumber, confirmed)
            dispatch(setConfirmed({id:teamNumber, confirmed}))
        } catch (error){
            return rejectWithValue(error.message)
        }
    }
)


//---------- Slicers -----------------------

const initialState = {
    registrationList: [],
    finalList: [],
    teamsCount: 0,
    isRegistrationOpened: true
}

const teamsListSlice = createSlice({
    name: "registrationList",
    initialState,
    reducers: {
        setRegistrationList: (state, action) => {
            state.registrationList = action.payload
        },
        setFinalList: (state, action) => {
            state.finalList = action.payload
        },
        addTeam: (state, action) => {
            let pl = action.payload
            let newTeam = {
                id: pl.id,
                player1: pl.player1,
                player2: pl.player2,
                phone: pl.phone,
                confirmed: pl.confirmed
            }
            state.registrationList.push(newTeam)
            state.teamsCount += 1
        },
        teamsCountIncrement: (state,action) => {
            state.teamsCount = action.payload
        },
        setConfirmed: (state, action) => {
            const {id, confirmed} = action.payload
            state.registrationList[id].confirmed = confirmed
        },
        setIsRegistrationOpened: (state, action) => {
            state.isRegistrationOpened = action.payload
        }
    },
    extraReducers: {
        [updateTeamConfirm.fulfilled]: (state, action) => {
            console.log("fulfilled")
        }
    }
})

export const {addTeam,
    setRegistrationList,
    setFinalList,
    teamsCountIncrement,
    setConfirmed,
    setIsRegistrationOpened} = teamsListSlice.actions
export default teamsListSlice.reducer