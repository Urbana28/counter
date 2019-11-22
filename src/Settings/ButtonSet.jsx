import React from 'react';
import c from'../App.module.css'

const ButtonSet = ({setValue, disable,error}) => {
    return(<div className={c.setButton}>
        <button className={c.incReset} disabled={ disable || error} onClick={setValue}>set</button>
    </div>)
};

export default ButtonSet;


/*
(buttons[0].disabled !== disable ) ? buttons[1].disabled, buttons[2].disabled  === disable : disable*/
