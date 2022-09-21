import React from 'react';
import s from "./teamList.module.css"
import {OneTeamField} from "../OneTeamField";

export const TeamList = ({teamsList, setConfirmedToStore}) => {
    return (
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
    );
};
