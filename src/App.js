import React from 'react';
import c from './App.module.css'
import Counter from "./Counter/Counter";
import Settings from "./Settings/Settings";
import {addNewMaxValue, addNewStartValue, addNewValue, deleteValue, setValue} from "./reducers/counterReducer";
import {connect} from "react-redux";



class App extends React.Component {
   /* constructor(props) {
        super(props);
        this.state = {
            currentValue: 0,
            maxValue: 5,
          /!*  minValue: 0,*!/
            newMaxValue: 5,
            newMinValue: 0,
            disable: true,
            buttons:[
                {name:'set', id:0},
                {name:'inc', id:1},
                {name:'reset', id:2}
            ]
        };
    }
*/
/*
        componentDidMount() {
        this.restoreState()
        }

    saveState = () => {
        let saveStateAsString = JSON.stringify(this.state);
        localStorage.setItem('our-state', saveStateAsString)
    };

    restoreState = () => {
        let state = {
            currentValue: 0,
            maxValue: 5,
            newMaxValue: 5,
            newMinValue: 0,
            disable: true
        };
        let stateAsString = localStorage.getItem('our-state');
        if(stateAsString !== null) {
                state = JSON.parse(stateAsString)
            }
        this.setState(state)
    };
*/

  addNewValue = () => {
    if (this.props.currentValue < this.props.maxValue) {
      this.props.addNewValue()
    }
 };

  deleteValue = () => {
    this.props.deleteValue()
  };

  addNewMaxValue = (newMax) => {
      this.props.addNewMaxValue(newMax)
  };
  addNewStartValue = (newMin) => {
      this.props.addNewStartValue(newMin)
  };

  setValue = () => {
      this.props.setValue()
  };

render() {

    const error = (this.props.newMinValue < 0 || this.props.newMaxValue <= this.props.newMinValue);
  return (
      <div className='App'>
        <header className={c.mainWrapper}>
          <Counter error={error} disable={this.props.disable} currentValue={this.props.currentValue} maxValue={this.props.maxValue} addNewValue={this.addNewValue} deleteValue={this.deleteValue}/>
          <Settings error={error} disable={this.props.disable} setValue={this.setValue} newMinValue={this.props.newMinValue}
                    newMaxValue={this.props.newMaxValue} addNewMaxValue={this.addNewMaxValue} addNewStartValue={this.addNewStartValue}/>
        </header>
      </div>
  )
}
}

const mapStateToProps = (state) => {
    return {
        currentValue: state.counterBlock.currentValue,
        maxValue: state.counterBlock.maxValue,
        newMaxValue: state.counterBlock.newMaxValue,
        newMinValue: state.counterBlock.newMinValue,
        disable: state.counterBlock.disable
    }
};



export default connect (mapStateToProps,{addNewValue, deleteValue, addNewMaxValue, addNewStartValue,setValue})(App);
