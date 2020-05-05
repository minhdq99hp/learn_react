import React from 'react';
import {connect} from 'react-redux';
import {INCREASE, DECREASE} from '../actions/type';

class Counter extends React.Component {
    render(){
        return <div>
            <p>{this.props.count}</p>
            <button onClick={this.props.handleIncrease}>Increase</button>
            <button onClick={this.props.handleDecrease}>Decrease</button>
        </div>;
    }
}

const mapStateToProps = state => {
    return {
        count: state.counter
    };
}

const mapDispatchToProps = dispatch => {
    return {
        handleIncrease: () => dispatch({type: INCREASE}),
        handleDecrease: () => dispatch({type: DECREASE})
    };
}

const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default CounterContainer;