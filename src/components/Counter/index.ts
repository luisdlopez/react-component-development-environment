import Counter from './Counter';
import { decrement, increment, IActionSignature } from './Counter.actions';
import reducer from './Counter.reducer';

const CounterWrapper = {
  Counter,
  reducer,
  actions: {
    decrement,
    increment,
  },
};

export { CounterWrapper };
export default CounterWrapper;
