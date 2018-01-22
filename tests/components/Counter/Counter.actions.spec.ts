import {
  INCREMENT,
  DECREMENT,
  increment,
  decrement,
} from '../../../src/components/Counter/Counter.actions';

describe('Counter - actions', () => {

  describe('increment', () => {

    test('should return an action with type INCREMENT when called', () => {
      const action = increment();
      const expectedAction = {
        type: INCREMENT,
      };

      expect(action).toEqual(expectedAction);
    });

  });

  describe('decrement', () => {

    test('should return an action with type DECREMENT when called', () => {
      const action = decrement();
      const expectedAction = {
        type: DECREMENT,
      };

      expect(action).toEqual(expectedAction);
    });

  });

});
