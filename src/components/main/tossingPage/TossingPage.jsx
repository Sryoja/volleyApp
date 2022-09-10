import React from 'react';
import s from "./tossingPage.module.css"
import {useSelector} from "react-redux";
import {OneTeamField} from "../../general/OneTeamField";


const TossingPage = () => {

    const teamsList = useSelector(state => state.teamsListSlice.teamsList)
console.log(teamsList)
    return (
        <section className={s.tossSection}>
            <h2 className={s.title}>Результаты жеребьевки</h2>
            <div className={s.groupsWrapper}>
                <fieldset className={s.group}>
                    <legend>Group 1</legend>
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
                </fieldset>
                <fieldset className={s.group}>
                    <legend>Group 2</legend>
                    <ul className={s.list}>
                        {/*{tempPlayers.map(p => {*/}
                        {/*    return (*/}
                        {/*        <ListItem*/}
                        {/*            player1={p.player1}*/}
                        {/*            player2={p.player2}/>*/}
                        {/*    )*/}
                        {/*})}*/}
                    </ul>
                </fieldset>
            </div>
        </section>
    );
};

export default TossingPage;