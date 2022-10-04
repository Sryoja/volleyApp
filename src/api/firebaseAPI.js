// import { getAnalytics } from "firebase/analytics";

import { initializeApp } from "firebase/app";
import {child, get, getDatabase, ref, set, update} from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDDW_LJMcnGsCkvagLTujtdNG0beBlPz2U",
    authDomain: "volleyapp-c8d85.firebaseapp.com",
    databaseURL: "https://volleyapp-c8d85-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "volleyapp-c8d85",
    storageBucket: "volleyapp-c8d85.appspot.com",
    messagingSenderId: "464237547897",
    appId: "1:464237547897:web:def127adef9f2ba28d5fa8",
    measurementId: "G-TYDSFKRNZB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
// const analytics = getAnalytics(app);

const TOURNAMENT_NAME = "qwerty"
const REGISTRATION_LIST = "regList"
const FINAL_LIST = "finalList"

export const registrationAPI = {
    regNewTeam: (teamNumber, data) => {
        console.log("setting data to firebase...")
        return set(ref(database, TOURNAMENT_NAME+ "/" +REGISTRATION_LIST+ "/" +teamNumber), data)
    },
    updateTeamConfirmation: (teamNumber, payload) => {
        console.log("updating on firebase....")
        const updates ={}
        updates[TOURNAMENT_NAME+ "/" +REGISTRATION_LIST+ "/" +teamNumber+ "/confirmed"] = payload
        return update(ref(database), updates).then(() => console.log("updated"))
    },
    setTournamentName: (name) => {
        console.log("setting data to firebase...")
        return set(ref(database, TOURNAMENT_NAME+ "/tournamentName"), name)
    },
    setFinalTeamsList: (data) => {
        console.log("setting final teams list to firebase...")
        return set(ref(database, TOURNAMENT_NAME+ "/" +FINAL_LIST), data)
    },
    setRegIsOpened: (isOpened) => {
        console.log("setting RegIsOpened  to firebase...")
        return set(ref(database, TOURNAMENT_NAME+ "/regIsOpened"), isOpened)
    }

}

export const getDataAPI = {
    getAllData: () => {
        console.log("getting data from firebase...")
        return get(child(ref(database), TOURNAMENT_NAME))
            .then(res => res.val())
    },
    getRegList: () => {
        console.log("getting regList from firebase...")
        return get(child(ref(database), TOURNAMENT_NAME+ "/" +REGISTRATION_LIST))
            .then(res => console.log(Object.values(res.val())))
    },
    getTournamentName: () => {
        console.log("getting tournament name from firebase...")
        return get(child(ref(database), TOURNAMENT_NAME))
            .then(res => res.val())
    }
}


//-----------------------------------------------------------------








