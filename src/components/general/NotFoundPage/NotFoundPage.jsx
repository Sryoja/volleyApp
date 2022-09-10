import React from 'react';
import s from "./NotFoundPage.module.css"
import {Link} from "react-router-dom";

export const NotFoundPage = () => {
    return (
        <div className={s.wrapper}>
            <h1>Page not found</h1>
            <Link to="/">вернуться на главную</Link>
        </div>
    );
};
