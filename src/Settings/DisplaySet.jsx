import React from 'react';
import c from'../App.module.css'

const DisplaySet = ({addNewMaxValue, addNewStartValue, newMaxValue, newMinValue}) => {

    let onAddMaxValue = (e) => {
        let newMax = +e.currentTarget.value;
        addNewMaxValue(newMax)
    };

    let onAddStartValue = (e) => {
        let newMin = +e.currentTarget.value;
        addNewStartValue(newMin)
    };

    return(<div className= {c.displaySet}>
        <div ><div className={c.value}>max value: </div><input  onChange={(e) => onAddMaxValue(e)} className={((newMaxValue < 0 || newMaxValue < newMinValue || newMaxValue === newMinValue) && c.error + ' ' + c.input) || c.input} type="number" value={newMaxValue}/></div>
        <div ><div className={c.value}>start value: </div><input  onChange={(e) => onAddStartValue(e)} className={((newMinValue < 0 || newMaxValue < newMinValue || newMinValue === newMaxValue) && c.error + ' ' + c.input) || c.input} type="number" value={newMinValue}/></div>

    </div>)
};

export default DisplaySet;

