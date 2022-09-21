import React from 'react';
import s from "./tossing.module.css"
import {useSelector} from "react-redux";
import {OneTeamField} from "../../general/OneTeamField";
import {makeRandomTeamList} from "../../../helpers";


const TossingPage = () => {

    const finalList = useSelector(state => state.teamsListSlice.finalList)
    const isRegistrationOpened = useSelector(state => state.teamsListSlice.isRegistrationOpened)

//-----------------------------------------------------------------------------
    return (
        <section className={s.tossSection}>
            {isRegistrationOpened || !finalList.length
                ?<h2 className={s.title}>Жеребьевка будет доступна после завершения регистрации.</h2>
                :<h2 className={s.title}>Результат жеребьевки:</h2>
            }
            {!isRegistrationOpened && <div className={s.groupsWrapper}>
                    {finalList.map((team, idx) => {
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
                    })
                    }

                </div>
            }
        </section>
    );
};

export default TossingPage;