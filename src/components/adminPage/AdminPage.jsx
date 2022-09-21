import React from 'react';
import s from "./adminPage.module.css"
import {Link, Outlet} from "react-router-dom";

export const AdminPage = () => {
    return (
        <div className={s.adminSection}>
            <nav className={s.nav}>
                <Link
                    to="teams"
                    className={s.link}
                >страница подтверждения команд</Link>
            </nav>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};
