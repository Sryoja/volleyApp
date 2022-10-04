import React, {useState} from 'react';
import s from "./index.module.css"
import {PrimaryButton} from "../../general/button/PrimaryButton";
import {useDispatch} from "react-redux";
import { setTournamentName} from "../../../store/slicers/teamsList";

export const CreateTournament = ({setIsActive}) => {
    const dispatch = useDispatch()
    const [value, setValue] = useState("")

    const createTournament = () => {
        dispatch(setTournamentName(value))
        setValue("")
        setIsActive(false)
    }

    return (
        <div className={s.wrapper}>
            <h4 className={s.title}>Введите название турнира.</h4>
            <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className={s.tournamentInput}
                type="text"
            placeholder="Название турнира"/>
            <PrimaryButton
                addClassName={s.btn}
                onClick={createTournament}
            >Создать турнир</PrimaryButton>
        </div>
    );
};
