import React from 'react';
import s from "./regostrationPage.module.css"
import MyFormWithFormik from "../../MyFormWithFormik/MyFormWithFormik";

const RegistrationPage = () => {
    return (
        <section className={s.regSection}>
                <MyFormWithFormik/>
        </section>
    );
};

export default RegistrationPage;