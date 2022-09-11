import React from 'react';
import s from "./Random.module.css"
import {useSelector} from "react-redux";
import {OneTeamField} from "../../general/OneTeamField";
import {makeRandomTeamList} from "./makeRandomTeamsList";

const teams = [
    {
        id: 1,
        player1: "1111111111",
        player2: "11111"
    },
    {
        id: 2,
        player1: "22222",
        player2: "2222222222"
    },
    {
        id: 3,
        player1: "3333",
        player2: "33333332"
    },
    {
        id: 4,
        player1: "44444",
        player2: "4444444"
    },
    {
        id: 5,
        player1: "555555",
        player2: "55555555555"
    },
    {
        id: 6,
        player1: "666666666",
        player2: "666666666666"
    },
    {
        id: 7,
        player1: "7777777777",
        player2: "7777777"
    },
    {
        id: 8,
        player1: "7777777777",
        player2: "7777777"
    },
    {
        id: 9,
        player1: "7777777777",
        player2: "7777777"
    },
    {
        id: 10,
        player1: "7777777777",
        player2: "7777777"
    },
    {
        id: 11,
        player1: "7777777777",
        player2: "7777777"
    },
    {
        id: 12,
        player1: "7777777777",
        player2: "7777777"
    },
    {
        id: 13,
        player1: "7777777777",
        player2: "7777777"
    },
    {
        id: 14,
        player1: "7777777777",
        player2: "7777777"
    },
]


const Random = () => {

    const teamsList = useSelector(state => state.teamsListSlice.teamsList)
    const res = makeRandomTeamList(teamsList, 2)

//-----------------------------------------------------------------------------
    return (
        <section className={s.tossSection}>
            <h2 className={s.title}>Random page</h2>
            <div className={s.groupsWrapper}>
                {res.map((team, idx) => {
                    return <fieldset key={idx} className={s.group}>
                        <legend>Group {idx+1}</legend>
                        <ul className={s.list}>
                            {team.map((p, idx) => {
                                return (
                                    <OneTeamField
                                        key={p.id}
                                        number={idx + 1}
                                        player1={p.player1}
                                        player2={p.player2}/>
                                )
                            })}
                        </ul>
                    </fieldset>
                })}

            </div>
        </section>
    );
};

export default Random;