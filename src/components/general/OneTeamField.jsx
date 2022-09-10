import React from 'react';
import s from "./oneTeamFiled.module.css"

export const OneTeamField = ({player1, player2, number}) => {
        return (
            <li className={s.listItem}><span>{number}</span><span className={s.itemSpan}>{player1}</span><span
                className={s.itemSpan}>{player2}</span></li>
        )
};

