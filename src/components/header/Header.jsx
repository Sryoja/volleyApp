import React from 'react';
import s from "./header.module.css"
import logo from "../../img/logo.png"
import {NavLink} from "react-router-dom";

const setActive = ({ isActive }) => isActive ? s.menuLinkActive : s.menuLink
const Header = () => {
    return (
        <header className={s.header}>
            <img src={logo} alt="logo" width="100" className={s.headerLogo}/>
            <nav className={s.menuList}>
                <NavLink to="/" className={setActive}>Главная</NavLink>
                <NavLink to="registration" className={setActive}>Регистрация</NavLink>
                <NavLink to="tossing" className={setActive}>Жеребьевка</NavLink>
                <NavLink to="admin" className={setActive}>admin</NavLink>
            </nav>
        </header>
    );
};

export default Header;