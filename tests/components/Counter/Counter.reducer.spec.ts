import reducer from '../../../src/components/Counter/Counter.reducer';
import { increment, decrement } from '../../../src/components/Counter/Counter.actions';

describe('Counter - Reducer', () => {

  test('should return default state of 0 when called with no arguments', () => {
    const newState = reducer();
    const expectedState = 0;

    expect(newState).toEqual(expectedState);
  });

  test('should return the previous state when called with no action', () => {
    const previousState = 1;
    const newState = reducer(previousState);
    const expectedState = 1;

    expect(newState).toEqual(expectedState);
  });

  test('should return the previous state when called with an unknown action', () => {
    const previousState = -1;
    const action = { type: 'UNKNOWN' };
    const newState = reducer(previousState, action);
    const expectedState = -1;

    expect(newState).toEqual(expectedState);
  });

  test('should return state of 1 when called with action INCREMENT and state is 0', () => {
    const state = 0;
    const action = increment();
    const newState = reducer(state, action);
    const expectedState = 1;

    expect(newState).toEqual(expectedState);
  });

  test('should return state of -1 when called with action DECREMENT and state is 0', () => {
    const state = 0;
    const action = decrement();
    const newState = reducer(state, action);
    const expectedState = -1;

    expect(newState).toEqual(expectedState);
  });

});
