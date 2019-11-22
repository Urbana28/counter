import React from 'react';
import c from '../App.module.css'

const DisplayCount = ({error, disable, currentValue, maxValue}) => {
    return (
        <div className={c.displayCount}>
            {(error && ( <div className={c.warning}> Incorrect value! </div> )) || (!disable && (<div className={c.warning}>Enter values and press'set'</div>))
                || (<div
                    className={(currentValue === maxValue) ? c.active : c.num}>{currentValue}</div>)}

        </div>
    )
};

export default DisplayCount;