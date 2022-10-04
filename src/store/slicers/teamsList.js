import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {getDataAPI, registrationAPI} from "../../api/firebaseAPI";

//---------- AsyncThunks -------------------


export const initializeApp = createAsyncThunk(
    "registrationList/getTeamsListAndSetToStore",
    async function (_, {rejectWithValue, dispatch}) {
        try {
            const data = await getDataAPI.getAllData()
            if (!data) {
                throw new Error("данные с сервера не получены")
            }
            dispatch(setRegistrationList(data.regList))
            dispatch(setCurrentTournamentName(data.tournamentName))
            dispatch(teamsCountIncrement(data.regList.length))
            dispatch(setIsRegistrationOpened(data.regIsOpened))
            if(data.finalList){
                dispatch(setFinalListToStore(data.finalList))
            }
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)
export const updateTeamConfirm = createAsyncThunk(
    "registrationList/updateTeamConfirm",
    async function ({teamNumber, confirmed}, {rejectWithValue, dispatch}) {
        try {
            await registrationAPI.updateTeamConfirmation(teamNumber, confirmed)
            dispatch(setConfirmed({id: teamNumber, confirmed}))
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)
export const setFinalList = createAsyncThunk(
    "registrationList/setFinalList",
    async function ({finalList}, {rejectWithValue, dispatch}) {
        console.log(finalList)
        try {
            await registrationAPI.setFinalTeamsList(finalList)
            dispatch(setFinalListToStore(finalList))
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)
export const setTournamentName = createAsyncThunk(
    "registrationList/setTournamentName",
    async function (name, {rejectWithValue, dispatch}) {
        try {
            await registrationAPI.setTournamentName(name)
            dispatch(setCurrentTournamentName(name))
            await registrationAPI.setRegIsOpened(true)
            dispatch(setIsRegistrationOpened(true))
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)
export const setRegistration = createAsyncThunk(
    "registrationList/setRegistration",
    async function ({isOpened}, {rejectWithValue, dispatch}) {
        try {
            await registrationAPI.setRegIsOpened(isOpened)
            dispatch(setIsRegistrationOpened(isOpened))
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)


//---------- Slicers -----------------------

const initialState = {
    currentTournamentName: "",
    registrationList: [],
    finalList: [],
    teamsCount: 0,
    isRegistrationOpened: true
}

const teamsListSlice = createSlice({
    name: "registrationList",
    initialState,
    reducers: {
        setCurrentTournamentName: (state, action) => {
            state.currentTournamentName = action.payload
        },
        setRegistrationList: (state, action) => {
            state.registrationList = action.payload
        },
        setFinalListToStore: (state, action) => {
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
        teamsCountIncrement: (state, action) => {
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

export const {
    addTeam,
    setCurrentTournamentName,
    setRegistrationList,
    setFinalListToStore,
    teamsCountIncrement,
    setConfirmed,
    setIsRegistrationOpened
} = teamsListSlice.actions
export default teamsListSlice.reducer