import React from 'react';
import s from "./modal.module.css"

export const Modal = ({isActive, setIsActive, children}) => {

    return (
        <div
            className={isActive ? s.wrapper + " " + s.wrapper__active : s.wrapper}
            onClick={() => {setIsActive(false)}}
        >
            <div
                className={isActive ? s.content + " " + s.content__active : s.content}
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};

