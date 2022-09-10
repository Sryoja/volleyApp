import React from 'react';
import s from "./header.module.css"
import logo from "../../img/logo.png"
import {Link, NavLink} from "react-router-dom";

const setActive = ({ isActive }) => isActive ? s.menuLinkActive : s.menuLink
const Header = () => {
    return (
        <header className={s.header}>
            <img src={logo} alt="logo" width="100" className={s.headerLogo}/>
            <ul className={s.menuList}>
                <li className={s.menuItem}><NavLink to="/" className={setActive}>Главная</NavLink></li>
                <li className={s.menuItem}><NavLink to="registration" className={setActive}>Регистрация</NavLink></li>
                <li className={s.menuItem}><NavLink to="tossing" className={setActive}>Жеребьевка</NavLink></li>
                <li className={s.menuItem}><a href="#" className={s.menuLink}>link 2</a></li>
                <li className={s.menuItem}><a href="#" className={s.menuLink}>link 3</a></li>
            </ul>
        </header>
    );
};

export default Header;