import { Component } from "react";
import classes from './Counter.module.css';
import { useSelector, useDispatch, connect } from "react-redux";

class Counter_ClassBased extends Component {

    /**Incremens the counter */
    incrementHandler() {
        this.props.increment();
    }
    /**Derements the counter */
    decrementHandler() {
        this.props.decrement();
    }

    /**Toggles the counters visibility to on and off */
    toggleCounterHandler() {
        
    }

  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className={classes.value}> {this.props.counter} </div>
        <div>
          <button onClick={this.incrementHandler.bind(this)}>Increment</button>
          <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
        </div>
        <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
      </main>
    );
  }
}
const mapStateToProps = state => {
    return {
      counter: state.counter
    };
}
const mapDispatchToProps = dispatch => {
    return {
        increment: () => dispatch({ type: 'increment' }),
        decrement: () => dispatch({type: 'decrement'}),
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(Counter_ClassBased);