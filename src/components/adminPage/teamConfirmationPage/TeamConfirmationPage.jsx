import React from 'react';
import s from "./teamConfirmationPage.module.css"
import {OneTeamField} from "../../general/OneTeamField";
import {useDispatch, useSelector} from "react-redux";
import {
    getTeamsListAndSetToStore,
    setFinalList,
    setIsRegistrationOpened,
    updateTeamConfirm
} from "../../../store/slicers/teamsList"
import {useEffect} from "react";
import {PrimaryButton} from "../../general/button/PrimaryButton";
import {makeFinalList, makeRandomTeamList} from "../../../helpers";

export const TeamConfirmationPage = () => {
    const teamsList = useSelector(state => state.teamsListSlice.registrationList)
    const isRegistrationOpened = useSelector(state => state.teamsListSlice.isRegistrationOpened)
    const dispatch = useDispatch()

    const setConfirmedToStore = (id, confirmed) => {
        let payload = {teamNumber: id, confirmed}
        dispatch(updateTeamConfirm(payload))
    }
    const clickHandler = () => {
        dispatch(setIsRegistrationOpened(!isRegistrationOpened))
    }
    const makeTossing = () => {
        let teamsQuantity = prompt("Введите колличество команд в группе")
        console.log(teamsQuantity)
        let finalList = makeFinalList(teamsList)
        let res = makeRandomTeamList(finalList, +teamsQuantity)
        console.log(res)
        dispatch(setFinalList(res))
    }

    // useEffect(() => {
    //     dispatch(getTeamsListAndSetToStore())
    // }, [])

    return (
        <section className={s.confirmSection}>
            <h2 className={s.title}>Team conformation page</h2>
            <div className={s.btnWrapper}>
                {isRegistrationOpened
                   ? <PrimaryButton
                        onClick={clickHandler}
                    >Закрыть регистрацию</PrimaryButton>
                   : <PrimaryButton
                        addClassName={s.btnRegClosed}
                        onClick={clickHandler}
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
