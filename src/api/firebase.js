// import { getAnalytics } from "firebase/analytics";

import { initializeApp } from "firebase/app";
import {child, get, getDatabase, ref, set} from "firebase/database";

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


export const setTeamToFirebase = (teamNumber, data) => {
    console.log("setting data...")
     return set(ref(database, 'teams/' + teamNumber), data)
}
export const getTeamsListFromFirebase = () => {
    console.log("getting data...")
    return get(child(ref(database), `teams`))
        .then(res => Object.values(res.val()))
}
