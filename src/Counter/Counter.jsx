import React from 'react';
import c from '../App.module.css'
import Buttons from "./Buttons";
import DisplayCount from "./DisplayCount";

class Counter extends React.Component {

    constructor (props){
        super(props);
        this.props = props;

    };


render() {
    return (
        <div className={c.displayBlock}>
            <DisplayCount error={this.props.error} disable={this.props.disable} currentValue={this.props.currentValue} maxValue={this.props.maxValue}/>
            <Buttons error={this.props.error} disable={this.props.disable} currentValue={this.props.currentValue}
                     maxValue={this.props.maxValue} addNewValue={this.props.addNewValue} deleteValue={this.props.deleteValue}/>
        </div>

    )
}
}

export default Counter;