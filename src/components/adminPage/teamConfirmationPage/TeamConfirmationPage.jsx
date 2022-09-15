import React from 'react';
import s from "./teamConfirmationPage.module.css"
import {OneTeamField} from "../../general/OneTeamField";
import {useDispatch, useSelector} from "react-redux";
import { updateTeamConfirm} from "../../../store/slicers/teamsList"

export const TeamConfirmationPage = () => {
    const teamsList = useSelector(state => state.teamsListSlice.registrationList)
    const dispatch = useDispatch()

    const setConfirmedToStore = (id, confirmed) => {
        let payload = {teamNumber: id, confirmed}
        dispatch(updateTeamConfirm(payload))
    }

    return (
        <section className={s.confirmSection}>
            <h2 className={s.title}>Team conformation page</h2>
            <ul className={s.list}>
                {teamsList.map(p => {
                    return (
                        <OneTeamField
                            key={p.id}
                            id={p.id}
                            number={p.id + 1}
                            player1={p.player1}
                            player2={p.player2}
                            phone={p.phone}
                            confirmed={p.confirmed}
                            setConfirmedToStore={setConfirmedToStore}
                        />
                    )
                })}
            </ul>
        </section>
    );
};
