import React from 'react';
import s from "./Random.module.css"
import {useSelector} from "react-redux";
import {OneTeamField} from "../../general/OneTeamField";
import {makeRandomTeamList} from "./makeRandomTeamsList";


const TossingPage = () => {

    const teamsList = useSelector(state => state.teamsListSlice.registrationList)

    const teamsListFiltered = teamsList.filter(team => team.confirmed === true)
    const res = makeRandomTeamList(teamsListFiltered, 4)

//-----------------------------------------------------------------------------
    return (
        <section className={s.tossSection}>
            <h2 className={s.title}>Random page</h2>
            <div className={s.groupsWrapper}>
                {res.map((team, idx) => {
                    return <fieldset key={idx} className={s.group}>
                        <legend>Group {idx + 1}</legend>
                        <ul className={s.list}>
                            {team.map((p, idx) => {
                                return (
                                    <OneTeamField
                                        key={p.id}
                                        number={idx + 1}
                                        player1={p.player1}
                                        player2={p.player2}
                                        confirmed={p.confirmed}
                                    />
                                )
                            })}
                        </ul>
                    </fieldset>
                })}

            </div>
        </section>
    );
};

export default TossingPage;