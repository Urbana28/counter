const ADD_NEW_VALUE = 'ADD_NEW_VALUE';
const DELETE_VALUE = 'DELETE_VALUE';
const ADD_NEW_MAX_VALUE = 'ADD_NEW_MAX_VALUE';
const ADD_NEW_START_VALUE = 'ADD_NEW_START_VALUE';
const SET_VALUE = 'SET_VALUE';



let initialState = {
    currentValue: 0,
    maxValue: 5,
    newMaxValue: 5,
    newMinValue: 0,
    disable: true
};

export const counterReducer = (state=initialState, action) => {
    switch(action.type) {
        case ADD_NEW_VALUE:
        return {
            ...state,
            currentValue: state.currentValue + 1
        };
        case DELETE_VALUE:
            return {
                ...state,
                currentValue: state.newMinValue,

            };
        case ADD_NEW_MAX_VALUE:
            return {
                ...state,
                newMaxValue: action.newMax,
                disable: false
            };
        case ADD_NEW_START_VALUE:
            return {
                ...state,
                newMinValue: action.newMin,
                disable: false
            };
        case SET_VALUE:
            return {
                ...state,
                currentValue:state.newMinValue,
                maxValue:state.newMaxValue,
                disable: true
            };
        default:
            return state
    }
};

export const addNewValue = () => {
    return {type: ADD_NEW_VALUE}
};
export const deleteValue = () => {
    return {type: DELETE_VALUE}
};
export const addNewMaxValue = (newMax) => {
    return {type: ADD_NEW_MAX_VALUE, newMax}
};
export const addNewStartValue = (newMin) => {
    return {type: ADD_NEW_START_VALUE, newMin}
};
export const setValue = () => {
    return {type: SET_VALUE}
};