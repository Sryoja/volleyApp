import React from "react"
import {Routes, Route, Link} from "react-router-dom";
import './App.css';
import Header from "./components/header/Header";
import RegistrationPage from "./components/main/registrationPage/RegistrationPage";
import StartPage from "./components/main/startPage/StartPage";
import TossingPage from "./components/main/tossingPage/TossingPage";
import {NotFoundPage} from "./components/general/NotFoundPage/NotFoundPage";
import {ConfirmPage} from "./components/general/ConfirmPage/ConfirmPage";
import {AdminPage} from "./components/adminPage/AdminPage";
import {TeamConfirmationPage} from "./components/adminPage/teamConfirmationPage/TeamConfirmationPage";
import {useEffect} from "react";
import {initializeApp} from "./store/slicers/teamsList";
import {useDispatch} from "react-redux";

function App() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initializeApp())
    }, [])

    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path="/" element={<StartPage/>}/>
                <Route path="registration" element={<RegistrationPage/>}/>
                <Route path="tossing" element={<TossingPage/>}/>
                <Route path="confirm" element={<ConfirmPage/>}/>
                <Route path="admin" element={<AdminPage/>}>
                    <Route path="teams" element={<TeamConfirmationPage/>}/>
                </Route>
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
        </div>
    );
}

export default App;
