import React from 'react';
import s from "./teamConfirmationPage.module.css"
import {OneTeamField} from "../../general/OneTeamField";
import {useDispatch, useSelector} from "react-redux";
import {
    setFinalList,
    setIsRegistrationOpened,
    updateTeamConfirm
} from "../../../store/slicers/teamsList"
import {PrimaryButton} from "../../general/button/PrimaryButton";
import {makeFinalList, makeRandomTeamList} from "../../../helpers";

export const TeamConfirmationPage = () => {
    const teamsList = useSelector(state => state.teamsListSlice.registrationList)
    const finalList = useSelector(state => state.teamsListSlice.finalList)
    const isRegistrationOpened = useSelector(state => state.teamsListSlice.isRegistrationOpened)
    const dispatch = useDispatch()

    const setConfirmedToStore = (id, confirmed) => {
        let payload = {teamNumber: id, confirmed}
        dispatch(updateTeamConfirm(payload))
    }
    const setRegistrationHandler = () => {
        if(isRegistrationOpened) {
            dispatch(setIsRegistrationOpened(false))
        }else {
            dispatch(setFinalList([]))
            dispatch(setIsRegistrationOpened(true))
            console.log(finalList)}
    }
    const makeTossing = () => {
        let teamsQuantity = prompt("Введите колличество команд в группе")
        let finalList = makeFinalList(teamsList)
        let res = makeRandomTeamList(finalList, +teamsQuantity)
        dispatch(setFinalList(res))
    }

    return (
        <section className={s.confirmSection}>
            <h2 className={s.title}>Подтверждение команд.</h2>
            <div className={s.btnWrapper}>
                {isRegistrationOpened
                   ? <PrimaryButton
                        onClick={setRegistrationHandler}
                    >Закрыть регистрацию</PrimaryButton>
                   : <PrimaryButton
                        addClassName={s.btnRegClosed}
                        onClick={setRegistrationHandler}
                    >Регистрация закрыта</PrimaryButton>
                }
                <PrimaryButton
                    disabled={isRegistrationOpened}
                    onClick={makeTossing}
                >Провести жеребьевку</PrimaryButton>
            </div>
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
