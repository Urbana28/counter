import React from "react";
import c from '../App.module.css'


const Buttons = ({currentValue, maxValue, error, disable, addNewValue, deleteValue}) => {
    return (
        <div className={c.buttons}>
            <button className={c.incReset} disabled = {currentValue === maxValue || error || !disable} onClick={() => addNewValue()}>inc</button>
            <button className={ c.incReset} disabled={error || !disable} onClick={() => deleteValue()}>reset</button>
        </div>
    )
};

export default Buttons;