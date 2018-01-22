import { DECREMENT, INCREMENT } from './Counter.actions';

const DEFAULT_STATE = 0;

export default function reducer(state?: number, action?: any): number {
  if (action) {
    switch (action.type) {
      case INCREMENT:
        return state + 1;
      case DECREMENT:
        return state - 1;
      default:
        return state ? state : DEFAULT_STATE;
    }
  } else {
    return state ? state : DEFAULT_STATE;
  }
}
