import React, {useEffect} from 'react';
import s from "./startPage.module.css"
import {useDispatch, useSelector} from "react-redux";
import {getTeamsListAndSetToStore, setTeamsList} from "../../../store/slicers/teamsList";
import {OneTeamField} from "../../general/OneTeamField";


const StartPage = () => {

    const dispatch = useDispatch()
    const teamsList = useSelector(state => state.teamsListSlice.teamsList)

    useEffect(()=>{
        dispatch(getTeamsListAndSetToStore())
    },[])

    return (
        <section className={s.startSection}>
            {!teamsList.length
                ? <h2 className={s.startTitle}>Нет зарегистрированных команд.</h2>
                : <h2 className={s.startTitle}>Список зарегистрированных команд.</h2>
            }
            <ul className={s.list}>
                {teamsList.map(p => {
                    return (
                        <OneTeamField
                            key={p.id}
                            number={p.id + 1}
                            player1={p.player1}
                            player2={p.player2}/>
                    )
                })}
            </ul>
        </section>
    );
};

export default StartPage;