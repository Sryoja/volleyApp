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
// const TOURNAMENT_NAME = "tournamentName"


export const setTournamentNameOnFB = (name) => {
    console.log("setting data to firebase...")
    return set(ref(database, TOURNAMENT_NAME +'/'), name)
}

export const setTeamToFirebase = (teamNumber, data) => {
    console.log("setting data to firebase...")
     return set(ref(database, `${TOURNAMENT_NAME} '/' ${REGISTRATION_LIST} '/' ${teamNumber}`), data)
}
export const getTeamsListFromFirebase = () => {
    console.log("getting data from firebase...")
    return get(child(ref(database), `${TOURNAMENT_NAME}' / '${REGISTRATION_LIST}`))
        .then(res => {
            console.log(res.val())
            Object.values(res.val())
        })
}
export const getTournamentNameFromFirebase = () => {
    console.log("getting tournament name from firebase...")
    return get(child(ref(database), TOURNAMENT_NAME))
        .then(res => res.val())
}
export const updateTeamOnFirebase = (teamNumber, payload) => {
    console.log("updating on firebase....")
    const updates ={}
    updates[REGISTRATION_LIST + '/' + teamNumber + '/confirmed'] = payload
    return update(ref(database), updates).then(() => console.log("updated"))
}
export const setFinalTeamsListToFirebase = (data) => {
    console.log("setting final teams list to firebase...")
    return set(ref(database, FINAL_LIST), data)
}