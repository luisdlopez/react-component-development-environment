import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import CounterWrapper from '../src/components/Counter';
import { ICounterProps } from '../src/components/Counter/Counter';

const { Counter, reducer, actions } = CounterWrapper;
const STORIES = storiesOf('Counter', module);

STORIES.add('default display', () => {
  const props: ICounterProps = {
    value: 0,
    onIncrement: action('increment'),
    onDecrement: action('decrement'),
  };
  return (
    <Counter {...props}/>
  );
});

STORIES.add('with redux, actions and reducer', () => {
  const { increment, decrement } = actions;
  const store = createStore(reducer, null, composeWithDevTools());

  // setup the ReorderLetters component with Redux
  const mapStateToProps = (state: number) => ({ value: state });
  const mapDispatchToProps = { onIncrement: increment, onDecrement: decrement };
  const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);

  return (
    <Provider store={store}>
      <div>
        <ConnectedCounter/>
      </div>
    </Provider>
  );
});
