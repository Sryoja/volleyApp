import React, {useState} from 'react';
import s from "./adminPage.module.css"
import {Link, Outlet} from "react-router-dom";
import {Modal} from "../general/modal/Modal";
import {PrimaryButton} from "../general/button/PrimaryButton";
import {CreateTournament} from "./createTournament/CreateTournament";
import {useSelector} from "react-redux";

export const AdminPage = () => {



    const [modalActive, setModalActive] = useState(false)

    return (
        <div className={s.adminSection}>
            <nav className={s.nav}>
                <Link
                    to="teams"
                    className={s.link}
                >страница подтверждения команд</Link>
            </nav>

            <PrimaryButton
                onClick={()=> setModalActive(true)}
            >Создать турнир</PrimaryButton>
            <Modal
                isActive={modalActive}
                setIsActive={setModalActive}
            >
                <CreateTournament setIsActive={setModalActive}/>
            </Modal>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};
