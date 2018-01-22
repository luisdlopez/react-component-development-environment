import * as React from 'react';
import Counter, { ICounterProps } from '../../../src/components/Counter/Counter';
import { shallow } from 'enzyme';

describe('Counter', () => {

  const DEFAULT_PROPS: ICounterProps = {
    value: 0,
    onDecrement: () => null,
    onIncrement: () => null,
  };

  test('basic snapshot', () => {
    const wrapper = shallow(<Counter {...DEFAULT_PROPS}/>);
    expect(wrapper).toMatchSnapshot();
  });

  describe('value displayed', () => {

    test('value displayed should be 0 when value passed as props is 0', () => {
      const wrapper = shallow(<Counter {...DEFAULT_PROPS}/>);
      // text inside the span that displayed the current counter value
      const text = wrapper.find('p > span').text();

      expect(text).toBe('0');
    });

    test('value displayed should be -1 when value passed as props is -1', () => {
      const props = Object.assign({}, DEFAULT_PROPS, { value: -1 });
      const wrapper = shallow(<Counter {...props}/>);
      // text inside the span that displayed the current counter value
      const text = wrapper.find('p > span').text();

      expect(text).toBe('-1');
    });

    test('value displayed should be 1 when value passed as props is 1', () => {
      const props = Object.assign({}, DEFAULT_PROPS, { value: 1 });
      const wrapper = shallow(<Counter {...props}/>);
      // text inside the span that displayed the current counter value
      const text = wrapper.find('p > span').text();

      expect(text).toBe('1');
    });

  });

  describe('actions', () => {

    test('onIncrement should be called when button "Increment" is clicked', () => {
      const props = Object.assign({}, DEFAULT_PROPS, { onIncrement: jest.fn() });
      const wrapper = shallow(<Counter {...props}/>);
      // click first button (increment)
      wrapper.find('button').at(0).simulate('click');

      expect(props.onIncrement).toHaveBeenCalledTimes(1);
    });

    test('onDecrement should be called when button "Decrement" is clicked', () => {
      const props = Object.assign({}, DEFAULT_PROPS, { onDecrement: jest.fn() });
      const wrapper = shallow(<Counter {...props}/>);
      // click second button (decrement)
      wrapper.find('button').at(1).simulate('click');

      expect(props.onDecrement).toHaveBeenCalledTimes(1);
    });

  });

});
