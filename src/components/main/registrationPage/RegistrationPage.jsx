import React, {useEffect, useState} from 'react';
import s from "./regostrationPage.module.css"
import TeamRegistrationForm from "../../MyFormWithFormik/TeamRegistrationForm";
import {addTeam} from "../../../store/slicers/teamsList";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {registrationAPI} from "../../../api/firebaseAPI";

const RegistrationPage = () => {

    const teamsCount = useSelector(state => state.teamsListSlice.teamsCount)
    const isRegistrationOpened = useSelector(state => state.teamsListSlice.isRegistrationOpened)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [newTeam, setNewTeam] = useState(null)

    const getNewTeam = (newTeam) =>{
        setNewTeam(newTeam)
    }

    useEffect(() => {
        if(newTeam){
            registrationAPI.regNewTeam(teamsCount, newTeam).then(() => {
                dispatch(addTeam(newTeam))
                navigate("/confirm")
            })
        }
    }, [newTeam])


    return (
        <section className={s.regSection}>
            {isRegistrationOpened
                ?<TeamRegistrationForm getNewTeam={getNewTeam}/>
                :<h2>Регистрация закрыта.</h2>
            }
        </section>
    );
};

export default RegistrationPage;