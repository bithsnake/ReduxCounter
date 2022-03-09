import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import classes from './Counter.module.css';
import { counterActions } from '../store/counterSlice';
import { playAudio } from '../tools/tools';

// useStore = get access to the whole sotr
// useSelector get access to a part of a state managed by the store
// connect is used by classbased components, used as a wrapper of our component to connect the class component to the store

const Counter = () => {
  /*
      auto sets up a subscription to the reux store for this component,
      so the component will be updated and get the latest counter value
      whenever that data changes in the redux store
  
      changes to the reux store causea automatically the cpo,ponent to be re-excecuted
  
      react redux also automatically clears the subscription if the component gets unmounted
   */
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);
  const showCounter = useSelector(state => state.counter.showCounter);
  const increaseByRef = useRef(null);
  const [rangeValue, setRangeValue] = useState(0);

  useEffect(() => {
    console.log("checking counter");
    if (counter <= 0) {
      dispatch(counterActions.resetCounter());
    }
  }, [counter, dispatch]);
  

  const updateValue = () => {
    console.log("updating value: ", increaseByRef.current.value);
    setRangeValue(() => increaseByRef.current.value);
  }

  const toggleCounterhandler = () => { dispatch(counterActions.toggleShowCounter()); playAudio(0.5); }
  const incrementCounter = () => { dispatch(counterActions.incrementCounter()); playAudio(1.8);}
  const decrementCounter = () => { if (counter <= 0) return; dispatch(counterActions.decrementCounter()); playAudio(); }
  const increaseHandler = () => dispatch(counterActions.increaseCounter(Number(increaseByRef.current.value )));
  
  return (
    <main className={classes.counter}>
      <h1>Redux counter</h1>
      <div className={classes.value}>{counter}</div>
      {
        showCounter &&
        <>
          <div>
            <span><button onClick={incrementCounter}>Increment</button></span>
            <span><button onClick={decrementCounter}>Decrement</button></span>
          </div>
          <div>
            <h2 htmlFor="">{rangeValue}</h2>
            <input onChange={updateValue} defaultValue={rangeValue} ref={increaseByRef} min={0} max={9999} type="range" />
          </div>
            <span><button onClick={increaseHandler}>Increase by 5</button></span>
        </>
      
      }
      <button onClick={toggleCounterhandler}>Toggle counter</button>
    </main>
  );
}
export default Counter;