import React, {useEffect, useState} from 'react';
import s from "./regostrationPage.module.css"
import MyFormWithFormik from "../../MyFormWithFormik/MyFormWithFormik";
import {setTeamToFirebase} from "../../../api/firebase";
import {addTeam} from "../../../store/slicers/teamsList";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

const RegistrationPage = () => {
    const teamsCount = useSelector(state => state.teamsListSlice.teamsCount)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [newTeam, setNewTeam] = useState(null)

    const getNewTeam = (newTeam) =>{
        setNewTeam(newTeam)
    }

    useEffect(() => {
        if(newTeam){
            setTeamToFirebase(teamsCount, newTeam).then(() => {
                dispatch(addTeam(newTeam))
                navigate("/confirm")
            })
        }
    }, [newTeam])


    return (
        <section className={s.regSection}>
                <MyFormWithFormik getNewTeam={getNewTeam}/>
        </section>
    );
};

export default RegistrationPage;