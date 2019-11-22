import React from 'react';
import DisplaySet from "./DisplaySet";
import ButtonSet from "./ButtonSet";
import c from'../App.module.css'

const Settings = ({newMaxValue, newMinValue, addNewMaxValue, addNewStartValue, setValue, disable,buttons, error}) => {

        return ( <div className={c.displayBlock}>
            <DisplaySet newMinValue={newMinValue} newMaxValue={newMaxValue} addNewMaxValue={addNewMaxValue} addNewStartValue={addNewStartValue}/>
            <ButtonSet  error={error} buttons={buttons} disable={disable} setValue={setValue} />
        </div>)

};

export default Settings;