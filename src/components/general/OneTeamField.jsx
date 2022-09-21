import React, {useState} from 'react';
import s from "./oneTeamFiled.module.css"
import {PrimaryButton} from "./button/PrimaryButton";

export const OneTeamField = ({player1, player2, number, phone, confirmed, id, setConfirmedToStore}) => {

    const toggleConfirm = () => {
        setConfirmedToStore(id, !confirmed)
    }


    const cl = `${confirmed ? "" : s.denied}`

    return (<li className={`${s.listItem} ${cl}`}>
        <span>{number}</span>
        <span className={s.itemSpan}>{player1}</span>
        <span className={s.itemSpan}>{player2}</span>
        {phone && <div className={s.itemExtra}>
            <span className={s.phone}>{phone}</span>
                {confirmed
                    ? <PrimaryButton
                        addClassName={s.itemBtn}
                        onClick={toggleConfirm}
                    >Отклонить</PrimaryButton>
                    : <PrimaryButton
                        addClassName={s.itemBtn}
                        onClick={toggleConfirm}
                    >Подтвердить</PrimaryButton>
                }
        </div>}
    </li>)
};

