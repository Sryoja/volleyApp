import React from 'react';
import s from "./ConfirmPage.module.css"
import {Link} from "react-router-dom";

export const ConfirmPage = () => {
    return (
        <div className={s.wrapper}>
            <h1>Ваша команда успешно зарегистрирована.</h1>
            <Link to="/">вернуться на главную</Link>
        </div>
    );
};
