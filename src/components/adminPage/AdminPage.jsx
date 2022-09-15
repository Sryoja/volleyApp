import React from 'react';
import s from "./adminPage.module.css"
import {Link, Outlet} from "react-router-dom";
import {updateTeamOnFirebase} from "../../api/firebase";

export const AdminPage = () => {


    return (
        <div className={s.adminSection}>
            <h2 className={s.title}>Admin Page</h2>
            <Link to="teams">teams</Link>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};
